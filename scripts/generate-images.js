#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import toml from "toml";
import { openai } from "@ai-sdk/openai";
import { experimental_generateImage as generateImage } from "ai";
import dotenv from "dotenv";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, "..", ".env") });

// Configuration
const IMAGES_DIR = path.join(__dirname, "..", "images");
const DATA_FILE = path.join(__dirname, "..", "data.toml");
const IMAGE_SIZE = "1536x1024"; // 16:9 aspect ratio for gpt-image-1

// Ensure images directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

async function generateImageForEntry(entry, section) {
  // Generate a unique filename based on section and name
  const sanitizedName = entry.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  // Use "agents" prefix for hosted-agents section
  const filePrefix = section === "hosted-agents" ? "agents" : section;
  const imagePath = path.join(IMAGES_DIR, `${filePrefix}-${sanitizedName}.jpg`);
  const relativeImagePath = `images/${filePrefix}-${sanitizedName}.jpg`;

  // Check if image already exists
  if (fs.existsSync(imagePath)) {
    console.log(`✓ Image already exists for ${entry.name}`);
    return relativeImagePath;
  }

  // Prepare the prompt with random diversity inclusion
  const diversityPrompt =
    Math.random() < 0.25
      ? "*IF* your image includes a human character, ensure they are not caucasian (so that we have a diversity of representations)."
      : "";

  const prompt = `Please design a poster image representing ${entry.name}. Don't include text. Make it have the feel of movie poster artwork. Prefer teal/gold color schemes. It's OK for the image to be dramatic, but don't make them creepy/scary. No hoodies, masks, ABSOLUTELY **no weapons**. The image doesn't have to include a human character (but it can do). ${diversityPrompt}

---

## ${entry.name}

${entry.summary}

${entry.detail}`;

  console.log(`🎨 Generating image for ${entry.name}...`);

  try {
    const { image, providerMetadata } = await generateImage({
      model: openai.image("gpt-image-1"),
      prompt: prompt,
      size: IMAGE_SIZE,
      providerOptions: {
        openai: { quality: "high" },
      },
    });

    // Save the image
    // The image is returned as base64
    const imageBuffer = Buffer.from(image.base64, "base64");
    
    // Convert PNG to JPEG using sharp
    await sharp(imageBuffer)
      .jpeg({ quality: 60, mozjpeg: true })
      .toFile(imagePath);

    console.log(`✓ Generated JPEG image for ${entry.name}`);
    return relativeImagePath;
  } catch (error) {
    console.error(
      `✗ Failed to generate image for ${entry.name}:`,
      error.message
    );
    return null;
  }
}

function updateTomlEntry(section, entryName, imagePath) {
  // Read the current TOML file
  const dataContent = fs.readFileSync(DATA_FILE, "utf-8");
  const lines = dataContent.split("\n");

  let inSection = false;
  let foundEntry = false;
  let updated = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if we're entering the target section
    if (line.startsWith(`[[${section}]]`)) {
      inSection = true;
      foundEntry = false;
    }

    // Check if we found the entry name
    if (
      inSection &&
      line.includes("name = ") &&
      line.includes(`"${entryName}"`)
    ) {
      foundEntry = true;
    }

    // Add image reference after the name field
    if (foundEntry && line.includes("name = ")) {
      // Check if next line is already an image reference
      if (i + 1 < lines.length && !lines[i + 1].includes("image = ")) {
        // Insert image reference on the next line
        lines.splice(i + 1, 0, `image = "${imagePath}"`);
        updated = true;
        break;
      } else if (i + 1 < lines.length && lines[i + 1].includes("image = ")) {
        // Update existing image reference
        lines[i + 1] = `image = "${imagePath}"`;
        updated = true;
        break;
      }
    }
  }

  if (updated) {
    // Write the updated content back
    fs.writeFileSync(DATA_FILE, lines.join("\n"));
    console.log(`📝 Updated data.toml with image reference for ${entryName}`);
  }
}

async function processEntries() {
  // Read the TOML file
  const dataContent = fs.readFileSync(DATA_FILE, "utf-8");
  const data = toml.parse(dataContent);

  // Process each section
  const sections = ["agents", "apps", "interfaces", "tools", "workflows", "hosted-agents"];
  let totalGenerated = 0;
  let totalSkipped = 0;

  for (const section of sections) {
    if (!data[section]) continue;

    for (const entry of data[section]) {
      // Skip if image already exists in TOML
      if (entry.image) {
        console.log(`✓ Image reference already exists for ${entry.name}`);
        totalSkipped++;
        continue;
      }

      // Generate image
      const imagePath = await generateImageForEntry(entry, section);

      if (imagePath) {
        // Immediately update the TOML file after successful generation
        updateTomlEntry(section, entry.name, imagePath);
        totalGenerated++;
      }
    }
  }

  return { totalGenerated, totalSkipped };
}

// Main execution
async function main() {
  console.log("🚀 Starting image generation for awesome-vibe-coding entries\n");

  if (!process.env.OPENAI_API_KEY) {
    console.error(
      "❌ Error: OPENAI_API_KEY not found in environment variables"
    );
    process.exit(1);
  }

  try {
    const { totalGenerated, totalSkipped } = await processEntries();

    console.log("\n✨ Image generation complete!");
    console.log(`   Generated: ${totalGenerated} images`);
    console.log(`   Skipped: ${totalSkipped} entries (already have images)`);
  } catch (error) {
    console.error("\n❌ Error:", error.message);
    process.exit(1);
  }
}

main();
