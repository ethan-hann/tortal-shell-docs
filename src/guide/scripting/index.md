# 🪄 Browser Shell Scripting Guide

## 🧙‍♂️ Introduction

Welcome to the enchanted world of Tortal Shell scripting—where variables magically expand ✨, loops loop (usually), and command substitution is literal wizardry 🧙‍♀️. Here you'll learn how to tame the shell dragon 🐉, write scripts that are both useful and entertaining, and hopefully avoid sentient scripts (though no guarantees).

The shell speaks a Bash-like dialect featuring variable spells, looping incantations, conditional enchantments, arithmetic alchemy, pipes, chaining spells, and user-defined function charms.

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

## 🧩 Control Structures

### 🤔 Basic If Statements

```sh
if [ $count -le 5 ]; then
  echo "Count is tiny"
else
  echo "Count is mighty"
fi
```

* Use `[ ... ]` or `test` for conditions.
* Ends with `fi`—"if" spelled backward. Because whimsy.

### 🧙‍♂️ Conditional Spellcasting: if, elif, else, fi

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

### 🧮 Numeric Prophecies: if, elif, else, fi with Numbers

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

* Use `-gt` (`>`), `-lt` (`<`), `-le` (`<=`), `-ge` (`>=`), `-eq`, and `-ne` for all your numerical rituals.
* Unlike JavaScript, this shell doesn't lie about types. These are real number comparisons, not arcane coercions.
* Don't forget: `fi` closes the block. It's short for "*finished incantation*" (probably).

::: warning
Don't use `=`, `==`, or `===` for numerical comparisons. That will not work and cause a rift to open between you and the terminal.
:::

### 🔠 String Comparison

```sh
if [ "$NAME" = "Merlin" ]; then
  echo "Welcome back, wizard!"
fi
```

* `=`, `==`, `===`, `!=`, `!==` supported for equality checks. Because we're cool like that.
* Always quote your variables. Or don’t and enjoy endless debugging fun.

### 🔢 Numeric Comparison

```sh
if [ "$COUNT" -gt 3 ]; then
  echo "You have more than three dragons."
fi
```

### 📂 File Magic Checks

#### 🔮 Does it Exist?

Check if a mystical artifact—er, file—exists in your enchanted filesystem:

```sh
artifact="/wizards.txt"
if test -e "$artifact"; then
  echo "✨ Ah-ha! '$artifact' exists in this realm!"
else
  echo "🌀 '$artifact' seems lost to the void..."
fi
```

#### 🧙‍♀️ File or Directory Spell?

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

### ♻️ While Loops

Ah, the noble while loop—great for repeating spells until a condition fizzles.

```sh
count=1
while [ $count -le 3 ]; do
  echo "Looping spell #$count"
  count=$((count + 1))
done
```

* Automatically stops at 10,000 iterations, to protect your browser from magical meltdown.

::: danger ⚠️ Beware Infinite Loops
```sh{4}
count=0
while [ $count -eq 0 ]; do
  echo "This loop shall never end!"
  # no increment
done
```

* You forgot the counter spell (aka increment). Always update your condition or risk browser implosion 😱
:::

#### ➕ While with Increment

```sh
count=0
while [ $count -lt 5 ]; do
  echo "Count is currently $count"
  count++
done
```

* Yes, post-increment works. The shell speaks fluent ++.

#### ⛔ While with `break`

```sh
count=0
while [ $count -lt 5 ]; do
  if [ $count -eq 3 ]; then
    echo "Too spicy at $count, breaking the loop!"
    break
  fi
  echo "Tolerable count: $count"
  count=$((count + 1))
done
```

* `break` exits the loop like you just spotted a Minotaur. Swiftly and with purpose.

#### ↪️ While with `continue`

```sh
count=0
while [ $count -lt 5 ]; do
  count=$((count + 1))
  if [ $count -eq 3 ]; then
    echo "Count $count? Nah, we skip that nonsense."
    continue
  fi
  echo "Processing count $count"
done
```

* `continue` skips just this loop iteration. Great for dodging cursed numbers (looking at you, 3).


### 🔁 For Loops: March of the Variables

Need to cast a spell on a list of things? `for` loops let each item take the stage like a lineup of brave adventurers.

```sh
for n in 1 2 3; do
  echo "Looping through $n"
done
```

* It’s like roll call for your variables. Each one gets its 15 milliseconds of fame.

####  🧮 Dynamic For Loops with `seq`

Want your loop to count instead of conjuring hardcoded values?

```sh
for i in $(seq 1 4); do
  echo "Index $i"
done
```

**Output:**
```
Index 1
Index 2
Index 3
Index 4
```

Feeling spicy? Add a step and turn your loop into a teleportation spell:

```sh
for x in $(seq 0 2 8); do
  echo "Teleporting to even number: $x"
done
```

**Output:**
```
Teleporting to even number: 0
Teleporting to even number: 2
Teleporting to even number: 4
Teleporting to even number: 6
Teleporting to even number: 8
```

