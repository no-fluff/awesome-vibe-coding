# awesome-vibe-coding TOML Data Format

This repository uses a data-driven approach where all entries are stored in `data.toml` and the `README.md` is automatically generated from this structured data.

## TOML Structure

The `data.toml` file contains five main sections corresponding to the categories in the README:

### Section Mappings

- **Agents** → `[[agents]]`
- **Vibe-coding apps** → `[[apps]]`
- **Agent interfaces** → `[[interfaces]]`
- **Tools and MCP servers** → `[[tools]]`
- **Vibe-coding workflows** → `[[workflows]]`

## Entry Format

Each entry follows this TOML structure:

```toml
[[section_name]]
name = "Project Name"
website = "https://example.com/"
repo = "https://github.com/user/repo"
open_source = true
summary = "Headline up to 20 words."
detail = "One concise paragraph expanding on capabilities and use-cases."
category = "Relevant Category"
```

### Required Fields

- `name`: Project name (≥ 2 characters)
- `summary`: Headline description (≤ 20 words)
- `detail`: Detailed description (1-3 sentences)
- `open_source`: Boolean indicating if the project is open source
- `category`: Category classification

### Optional Fields

- `website`: Project website URL
- `repo`: GitHub repository URL
- `hot`: Boolean flag for exceptional/trending resources (maintainer-only)

**Note**: Either `website` or `repo` must be provided.

## Category Classifications

### Agents

Core coding agents that use LLMs to write/modify code. Typically CLI/daemon/desktop/server applications that expose tools for code editing, running, testing, and repository operations.

### Vibe-coding Apps

Applications that build significant product features on top of agents, such as project management, planning, product roadmapping, collaboration, and dashboards.

### Agent Interfaces

Primarily GUI/UX wrappers around existing agents that add convenience rather than core capabilities. Keywords include "GUI", "Electron app", "web UI for...".

### Tools and MCP Servers

Plugins, subagents, slash commands, MCP servers, and IDE extensions that extend agents but are not standalone coding agents.

### Vibe-coding Workflows

Prompts, configurations, playbooks, or step-by-step methods that change how agents build software.

## Example Entry

```toml
[[agents]]
name = "Opencode"
website = "https://opencode.ai/"
repo = "https://github.com/sst/opencode"
open_source = true
summary = "Open source terminal-based coding agent with multi-provider LLM support."
detail = "Opencode supports 75+ LLM providers and integrates with IDEs including Cursor and VS Code, enabling flexible model subscriptions for terminal-based development workflows."
category = "Open source"
```

## Important Guidelines

1. **Never include the `hot` attribute** when adding new entries - this is reserved for maintainers
2. **Use proper TOML syntax** and escaping for strings
3. **Entries are automatically sorted** alphabetically by name within each section
4. **Only edit `data.toml`** - never edit `README.md` directly as it's auto-generated
5. **Be factual and concise** - avoid hype and unverified claims
6. **Use existing categories** from the category classifications above
7. **Cloud-only agents are not open source** - if they can run on your own hardware they should be in the main "agents" section
