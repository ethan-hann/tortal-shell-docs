# 🧩 Control Structures

Tortal Shell supports most of the same control structures you already know: `if-elif-else`, `case`, `while`, and `for`.

## 🤔 Basic If Statements

```sh
if [ $count -le 5 ]; then
  echo "Count is tiny"
else
  echo "Count is mighty"
fi
```

* Use `[ ... ]` or `test` for conditions.
* Ends with `fi`—"if" spelled backward. Because I needed a way to know when your `if` statement was done.

## 🧙‍♂️ Conditional Spellcasting: if, elif, else, fi

Sometimes a wizard's logic must branch—like a staff made from the World Tree itself. When one simple `if` won't do, call upon its ancient siblings: `elif` (the mystical middle path), and `else` (the fallback incantation).

```sh
read mood "How do you feel today, brave sorcerer?" meh

if [ "$mood" = "elated" ]; then
  echo "✨ You radiate pure mana! Cast with confidence."
elif [ "$mood" = "focused" ]; then
  echo "🧠 Your mind is sharp. The arcane bends to your will."
elif [ "$mood" = "meh" ]; then
  echo "😐 A neutral aura... perhaps a potion would help?"
elif [ "$mood" = "cursed" ]; then
  echo "☠️ Dark energies swirl. Proceed with caution!"
else
  echo "❓ Mood unknown. Divination spell required."
fi
```

**Output:**
```
$ run mood.sh
$ How do you feel today, brave sorcerer?
> focused
$ 🧠 Your mind is sharp. The arcane bends to your will.
```

Use it wisely, spellwright. Not all conditions are created equal, but all deserve a proper incantation.

## 🧮 Numeric Prophecies: if, elif, else, fi with Numbers

Whether counting dragons, mana crystals, or cursed runes, numeric logic is a must for any terminal sorcerer. Here's how to wield it:

```sh
read level "What is your wizard level?" 0

if [ $level -ge 100 ]; then
  echo "🧙‍♂️ Archmage detected. All spells unlocked. Reality is optional."
elif [ $level -ge 50 ]; then
  echo "🔮 High Mage status. You may now summon lesser deities."
elif [ $level >= 10 ]; then
  echo "✨ Apprentice no more! Welcome to the big leagues."
elif [ $level > 0 ]; then
  echo "📘 Beginner scroll unlocked. Try not to explode anything."
else
  echo "🐣 No magic detected. Perhaps try waving the wand first?"
fi
```

**Output:**
```
$ run level.sh
$ What is your wizard level?
> 42
$ ✨ Apprentice no more! Welcome to the big leagues.
```

* Don't forget: `fi` closes the block. It's short for "*finished incantation*" (probably).

## 🔠 String Comparison

```sh
if [ "$NAME" = "Merlin" ]; then
  echo "Welcome back, wizard!"
fi
```

* `=`, `==`, `===`, `!=`, `!==` supported for equality checks. Because we're cool like that.
* Always quote your variables. Or don’t and enjoy endless debugging fun.

## 🔢 Numeric Comparison

```sh
if [ "$COUNT" -gt 3 ]; then
  echo "You have more than three dragons."
fi
```

* Use `-gt` (`>`), `-lt` (`<`), `-le` (`<=`), `-ge` (`>=`), `-eq`, and `-ne` for all your numerical rituals.
* Unlike JavaScript, this shell doesn't lie about types. These are real number comparisons, not arcane coercions.

::: warning
Don't use `=`, `==`, or `===` for numerical comparisons; we aren't that cool. It will not work and *may* cause a rift to open between you and the terminal.
:::

## 🧙‍♂️ Case Statements: Spell Selection Mode

Sometimes your script needs to pick from a magical menu of options. That’s where case comes in — like a choose-your-own-adventure scroll 🧾.

```sh
spell="fireball"
case $spell in
  fireball) echo "🔥 You cast Fireball. It's super effective!" ;;
  iceblast) echo "❄️ Iceblast conjured! Enemies are chilled." ;;
  teleport) echo "✨ *Poof* You're somewhere else." ;;
  *) echo "⚠️ Unknown spell! Wild magic surges..." ;;
esac
```

* Each option is followed by ) and ends with ;; — like a polite bow after each performance.
* The *\** (*asterisk*) is your catch-all safety net. It ensures your script doesn’t panic if someone types `spell=banana`.

Need input from a suspicious user?

```sh
read spell "Choose your spell:" sparkle
case $spell in
  sparkle) echo "🌟 You shimmer with fabulous energy!" ;;
  smite) echo "⚡ Divine justice rains down." ;;
  vanish) echo "🚪 You've left the building." ;;
  *) echo "❓ That spell is... not in this realm." ;;
esac
```

::: tip ✨ Pro Tip
`case` statements are great for branching logic with style — like `if`/`else` but way more dramatic.
:::

## ✏️ Examples

Check out these examples for some ways you can level up your scripting.

## 🔮 Does it Exist?

Check if a mystical artifact—er, file—exists in your enchanted filesystem:

```sh
artifact="/wizards.txt"
if test -e "$artifact"; then
  echo "✨ Ah-ha! '$artifact' exists in this realm!"
else
  echo "🌀 '$artifact' seems lost to the void..."
fi
```

## 🧙‍♀️ File or Directory Spell?

Not sure if you're looking at a simple spell scroll (file) or an entire magical kingdom (directory)? Cast these incantations:

```sh
mystery="/realm"
if test -f "$mystery"; then
  echo "📜 '$mystery' is a mere scroll of secrets."
fi

if test -d "$mystery"; then
  echo "🏰 '$mystery' is a sprawling kingdom to explore!"
fi
```

Keep your file system tidy, and beware the curses of missing files! 🔍✨