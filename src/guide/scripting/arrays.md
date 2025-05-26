### 📃 Arrays: Your Magical Inventory

```sh
potions=('healing','mana','invisibility')
echo "Potion 1: ${potions[0]}"
echo "All potions: ${potions[@]}"
```

Loop through them:

```sh
for potion in ${potions[@]}; do
  echo "Brewing $potion potion..."

  #simulate brewing time (0.5 seconds)
  wait 500
done
```

::: details Using Arrays in Other Scripts
Want to use an array in a different script? Export it:
```sh
# exports.sh
export -s potions=('healing','mana','invisibility')
```

* The `-s` flag is for suppressing the output of the `export` command. Most commands support this flag.

Then you can reference it in another script:
```sh
# potions.sh
echo "Potion 2: ${potions[2]}"
echo "All potions: ${potions[@]}"
echo ""

for potion in ${potions[@]}; do
  echo "Brewing $potion potion..."
  wait 500
done
```

Just make sure to run the `exports.sh` script first, and then the `potions.sh` script:

```
$ run exports.sh
$ run potions.sh
```

**Output**:
```
$ Potion 2: invisibility
$ All potions: healing mana invisibility
$ Brewing healing potion...
$ Brewing mana potion...
$ Brewing invisibility potion...
```
:::

Want to count your potions, scrolls, or cursed relics? Arrays track the length of your magical supplies:

```sh
potions=('healing','mana','invisibility')
echo "🧪 You have ${potions.length} potions ready."
```

* Use `${array.length}` to count the total number of items in an array.
* Arrays are zero-indexed, but the magic count is spot-on.

Remember: even a single misplaced potion can turn a transformation spell into a chicken spell. Count twice, conjure once! You will get a warning if you are outside the range of the array, but unlike other languages, the script will continue running:

```sh{2}
potions=('healing','mana','invisibility')
# array index starts at 0
echo "Potion 3: ${potions[3]}"
echo "All potions: ${potions[@]}"
```

**Output**

```sh
$ run arrays.sh
⚠️ index out of range: potions[3]
Potion 3: 
All potions: healing mana invisibility
```