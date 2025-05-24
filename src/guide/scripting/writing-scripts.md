# 🪄 Browser Shell Scripting Guide

## 🧙‍♂️ Introduction

Welcome to the enchanted world of Tortal Shell scripting—where variables magically expand ✨, loops loop (usually), and command substitution is literal wizardry 🧙‍♀️. Here you'll learn how to tame the shell dragon 🐉, write scripts that are both useful and entertaining, and hopefully avoid sentient scripts (though no guarantees).

The shell speaks a Bash-like dialect featuring variable spells, looping incantations, conditional enchantments, arithmetic alchemy, pipes, chaining spells, and user-defined function charms.

---

## ✍️ Writing Scripts

Scripts are magical incantations you write in multi-line blocks. Each command supports variables, math, and pipes.

### 📝 Basic Syntax

```sh
# Create a magic variable
name="wizard"
echo "Greetings, $name"

# Math magic without a wand
count=$((1 + 2 * 3))
echo $count
```

Yes, the math checks out. No abacus required.

---

## 🧩 Control Structures

### 🤔 If Statements

```sh
if [ $count -le 5 ]; then
  echo "Count is tiny"
else
  echo "Count is mighty"
fi
```

* Ends with `fi`—"if" spelled backward. Because whimsy.

### 🔠 String Comparison

```sh
if [ "$NAME" = "Merlin" ]; then
  echo "Welcome back, wizard!"
fi
```

* Always quote your variables. Or don’t and enjoy endless debugging fun.

### 🔢 Numeric Comparison

```sh
if [ "$COUNT" -gt 3 ]; then
  echo "You have more than three dragons."
fi
```

---

### ♻️ While Loops

```sh
count=1
while [ $count -le 3 ]; do
  echo "Loop #$count"
  count=$((count + 1))
done
```

* Stops at 10,000 loops to keep your browser from combusting.

::: danger ⚠️ Beware Infinite Loops

```sh
count=0
while [ $count -eq 0 ]; do
  echo "Endless loop!"
done
```

Always increment/decrement your counters, or risk browser meltdown. You've been warned! 😱
:::

---

### 🔄 For Loops

```sh
for potion in health mana stamina; do
  echo "Brewing $potion potion"
done
```

Dynamic potions?

```sh
for i in $(seq 1 3); do
  echo "Potion #$i"
done
```

---

### 🧙‍♂️ Case Statements

```sh
spell="fireball"
case $spell in
  fireball) echo "Casting fireball!" ;;
  iceblast) echo "Chilly reception!" ;;
  *) echo "Unknown spell! Panic!" ;;
esac
```

---

## 🛠️ Functions

Functions—your reusable charms.

### ✨ Defining Functions

```sh
greet(name) {
  echo "Hello, magical $name!"
}
```

### 📢 Calling Functions

```sh
greet Gandalf
```

### 🔄 Recursive Magic

Factorials for showoffs:

```sh
factorial(n) {
  if [ $n -le 1 ]; then
    echo 1
    return
  fi
  prev=$(factorial $((n - 1)))
  echo $((n * prev))
}

echo "Factorial 5: $(factorial 5)"
```

---

## 🌀 Command Substitution

Teleport command outputs:

```sh
echo "Date: $(date)"
FILES=$(ls | count)
echo "$FILES items here!"
```

* Use `count` instead of `wc` for accurate file counts.

---

## 🔗 Chaining & Piping

### Pipes `|`

```sh
ls | grep "spellbook"
```

### Conditional Chains

```sh
mkdir potions && cd potions || echo "Can't enter potions!"
```

---

## 🎩 Tips & Tricks

### ✏️ Interactive Input

```sh
read wizard_name "What's your wizard name?" Merlin
echo "Welcome, $wizard_name"
```

### 🔮 Persistent Variables

```sh
export MAGIC_WORD=please
```

Available forever…or until cookie deletion 🍪.

### 📏 Counting Correctly

```sh
ls | count
```

`count`—the wizard-approved counting spell.

---

## 🚧 Limitations

### ❌ No True Concurrency

Everything executes politely, one after the other.

### 🚫 No Native Binaries

All commands are JS-built. No sneaky system calls.

### 🗂️ Virtual Files Only

Files are safely sandboxed in-browser.

### 🌐 Limited Network Magic

Only built-in network spells (`ping`, `curl`). No raw socket alchemy.

### 🛠️ Limited Bash Dialect

Supported ✅:

* `if`, `else`, `fi`
* `while`, `for`, `case`
* Functions with parentheses
* Arithmetic operations
* Command substitutions
* Pipes & chaining
* Positional args

Unsupported ❌:

* No `[[ ]]`, heredocs, or `select`

Enjoy your shell scripting magic responsibly! 🪄✨
