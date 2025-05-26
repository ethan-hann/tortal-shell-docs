## 🪄 Chaining & Piping: Spells in Sequence

Behold the secret incantations that bind your shell commands together—like linking runes on a scroll. Pipes `|` pass outputs from one spell to the next, while chaining operators `&&` and `||` decide what happens when magic fizzles or succeeds.

## 🧪 The Alchemist’s Pipe (`|`)

```sh
ls | grep "txt"
```

🔮 This channels the results of `ls` into `grep`, filtering only the scrolls that mention *txt*. Think of it as divination through text-based crystal balls.

```sh
echo "dragon egg wand cloak" | count
```

⚗️ Pipe your spell components into `count` to tally how many items you’ve conjured. Handy for inventories, to-do lists, or suspiciously long snack orders.

## ⚖️ Conditional Magic with `&&` and `||`

## 🎯 `&&` — Only If the First Spell Lands
```sh
mkdir tower && cd tower
```

🏰 Create the tower, then teleport inside—but only if the tower construction spell succeeds.

## 💥 `||` — If the First Spell Explodes

```sh
run unknownspell || echo "Spell fizzled!"
```

😱 When a spell fails, a backup chant kicks in. Think of it as magical insurance.

## 🧮 Combo Rituals: Piping + Logic

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