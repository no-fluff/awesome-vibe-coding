# Awesome Vibe Coding

<!--## Getting started with vibe coding -->

<!--## The essential resources -->

<!--## Advanced vibe coding -->

* [**Agents**](#-agents)
    
* [**Vibe-coding apps**](#-vibe-coding-apps)
    
* [**Agent interfaces**](#-agent-interfaces)
    
* [**Tools and MCP servers**](#-tools-and-mcp-servers)
    * [Memory](#-memory)
    * [Task management](#-task-management)
    * [Codebase understanding](#-codebase-understanding)
    * [Security](#-security)
    * [Agent feedback](#-agent-feedback)
    * [Design](#-design)
    * [Backups and change management](#-backups-and-change-management)
    * [Other tools](#-other-tools)
* [**Vibe-coding workflows**](#-vibe-coding-workflows)
    
* [**Cloud-only agents**](#-cloud-only-agents)
    
* [Contributing](#contributing)

<br />

## <img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/agents.png" width="36" height="36" alt="Agents" align="absmiddle" />&nbsp; Agents

<details>
  <summary><strong>🔥 <a href="https://www.anthropic.com/claude-code">Claude Code</a></strong> AI-powered terminal coding assistant with deep codebase understanding and multi-file coordination.</summary>

  <blockquote>Claude Code embeds Claude Opus 4.1 directly in developers' terminals, providing agentic search across entire codebases, coordinated multi-file changes, and direct command execution in development environments with integrations for VS Code, JetBrains IDEs, GitHub, and enterprise tools.</blockquote>
</details>

<details>
  <summary><strong><a href="https://cline.bot/">Cline</a> <a href="https://github.com/cline/cline"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Open source AI coding agent for VS Code with autonomous capabilities and multi-model support.</summary>

  <blockquote>Cline operates as a VS Code extension with autonomous file editing, terminal command execution, and browser automation capabilities. Features client-side architecture for security, supports multiple AI providers including Claude and Gemini, and offers transparent AI decision-making with human approval workflows.</blockquote>
</details>

<details>
  <summary><strong><a href="https://cursor.com">Cursor</a></strong> AI-powered code editor with predictive tab completion and natural language code editing.</summary>

  <blockquote>Cursor is an AI-enhanced code editor that provides intelligent tab completion, codebase understanding, and natural language code modification capabilities. Imports VSCode extensions and themes while offering seamless AI integration for enhanced developer productivity.</blockquote>
</details>

<details>
  <summary><strong><a href="https://google-gemini.github.io/gemini-cli/">Gemini CLI</a> <a href="https://github.com/google-gemini/gemini-cli"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Open source terminal-based AI agent with Gemini 2.5 Pro and multimodal capabilities.</summary>

  <blockquote>Gemini CLI brings Google's Gemini AI directly to the terminal with code generation, Google Search integration, file operations, and 1M token context window. Supports multiple authentication methods and offers extensible architecture for developer workflows.</blockquote>
</details>

<details>
  <summary><strong><a href="https://kilocode.ai/">Kilo Code</a> <a href="https://github.com/Kilo-Org/kilocode"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Open source VS Code AI coding agent with 400+ model support and multi-mode development assistance.</summary>

  <blockquote>Kilo Code provides multiple agent modes (Orchestrator, Architect, Code, Debug) with automatic context searching, memory bank for project retention, and hallucination-free code generation. Supports 400+ AI models via OpenRouter without requiring API keys and includes browser automation capabilities.</blockquote>
</details>

<details>
  <summary><strong><a href="https://github.com/openai/codex">OpenAI Codex CLI</a> <a href="https://github.com/openai/codex"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Experimental terminal-based coding agent with configurable sandbox modes.</summary>

  <blockquote>Provides AI-powered code generation, refactoring, testing, and security scanning capabilities through both OpenAI and open-source models, with safety features including configurable sandbox execution to prevent unrestricted file access.</blockquote>
</details>

<details>
  <summary><strong><a href="https://opencode.ai/">Opencode</a> <a href="https://github.com/sst/opencode"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Open source terminal-based coding agent with multi-provider LLM support.</summary>

  <blockquote>Opencode supports 75+ LLM providers and integrates with IDEs including Cursor and VS Code, enabling flexible model subscriptions for terminal-based development workflows.</blockquote>
</details>

<details>
  <summary><strong><a href="https://www.all-hands.dev/">OpenHands</a> <a href="https://github.com/All-Hands-AI/OpenHands"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Open source AI software development agent platform with autonomous coding capabilities.</summary>

  <blockquote>OpenHands enables AI agents to perform developer tasks autonomously including code modification, terminal commands, web browsing, and API calls. Supports multiple LLM providers with recommended Claude Sonnet 4 integration and offers both GUI and CLI interfaces for flexible development workflows.</blockquote>
</details>

<details>
  <summary><strong><a href="https://github.com/QwenLM/qwen-code">Qwen Code</a> <a href="https://github.com/QwenLM/qwen-code"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> AI coding assistant CLI for exploring, developing, and automating software workflows.</summary>

  <blockquote>Qwen Code is an intelligent command-line tool that helps developers understand, refactor, and generate code using advanced AI models. It provides workflow automation, code analysis, and supports multiple authentication methods across different regional providers.</blockquote>
</details>

<details>
  <summary><strong><a href="https://zed.dev/">Zed</a> <a href="https://github.com/zed-industries/zed"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> High-performance collaborative code editor with AI-powered agentic editing capabilities.</summary>

  <blockquote>Zed is a next-generation code editor built in Rust that enables fluent collaboration between humans and AI. Features native AI integration for code generation and transformation with upcoming LLM support, multiplayer editing, and custom language models for edit prediction.</blockquote>
</details>

<br />

## <img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/apps.png" width="36" height="36" alt="Apps" align="absmiddle" />&nbsp; Vibe-coding apps

*Soup-to-nuts apps for vibing.*

<details>
  <summary><strong>🔥 <a href="https://kiro.dev/">Kiro</a></strong> AI-powered IDE with spec-driven development and autonomous task execution.</summary>

  <blockquote>Kiro transforms prompts into structured requirements and implementation tasks, supporting multimodal inputs and agent hooks for automated background workflows with Claude Sonnet integration.</blockquote>
</details>

<details>
  <summary><strong><a href="https://github.com/opactorai/Claudable">Claudable</a> <a href="https://github.com/opactorai/Claudable"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> AI-powered web application builder with natural language development and instant deployment.</summary>

  <blockquote>Claudable enables users to create web applications through natural language descriptions using Claude Code and Cursor CLI agents. Features instant live preview, one-click Vercel deployment, automatic GitHub version control, and Supabase database integration with beautiful UI generation using Tailwind CSS and shadcn/ui.</blockquote>
</details>

<br />

## <img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/interfaces.png" width="36" height="36" alt="Interfaces" align="absmiddle" />&nbsp; Agent interfaces

*Use your AI agent outside the terminal.*

<details>
  <summary><strong><a href="https://github.com/baryhuang/claude-code-by-agents">Agentrooms</a> <a href="https://github.com/baryhuang/claude-code-by-agents"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Multi-agent workspace for collaborative development with Claude CLI.</summary>

  <blockquote>Agentrooms provides desktop and web interfaces for coordinating specialized AI agents in collaborative software development workflows, enabling task routing via @agent-name mentions, automatic decomposition, and management of complex multi-agent projects using Claude CLI as the underlying engine.</blockquote>
</details>

<details>
  <summary><strong><a href="https://claudecodeui.siteboon.ai/">Claude Code UI</a> <a href="https://github.com/siteboon/claudecodeui"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Web and mobile interface for Claude Code with responsive design and Git integration.</summary>

  <blockquote>Claude Code UI provides a multi-device interface with project browser, file explorer with syntax highlighting, session management, and security-focused tool permissions. Supports Claude Sonnet 4, Opus 4.1, and GPT-5 models with React-based responsive design for desktop and mobile development workflows.</blockquote>
</details>

<details>
  <summary><strong><a href="https://github.com/tobias-schuemann/claude-frontend">claude-frontend</a> <a href="https://github.com/tobias-schuemann/claude-frontend"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Visual interface for AI-powered code modifications with Claude CLI.</summary>

  <blockquote>claude-frontend provides a browser widget that allows developers to select webpage elements and send them to Claude for instant code modifications, supporting multiple frameworks including Next.js, Vite, React, and Vue in local development environments.</blockquote>
</details>

<details>
  <summary><strong><a href="https://conductor.build/">Conductor</a></strong> Desktop application for parallel management and orchestration of Claude Code agents.</summary>

  <blockquote>Conductor enables running multiple Claude Code agents simultaneously with isolated workspaces, progress monitoring, and git worktree management. Built for developers seeking to maximize AI-assisted coding productivity through parallel agent workflows.</blockquote>
</details>

<details>
  <summary><strong><a href="https://github.com/stravu/crystal">Crystal</a> <a href="https://github.com/stravu/crystal"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Desktop Electron app for managing multiple Claude Code sessions in parallel git worktrees.</summary>

  <blockquote>Crystal enables developers to run multiple Claude Code AI sessions simultaneously with isolated git worktrees for each session. Features persistent conversation tracking, built-in git operations, change visualization, and desktop notifications for streamlined parallel AI-assisted development workflows.</blockquote>
</details>

<details>
  <summary><strong><a href="https://happy.engineering/">Happy</a> <a href="https://github.com/slopus/happy"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Mobile client for Claude Code with remote access and cross-device synchronization.</summary>

  <blockquote>Happy enables developers to control Claude Code sessions remotely via mobile and web apps, providing push notifications, instant device switching, and end-to-end encrypted code transmission across iOS, Android, and web platforms.</blockquote>
</details>

<details>
  <summary><strong><a href="https://opcode.sh/">opcode</a> <a href="https://github.com/getAsterisk/opcode"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Desktop GUI for Claude Code with session management and custom agent creation.</summary>

  <blockquote>Opcode provides a visual command center for Claude Code featuring project browsers, session history tracking, custom AI agents with background execution, usage analytics, and process isolation for secure AI-assisted development workflows.</blockquote>
</details>

<details>
  <summary><strong><a href="https://www.vibekanban.com/">Vibe Kanban</a> <a href="https://github.com/BloopAI/vibe-kanban"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Kanban-style interface for managing and orchestrating multiple AI coding agents.</summary>

  <blockquote>Vibe Kanban provides a web-based dashboard for switching between different coding agents, executing multiple agents in parallel or sequence, and tracking task statuses. Built with Rust and TypeScript, it centralizes agent configuration and supports agents like Claude Code, Gemini CLI, and Codex.</blockquote>
</details>

<details>
  <summary><strong><a href="https://github.com/sahithvibudhi/vibe-tree">VibeTree</a> <a href="https://github.com/sahithvibudhi/vibe-tree"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Desktop application for parallel AI-assisted development across multiple git worktrees.</summary>

  <blockquote>VibeTree enables developers to work on multiple features simultaneously using parallel git worktrees with integrated Claude support. Features persistent terminal sessions, VS Code and Cursor integration, and streamlined workflow management to eliminate context switching in AI-assisted development.</blockquote>
</details>

<details>
  <summary><strong><a href="https://vt.sh/">VibeTunnel</a> <a href="https://github.com/amantus-ai/vibetunnel"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Web-based terminal proxy enabling browser access to Mac terminals with remote capabilities.</summary>

  <blockquote>VibeTunnel turns any browser into a Mac terminal interface with zero configuration, supporting multiple terminal sessions, Git follow mode, and remote access via Tailscale or ngrok. Features AI agent monitoring and dynamic terminal titles for enhanced development workflows.</blockquote>
</details>

<br />

## <img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/tools.png" width="36" height="36" alt="Tools" align="absmiddle" />&nbsp; Tools and MCP servers

*Everything you can plug into a coding agent.*

### &bull; Memory

<details>
  <summary><strong><a href="https://github.com/coleam00/Archon">Archon</a> <a href="https://github.com/coleam00/Archon"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> MCP server and knowledge management platform for AI coding assistants.</summary>

  <blockquote>Archon provides custom knowledge bases with web crawling, vector search, and task management capabilities, supporting multiple LLMs and offering 10 MCP tools for enhanced RAG queries and collaborative development workflows.</blockquote>
</details>

<details>
  <summary><strong><a href="https://github.com/pi22by7/In-Memoria">In Memoria</a> <a href="https://github.com/pi22by7/In-Memoria"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Persistent intelligence infrastructure MCP server that learns coding patterns for AI agents.</summary>

  <blockquote>In Memoria provides a Model Context Protocol server with Rust-based engines for AST parsing, pattern learning, and semantic code analysis. Learns developer-specific coding styles, naming conventions, and architectural decisions, offering 17 tools for codebase analysis and context-aware recommendations across AI coding assistants.</blockquote>
</details>

<details>
  <summary><strong><a href="https://github.com/ceorkm/kratos-mcp">Kratos MCP</a> <a href="https://github.com/ceorkm/kratos-mcp"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Memory system MCP server for AI coding tools with 95.8% context accuracy.</summary>

  <blockquote>Kratos MCP provides persistent memory for AI coding tools using a Four Pillars Framework with SQLite storage, ensuring AI maintains project context across sessions with sub-10ms retrieval times and automatic project isolation.</blockquote>
</details>

<br />

### &bull; Task management

<details>
  <summary><strong><a href="https://smtg-ai.github.io/claude-squad/">Claude Squad</a> <a href="https://github.com/smtg-ai/claude-squad"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Terminal application for managing multiple AI coding agents in isolated git workspaces.</summary>

  <blockquote>Claude Squad coordinates multiple AI agents like Claude Code, Codex, and Aider using tmux sessions and git worktrees for isolation. Features background task completion, session management, change review workflows, and automatic GitHub branch operations for streamlined multi-agent development.</blockquote>
</details>

<details>
  <summary><strong><a href="https://github.com/ryanmac/code-conductor">Code Conductor</a> <a href="https://github.com/ryanmac/code-conductor"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Multi-agent orchestration tool enabling parallel AI coding workflows with git worktree isolation.</summary>

  <blockquote>Code Conductor orchestrates multiple AI coding agents simultaneously across isolated git worktrees to eliminate sequential bottlenecks. Features automatic task claiming, zero merge conflicts through workspace isolation, and streamlined GitHub Actions workflows for autonomous agent development.</blockquote>
</details>

<details>
  <summary><strong><a href="https://github.com/justin-schroeder/dmux">Dmux</a> <a href="https://github.com/justin-schroeder/dmux"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> CLI tool for simplified parallel development with AI agents using tmux and git worktrees.</summary>

  <blockquote>Dmux enables developers to run multiple parallel development agents simultaneously with isolated git worktrees and tmux panes for each task. Features AI-powered branch naming and commit management, Claude Code integration, and one-command merge workflows for streamlined multi-agent development.</blockquote>
</details>

<br />

### &bull; Codebase understanding

<details>
  <summary><strong><a href="https://github.com/nyatinte/ccexp">ccexp</a> <a href="https://github.com/nyatinte/ccexp"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Interactive CLI tool for exploring and managing Claude Code configuration files.</summary>

  <blockquote>ccexp provides a split-pane terminal interface for discovering project and user-level Claude Code configurations including memory files, slash commands, and subagent settings. Features keyboard-driven navigation, live search, file preview with syntax highlighting, and batch operations for efficient configuration management.</blockquote>
</details>

<details>
  <summary><strong><a href="https://github.com/ericbuess/claude-code-project-index">Claude Code Project Index</a> <a href="https://github.com/ericbuess/claude-code-project-index"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> CLI tool that generates architectural awareness for AI coding assistants through project indexing.</summary>

  <blockquote>Claude Code Project Index automatically creates PROJECT_INDEX.json files with project structure, functions, classes, and call relationships. Supports multiple programming languages and provides three usage modes for enhanced codebase understanding in AI-assisted development workflows.</blockquote>
</details>

<details>
  <summary><strong><a href="https://github.com/glebkudr/shotgun_code">Shotgun App</a> <a href="https://github.com/glebkudr/shotgun_code"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Desktop tool for preparing comprehensive project context for AI coding assistants.</summary>

  <blockquote>Shotgun App enables one-click generation of structured project payloads for LLM interactions, allowing selective file exclusion and supporting whole-repository analysis and modification workflows with ChatGPT, Gemini, and other AI assistants.</blockquote>
</details>

<br />

### &bull; Security

<details>
  <summary><strong><a href="https://github.com/nikvdp/cco">cco</a> <a href="https://github.com/nikvdp/cco"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Protective wrapper for Claude Code with zero-config sandboxed execution.</summary>

  <blockquote>cco provides automatic sandboxing for Claude Code using native OS tools or Docker fallback, enabling secure isolated interactions while maintaining seamless user experience and preserving project context across platforms.</blockquote>
</details>

<br />

### &bull; Agent feedback

<details>
  <summary><strong>🔥 <a href="https://github.com/microsoft/playwright-mcp">playwright-mcp</a> <a href="https://github.com/microsoft/playwright-mcp"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> MCP server providing browser automation capabilities using Playwright's accessibility tree.</summary>

  <blockquote>playwright-mcp enables LLMs to interact with web pages through structured accessibility snapshots rather than pixel-based input, offering deterministic browser automation with clicking, typing, navigation, and screenshot tools for precise web interactions.</blockquote>
</details>

<br />

### &bull; Design

<details>
  <summary><strong><a href="https://www.superdesign.dev/">Superdesign</a> <a href="https://github.com/superdesigndev/superdesign"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Open source AI design agent for generating UI mockups and components inside IDEs.</summary>

  <blockquote>Superdesign integrates directly into VS Code, Cursor, Windsurf, and Claude Code to generate UI screens, wireframes, and reusable components from natural language prompts. Enables parallel design exploration and rapid prototyping within development environments, eliminating context switching between design and coding workflows.</blockquote>
</details>

<br />

### &bull; Backups and change management

<details>
  <summary><strong><a href="https://claude-checkpoints.com/">Claude Checkpoints</a></strong> Automatic version control and backup tool for AI coding workflows with MCP integration.</summary>

  <blockquote>Claude Checkpoints provides comprehensive project tracking during AI-assisted development by creating automatic snapshots, offering visual diff viewing, and enabling instant project restoration. The macOS desktop application integrates with Claude Desktop via MCP server to provide safety and confidence during coding workflows with seamless task monitoring and recovery capabilities.</blockquote>
</details>

<br />

### &bull; Other tools

<details>
  <summary><strong><a href="https://github.com/eckardt/cchistory">cchistory</a> <a href="https://github.com/eckardt/cchistory"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Shell history tracker for Claude Code, extracting and organizing AI-executed commands across projects.</summary>

  <blockquote>cchistory is a command-line tool that captures and displays shell commands executed during Claude Code conversations, allowing developers to review, search, and analyze command history across different projects. It provides a seamless way to track and learn from AI-generated shell interactions.</blockquote>
</details>

<details>
  <summary><strong><a href="https://github.com/rz1989s/claude-code-statusline">Claude Code Enhanced Statusline</a> <a href="https://github.com/rz1989s/claude-code-statusline"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> 4-line terminal statusline for Claude Code with real-time cost tracking and MCP server monitoring.</summary>

  <blockquote>Claude Code Enhanced Statusline transforms the Claude Code terminal experience with a comprehensive statusline showing repository status, cost tracking, server health, and conversation timing. Features intelligent universal caching that reduces command execution by 70-90% and includes customizable themes with enterprise-grade configuration.</blockquote>
</details>

<br />

<br />

## <img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/workflows.png" width="36" height="36" alt="Workflows" align="absmiddle" />&nbsp; Vibe-coding workflows

*Agent rules and processes to help you ship higher-quality code, faster.*

<details>
  <summary><strong><a href="https://github.com/bmad-code-org/BMAD-METHOD">BMAD-METHOD</a> <a href="https://github.com/bmad-code-org/BMAD-METHOD"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> AI-driven agile development framework with specialized agent orchestration and context engineering.</summary>

  <blockquote>BMAD-METHOD combines agentic planning with context-engineered development, using specialized AI agents (Analyst, Product Manager, Architect, Scrum Master) to create detailed PRDs and hyper-detailed development stories that embed full implementation context and architectural guidance directly in story files.</blockquote>
</details>

<details>
  <summary><strong><a href="https://github.com/automazeio/ccpm">Claude Code PM</a> <a href="https://github.com/automazeio/ccpm"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> GitHub Issues-based project management system for AI-powered parallel development workflows.</summary>

  <blockquote>Claude Code PM transforms product requirements into GitHub Issues with traceable task breakdown, enabling 5-8 parallel AI agent streams instead of sequential work. Features automatic context preservation, reduces context switching by 89%, and accelerates feature delivery up to 3x while maintaining 75% reduction in bug rates.</blockquote>
</details>

<details>
  <summary><strong><a href="https://github.com/github/spec-kit">Spec Kit</a> <a href="https://github.com/github/spec-kit"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a></strong> Spec-driven development methodology that makes specifications executable for AI-assisted software creation.</summary>

  <blockquote>Spec Kit enables intent-driven development by transforming rich specifications directly into working implementations using AI coding agents. Supports parallel implementation exploration and iterative system enhancement with explicit compatibility for Claude Code, GitHub Copilot, and Gemini CLI.</blockquote>
</details>

<details>
  <summary><strong><a href="https://www.task-master.dev/">Task Master</a></strong> AI-powered task management system for coding workflows with MCP integration.</summary>

  <blockquote>Task Master breaks down complex projects into manageable tasks, integrates with editors like Cursor and VS Code through MCP, and supports multiple AI providers to enhance development productivity without requiring API keys for Claude Code CLI usage.</blockquote>
</details>

<br />

## <img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/hosted-agents.png" width="36" height="36" alt="Workflows" align="absmiddle" />&nbsp; Cloud-only agents

*These closed-source agents are hosted for you.*

<details>
  <summary><strong><a href="https://bolt.new/">Bolt.new</a></strong> Cloud-based AI coding agent for building and deploying full-stack web applications through conversational prompts.</summary>

  <blockquote>Bolt.new provides a complete browser-based development environment with AI-powered code generation, supporting React, Vue, Next.js, and other modern frameworks. Features full npm ecosystem access, integrated terminal, automatic deployment to .bolt.host domains, and AI control over the entire development environment including filesystem and package management.</blockquote>
</details>

<details>
  <summary><strong><a href="https://devin.ai/">Devin</a></strong> Autonomous AI software engineer that completes complex engineering tasks across codebases.</summary>

  <blockquote>Devin handles code migration, refactoring, bug fixes, and development tasks with autonomous testing and PR creation, integrating with GitHub, Slack, Jira, and other platforms while learning from examples to improve performance over time.</blockquote>
</details>

<details>
  <summary><strong><a href="https://lovable.dev/">Lovable</a></strong> AI-powered web development platform for creating apps and websites through conversational interaction.</summary>

  <blockquote>Lovable enables users to create applications and websites by chatting with AI, offering collaborative workspaces, GitHub sync, and Supabase integrations. The platform supports various project types from prototypes to production apps with deployment options and MCP server capabilities for enhanced AI development workflows.</blockquote>
</details>

<details>
  <summary><strong><a href="https://chatgpt.com/codex">OpenAI Codex</a></strong> Cloud-based autonomous coding agent with multi-task execution and isolated environments.</summary>

  <blockquote>OpenAI Codex operates in secure cloud sandboxes to handle multiple software engineering tasks simultaneously, including writing features, fixing bugs, and running tests, with 75% accuracy and support for ChatGPT Plus/Pro subscriptions.</blockquote>
</details>

<details>
  <summary><strong><a href="https://v0.app/">v0</a></strong> AI-powered interface builder that generates React applications from text prompts and designs.</summary>

  <blockquote>v0 converts natural language descriptions into full-stack applications with UI, content, backend, and logic. Features agentic capabilities for research and planning, generates code using Next.js, React, and Tailwind CSS, and integrates with GitHub and Vercel for seamless deployment.</blockquote>
</details>

<br />

## Contributing

We're excited to have your contributions to awesome-vibe-coding! If you'd like to suggest a new resource, whether something you've built or something you find useful:

1. Open an issue on GitHub
2. Choose the appropriate resource type (e.g., Agent, Tool, Workflow)
3. Fill in what information you can -- at minimum, all the AI agent needs is the name and website/GitHub repo link.