#### 🔁 Nested Loops: Chaos and Beauty

```sh
for outer in A B; do
  for inner in 1 2; do
    echo "$outer$inner"
  done
done
```

* Nesting loops is totally legal. Just remember to close every `do` with a `done`, or risk opening a recursive rift in the shell continuum.

### 🧙‍♂️ Case Statements: Spell Selection Mode

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

::: tip ✨ Pro tip
`case` statements are great for branching logic with style — like `if`/`else` but way more dramatic.
:::

## 🛠️ Functions: Your Reusable Wizardry

Functions are the enchanted scrolls of shell scripting — reusable blocks of logic that you can summon by name, pass offerings (a.k.a. arguments), and even loop into recursion rituals ✨. They help you clean up your spells, organize your incantations, and avoid repeating yourself like a cursed parrot.

### ✨ Defining a Function

```sh
greet(name) {
  echo "✨ Hello, $name!"
}
```

Want to go old school? Use positional spell slots:

```sh
multiply() {
  echo $(($1 * $2))
}
```

Or stick with mystical named parameters:

```sh
add(x, y) {
  echo $((x + y))
}
```

> You can mix and match styles. It won't summon demons. Probably.

### 🗣️ Calling a Function

```sh
greet Merlin
sum=$(add 7 5)
echo "Total magic power: $sum"
```

Yes, you can nest function calls inside substitutions inside arithmetic inside an existential crisis.

### ⏹️ Returning Early

```sh
check_level(level) {
  if [ $level -lt 10 ]; then
    echo "⚠️ Too weak!"
    return 1
  fi
  echo "✨ Access granted."
}

check_level $1
```

**Output:**
```
$ run check.sh 4
⚠️ Too weak!
```

* Use `return` to exit a function without drama.
  - `return 0` (or no `return`) indicates successful function execution.
  - `return` with anything else indicates failure.
* Use `exit` if you want to rage-quit the entire script.

### ♻️ Example: Recursive Factorial

```sh
factorial(n) {
  if [ $n -le 1 ]; then
    echo 1
    return
  fi
  prev=$(factorial $((n - 1)))
  echo $((n * prev))
}

echo "$1! = $(factorial $1)"
```

**Output:**
```
$ run factorial.sh 5
5! = 120
```

Perfect for impressing mortals or scaring JavaScript devs.

### 🕵️‍♂️ Example: File Type Detective

```sh
describe_file(target) {
  if test -d $target; then
    echo "📂 $target is a directory"
  elif test -f $target; then
    echo "📄 $target is a file"
  else
    echo "❓ $target does not exist"
  fi
}

describe_file /tmp
describe_file ./banana.png
```

Detective work, minus the trench coat.

### 🌿 Example: Fibonacci Spell

```sh
doNewLine=$2

fibonacci(n) {
  a=0
  b=1
  for i in $(seq 1 $n); do
    if [ $doNewLine = "true" ]; then
      echo "$a "
    else
      echo -n "$a "
    fi
    next=$((a + b))
    a=$b
    b=$next
  done
  echo
}

fibonacci $1
```

**Output:**
```sh
$ run fib.sh 7 false
0 1 1 2 3 5 8
```

```sh
$ run fib.sh 7 true
0
1
1
2
3
5
8
```

If you're summoning Fibonacci, you're either solving a riddle or flexing in front of your terminal.

Use functions early, use them often, and remember: any sufficiently advanced function is indistinguishable from magic. 🧙‍♀️

## ✨ Command Substitution: Summoning Output Into the Present

Command substitution is a spell of transmutation 🪄—it plucks the output of one incantation and teleports it directly into another. Like stuffing a miniature spellbook inside a fireball. Very efficient. Slightly unstable.

### 🧪 Basic Alchemy

```sh
echo "Now: `date`"
CURRENT=`pwd`
echo "Current directory: $CURRENT"
```

Or, cast with modern wizard syntax (fewer backticks, less arcane suffering):

```sh
FILES=$(ls | count)
echo "Number of magical artifacts: $FILES"
```

### 🪞 Use Cases for Command Teleportation

* 🔍 Capture output and bottle it in a variable
* 🧩 Pass spells as arguments to other spells
* 🔁 Conjure dynamic ranges in for loops
* 🧠 Create nested incantations like a wizard inception

### Example: Daily Augury

```sh
echo "Today is: $(date +%A)"
```

**Output:**
```
Today is: Friday
```

### Example: Know Thyself

```sh
user=$(whoami)
echo "Welcome, $user. The terminal recognizes you."
```

### Example: With Arcane Math

```sh
runes=$(ls | count)
echo "Runes found: $runes. Potential power level: $((runes * 42))"
```

### Example: Russian Doll Summoning

```sh
count=$((5 * $(echo $((5 * $(echo $((5 * $(echo 1)))))))))
echo "Layers of sorcery: $count"
```

**Output:**
```
$ Layers of sorcery: 125
```

