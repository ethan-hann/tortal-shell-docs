# Browser Shell Documentation

Welcome to the documentation for the **Tortal Shell**, a powerful, fully client-side command-line interface that runs entirely in your web browser.

## What is the Browser Shell?

Tortal Shell is a TypeScript-powered shell that mimics Unix/Linux behavior. It runs entirely in your browser with no server dependencies, no installations, and no backend logic. Files, environment variables, and scripts are stored in browser storage (persisted only with cookie consent).

> 💡 All processing happens locally in the browser. This is not a remote terminal.

## Key Features

- **Interactive Command Line**: With autocompletion, command history, Ctrl+C support, and input prompts
- **Virtual File System**: Create, edit, copy, delete files and directories using familiar commands (`ls`, `cat`, `rm`, `cp`, `mv`, `mkdir`, etc.)
- **Built-in Commands**: Over 50 utilities including networking (`ping`, `curl`, `nslookup`), JSON parsing, math, games, ASCII art
- **Pipes & Chaining**: Compose commands using `|`, `&&`, `||`
- **Scripting Engine**: Write scripts using a simplified bash-like language with `if`, `for`, `while`, `case`, `functions`, `read`, and `export`
- **Persistent Environment**: Save and use environment variables across sessions using `export`

## Getting Started

See [Getting Started](getting-started.md) for some quick first steps with the shell.

## Quick Examples

```sh
# View all available commands
help

# Create a file
touch hello.txt

# Edit its contents
edit hello.txt

# Write and run a script
echo 'echo "Welcome!"' >> greet.sh
run greet.sh
```

## Documentation Sections

- **[Commands](commands/index.md)** – List and usage of built-in commands
- **[Scripting](scripting/index.md)** – Guide to writing and running shell scripts
- **[Advanced](advanced/tips-and-tricks.md)** – Tips, limitations, and deeper insights

Use the sidebar, links above, or navigation header to begin exploring.
