# Getting Started

Learn how to navigate the Tortal Tech Shell and perform your first tasks.

## 🟢 Your First Commands

```sh
help        # List all available commands
about       # Overview of the shell features
ls          # List files in the current directory
```

## 📦 Command Structure

Most commands follow this pattern:

```sh
command [options] [arguments]
```

Examples:

```sh
ls -l                  # Long listing
cat file.txt           # View file contents
echo "Hello" >> out    # Append text to a file
```

## 📁 Navigating the File System

- `ls` – List files and directories
- `cd folder` – Change directory
- `pwd` – Show current directory path
- `mkdir name` – Create directory
- `tree` – Display folder hierarchy

## ✍️ Creating and Editing Files

```sh
touch notes.txt                 # Create file
echo "Hello" >> notes.txt       # Append text
cat notes.txt                   # View contents
edit notes.txt                  # Open editor
cp notes.txt backup.txt         # Copy file
mv notes.txt renamed.txt        # Rename
rm renamed.txt                  # Delete file
```

## 🧾 Running Scripts

```sh
# Create a script
echo "echo Hello, $1" >> greet.sh

# Run it with an argument
run greet.sh World
```

Inside scripts, arguments are available as `$1`, `$2`, etc. Named environment variables are also available, e.g., `$USER`, `$PROMPT`.

## ⌨️ Input, History, and Autocomplete

- `read name "Prompt"` – Prompt for user input.
  
  > 💡 The `read` command is only available within a script.
- Use ↑ / ↓ to browse history
- Press `Tab` to auto-complete filenames.
- Press `Ctrl+C` to cancel a running command or input

## 🧠 Get Help

Type `help` or `help command_name` for usage info:

```sh
help grep
help run
```

## 🚀 Demo Project

Use this command to generate a sample playground in the current directory:

```sh
template
```

This includes example folders and scripts.

## ✅ Next Steps

- Try piping and chaining: `cat file | grep hello && echo found`
- Explore scripting: loops, conditionals, functions
- Customize your environment:
  - `export NAME=Alice`
  - `export PROMPT=>`

Happy Scripting!
