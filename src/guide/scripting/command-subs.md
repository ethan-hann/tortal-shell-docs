## ✨ Command Substitution: Summoning Output Into the Present

Command substitution is a spell of transmutation 🪄—it plucks the output of one incantation and teleports it directly into another. Like stuffing a miniature spellbook inside a fireball. Very efficient. Slightly unstable.

## 🧪 Basic Alchemy

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

## 🪞 Use Cases for Command Teleportation

* 🔍 Capture output and bottle it in a variable
* 🧩 Pass spells as arguments to other spells
* 🔁 Conjure dynamic ranges in [`for`](loops#%F0%9F%94%81-for-loops-march-of-the-variables) loops
* 🧠 Create nested incantations like a wizard inception

## Examples

## Daily Augury

```sh
echo "Today is: $(date -dow)"
```

**Output:**
```
Today is: Friday
```

## Know Thyself

```sh
user=$(whoami)
echo "Welcome, $user. The terminal recognizes you."
```

## With Arcane Math

```sh
runes=$(ls | count)
echo "Runes found: $runes. Potential power level: $((runes * 42))"
```

## Russian Doll Summoning

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

📚 This is how wizards do math—by nesting spells until numbers fall out.


> Careful—nesting substitutions too deeply may open a tiny portal to the Subshell Realm. Proceed with wisdom (and a `Ctrl+C`).
> 
>🪄 All summoned output is collapsed into a single line. Newlines are quietly swept under the rug and replaced with spaces. It's tidier that way.