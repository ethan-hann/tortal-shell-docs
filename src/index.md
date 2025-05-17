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
- **Scripting Engine**: Write scripts using a simplified bash-like language with `if`, `for`, `functions`, `read`, and `export`
- **Persistent Environment**: Save and use environment variables across sessions using `export`

## Getting Started

To begin using the shell:

1. Open the terminal on the website
2. Type a command like `help` or `ls`
3. Use ↑/↓ to navigate history, and Tab to auto-complete

## Quick Examples

```sh
# View all available commands
help

# Create a file
touch hello.txt

# Edit its contents
edit hello.txt

# Write and run a script
echo 'echo "Welcome!"' > greet.sh
run greet.sh
```

## Documentation Sections

- **Getting Started** – First steps with the shell
- **Commands** – List and usage of built-in commands
- **Scripting** – Guide to writing and running shell scripts
- **Advanced** – Tips, limitations, and deeper insights

Use the sidebar or links above to begin exploring.
