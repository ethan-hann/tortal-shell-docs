# ✨ Getting Started with Tortal Shell ✨

Welcome, aspiring shell wizard! 🧙 Here's how to dive headfirst into the magical browser-based terminal of Tortal Shell. No wands required—just your keyboard and a sense of adventure!

## 🟢 Your First Spell—I Mean, Commands

Cast these to familiarize yourself:

```sh
help          # Reveal every spell—er, command available
about         # Learn mystical insights about the shell
ls            # Peek at what's in your current directory
```

## 📦 Anatomy of a Command

Shell spells follow this mystical syntax:

```sh
command [options] [arguments]
```

Examples to get your potion brewing:

```sh
ls -l                  # Detailed view of files and folders
cat file.txt           # Peek inside the magical file
echo "Hello" >> out    # Add a friendly greeting to a file
```

## 📁 Wandering Through the File System

Navigate your browser's enchanted virtual world:

* `ls` – Reveal contents of your current chamber (list files)
* `cd folder` – Enter a new room (change directories)
* `pwd` – "Where am I?" (show current directory)
* `mkdir name` – Construct a brand-new room (create a directory)
* `tree` – Display your dungeon map (folder hierarchy)

## ✍️ Creating and Tinkering with Files

Create files with a swish and flick:

```sh
touch notes.txt                 # Conjure a file from thin air
echo "Hello" >> notes.txt       # Whisper words into your file
cat notes.txt                   # See what magic you've made
edit notes.txt                  # Summon the built-in editor
cp notes.txt backup.txt         # Duplicate your magical manuscript
mv notes.txt renamed.txt        # Change the incantation (rename)
rm renamed.txt                  # Poof! Make a file disappear
```

## 🧾 Summoning and Running Scripts

Scripts are like magic scrolls that execute multiple commands:

```sh
# Craft your first script
echo "echo Hello, $1" >> greet.sh

# Cast your script with an argument
run greet.sh World
```

Inside scripts, `$1`, `$2`, etc. are your friendly script arguments, ready for magical use. Environment variables like `$USER` or `$PROMPT` are also available.

## ⌨️ User Input, History, and Auto-completion

* `read name "What's your name?"` – Politely ask for input (script-only magic).

::: info
Remember, the `read` spell only works inside scripts. 🔮
:::

* Use ↑ / ↓ to travel through past commands
* Hit `Tab` to magically complete filenames
* `Ctrl+C` cancels your current incantation—handy for escaping spells gone awry!

## 🧠 Need Help? Ask the Shell!

Invoke the shell’s wisdom any time:

```sh
help grep      # What's this 'grep' magic?
help run       # How do I run my script?
```

## 🚀 Ready-Made Demo Magic

Invoke this command to conjure a demo playground:

```sh
template
```

This spell fills your directory with example folders, files, and scripts, ripe for magical experimentation.

## ✅ Your Next Quests

* Master pipes and chaining:

```sh
cat file | grep hello && echo "Magic found!"
```

* Dive into advanced scripting: loops, conditions, functions
* Customize your environment to suit your wizardly ways:

```sh
export NAME=Gandalf
export PROMPT="🧙 >"
```

Happy spellcasting, brave shell adventurer! 🌟