::: details 🧙‍♂️ Explanation of the Spellbook
The innermost `echo 1` returns `1`

Then `5 * 1 → 5`

Then `5 * 5 → 25`

Then `5 * 25 → 125`
:::

> 📚 This is how wizards do math—by nesting spells until numbers fall out.

Careful—nesting substitutions too deeply may open a tiny portal to the Subshell Realm. Proceed with wisdom (and a Ctrl+C).

>🪄 All summoned output is collapsed into a single line. Newlines are quietly swept under the rug and replaced with spaces. It's tidier that way.

## 🪄 Chaining & Piping: Spells in Sequence

Behold the secret incantations that bind your shell commands together—like linking runes on a scroll. Pipes `|` pass outputs from one spell to the next, while chaining operators `&&` and `||` decide what happens when magic fizzles or succeeds.

### 🧪 The Alchemist’s Pipe (`|`)

```sh
ls | grep "txt"
```

🔮 This channels the results of `ls` into `grep`, filtering only the scrolls that mention *txt*. Think of it as divination through text-based crystal balls.

```sh
echo "dragon egg wand cloak" | count
```

⚗️ Pipe your spell components into `count` to tally how many items you’ve conjured. Handy for inventories, to-do lists, or suspiciously long snack orders.

### ⚖️ Conditional Magic with `&&` and `||`

#### 🎯 `&&` — Only If the First Spell Lands
```sh
mkdir tower && cd tower
```

🏰 Create the tower, then teleport inside—but only if the tower construction spell succeeds.

#### 💥 `||` — If the First Spell Explodes

```sh
run unknownspell || echo "Spell fizzled!"
```

😱 When a spell fails, a backup chant kicks in. Think of it as magical insurance.

### 🧮 Combo Rituals: Piping + Logic

```sh
echo "chosen one" >> prophecy.txt && cat prophecy.txt | grep -s "chosen one" && echo "✨ The prophecy is true!" || echo "❌ False alarm."
```

* `echo` conjures up a new file from the ether with 'chosen one' in it
* `cat` conjures the ancient prophecy
* `grep -s` seeks the foretold hero (while suppressing output)
* If found, trumpet your discovery 🎺
* If not, mutter and move on

✨ It's like an enchanted decision tree—with more scrolls and fewer elves.

> Let your logic flow like mana—through pipes and runes—binding your commands together into glorious, enchanted automation. 🧙‍♀️

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

## 🪨 Known Spellbound Limitations

Even the most powerful tomes have their bounds. While the Tortal Shell is a spell-slinger’s delight, there are a few enchantments it just can’t conjure—yet.

### 💤 No True Concurrency

Scripts follow the path of a well-behaved wizard apprentice: one task at a time.

* No backgrounding (`&`)
* No `async` sorcery
* No parallel spell threads

🕰 All magic happens in order, like a good queue at the potions shop. Pace your scrolls accordingly.

### 🧱 No Native Binaries (Muggles Only)

This is a browser, not a dungeon terminal. You cannot summon native binaries or system familiars.

```sh
# ❌ These shall not pass
make
python3 summon.py
```

All spells (commands) must be part of the shell’s sacred scrolls — handcrafted in TypeScript, with care and possibly coffee.

### 📦 Files are Virtual, Not Arcane Artifacts

You have a whole file system—hidden in browser space. But it's sandboxed tighter than a dragon egg vault.

* You can’t touch your actual hard drive 🧱
* Uploaded files are temporarily borrowed via browser sorcery
* Everything lives in a magical storage dimension (a.k.a. localStorage or IndexedDB)

### 🌐 Network Access: Controlled Portals Only

You get `ping`, `curl`, and `nslookup` — the officially sanctioned teleportation gates.

* ❌ No raw `fetch()`
* ❌ No `XMLHttpRequest`
* ❌ No socket spells or AJAX alchemy

📡 The browser’s magical firewall says: "*That’s enough internet for you.*"

### 🧙‍♂️ Bash-Like, Not Bash-Certified

The shell speaks fluent Bash-ish, but isn’t a full-blown Bash mage.

Unsupported incantations:
* ❌ No `[[ ... ]]` double-bracket tests
* ❌ No heredocs (`<<EOF`)
* ❌ No `select`, `until`

But fear not, for these spells are supported:
* ✅ `if`, `else`, `elif`, `fi`
* ✅ `for`, `while`, `case`, `done`
* ✅ Function charms: `greet(name) { ... }`
* ✅ `break`, `continue`, `return`, `exit`
* ✅ All the arithmetic you need: `+ - * / % ++ -- += -=`
* ✅ Command substitution: `whoami` or `$(date)`
* ✅ Pipes (`|`), logic chains (`&&`,`||`)
* ✅ Positional potions: `$1`, `$2`, etc.

In short: You get about 80% of a full Bash wizard’s staff, without the risk of summoning system demons.

🧞‍♂️ Use wisely, and enchant often.