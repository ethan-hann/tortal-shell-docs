# ✨ Welcome to the Tortal Shell ✨

Greetings, browser-bound adventurer! You've discovered the magical archives of the **Tortal Shell**—the ultimate command-line sorcery, entirely powered by your browser. No servers. No backend. Just pure client-side wizardry in TypeScript. 🧙‍♂️

## 🧐 What's This All About?

The Tortal Shell is a whimsical, Bash-inspired command-line environment that lives right in your browser. It comes fully loaded with its own virtual file system, handy built-in utilities, scripting magic, and a sprinkle of humor. Your files and settings reside in your browser's storage, persisting only if you grant cookie consent (like a polite cookie-loving gnome 🍪).

::: tip Are you for real? 💁
No tricks—this isn’t a remote shell! Every command and script runs right in your own tab.
:::

## 🌟 Key Features

* 🖥️ **Interactive Command Line**: Enjoy autocomplete, command history, Ctrl+C support, and prompts with personality.
* 📁 **Virtual File System**: Familiar commands like `ls`, `cd`, `cat`, `mkdir`, and `rm` work seamlessly—browser-style.
* 🛠️ **Over 50 Built-in Commands**: Everything from `curl` and `json` to quirky utilities like `fortune`.
* 🔗 **Pipes & Chaining**: Combine commands effortlessly with `|`, `&&`, and `||`.
* 📜 **Scripting Engine**: Craft scripts using loops (`if`, `for`, `while`), conditionals (`case`), functions, arithmetic, and interactive commands (`read`, `export`).
* 🔒 **Persistent Environment**: Keep your favorite variables alive across sessions with `export` (assuming the cookies align).

## 🚀 Getting Started

New here? Let's get rolling with some beginner-friendly magic:

```sh
help               # See available spells (commands)
mkdir magicdir     # Create a cozy new directory
cd magicdir        # Step inside your new realm
echo 'echo Hello!' >> greet.sh
run greet.sh       # Let your script speak!
```

For more enchanting first steps, check out the [Getting Started](/guide/) page.

## 🎩 Quick Examples

```sh
touch hello.txt
edit hello.txt
cat hello.txt

ls | grep txt
count=$(ls | count)
echo "There are $count magical things here"
```

Yes, nested substitutions (`$(...)`) and arithmetic (`$((...))`) are fully supported. Go ahead, amaze yourself. 🎉

## 📚 Explore the Docs

* 📖 **[Commands](/reference/)** — Every incantation, lovingly documented
* 📜 **[Scripting Guide](/guide/scripting)** — Master loops, conditions, substitutions, and more
* 🧙 **[Advanced Tips](/guide/advanced-tips)** — Secret spells, quirks, and minor miracles
* 🪟 **[API](https://tortal.tech/terminal/api)** - A look behind the curtain at how the magic happens

Grab your favorite potion 🧪, open up your Tortal Shell, and let the browser-bound adventure begin!

> **Welcome to the browser terminal you never knew you needed.** 🚀🐢
