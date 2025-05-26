## 🧙‍♀️ Wizardly Tips & Tricks

Here lie a handful of enchanted scrolls to sharpen your scripting sorcery. Whether you're conjuring loops or binding spells together, these tricks will make your commandcraft smoother than a phoenix feather quill.

### 🔁 Summon Output with Command Substitution

```sh
echo "The stars say: `date`"
FILES=$(ls | count)
echo "📂 Files discovered: $FILES"
```

🌟 Use backticks or `$(...)` to invoke command results mid-incantation. It's like spellcasting with echo-location.

> [🧮 Why `count` and not `wc`?](#count-things-reliably) — Because `wc` fibs and `count` is a truth-teller.

#### 🧠 Enchant Arithmetic on the Fly

You can also evaluate mathmatical expressions and save them to a variable. In this case, note the syntax is `$((expression))`:

```sh
STRENGTH=$((5 + 2 * 3))
echo "🧠 Spell power: $STRENGTH"
```

**Output:**
```
$ 🧠 Spell power: 11
```

> No wand necessary. Yes, we honor the sacred laws of [PEMDAS](https://www.mathsisfun.com/operation-order-pemdas.html). Order matters—even in magic.

### 🔗 Chain Spells for Conditional Casting

```sh
mkdir logs && echo "📝 Logs chamber summoned"
cat scroll.txt || echo "❌ That scroll vanished"
mkdir cave && cd cave || echo "🚫 No entry to the cave!"
```

Use `&&` to proceed if the magic succeeds, or `||` to gracefully recover when your potion explodes.

### 🧙‍♂️ Prompt the Apprentice with `read`

```sh
read wizard_name "What name do you answer to?" Merlin
echo "✨ Welcome, $wizard_name"
```

Perfect for interactive scripts, fortune tellers, and dramatic entrances.

### 🔄 Write Once, Cast Forever with Functions

```sh
announce(msg) {
  echo "📣 Hear ye: $msg"
}

announce "The dragons have returned!"
```

Reusable magic circles. Name them, call them, wield them.

### 🔐 Preserve Your Secrets with export

```sh
export FAVORITE_SPELL=polymorph
```

Stored safely in your arcane environment, `FAVORITE_SPELL` now follows you from scroll to scroll.

### 🧮 Count Like a Conjurer{#count-things-reliably}

```sh
ls | count
```

Use `count` instead of `wc` to see what’s really there. Especially after commands like `ls` that like to decorate their output. `count` sees through the illusion 🪞 and is specifically designed to handle browser shell quirks like inconsistent whitespace or multi-column output. If you're counting files — this is the way. Period.

📜 With these tricks in hand, your shell scripting should feel a little more like spell weaving - and a lot less like debugging a cursed script. Happy conjuring! ✨