# Loops?

Yep, we've got 'em.

## ♻️ While Loops

The noble while loop - great for repeating spells until a condition fizzles.

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

## ➕ While with Increment

```sh
count=0
while [ $count -lt 5 ]; do
  echo "Count is currently $count"
  count++
done
```

* Yes, post-increment works. The shell speaks fluent ++.

## ⛔ While with `break`

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

## ↪️ While with `continue`

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

## 🔁 For Loops: March of the Variables

Need to cast a spell on a list of things? `for` loops let each item take the stage like a lineup of brave adventurers.

```sh
for n in 1 2 3; do
  echo "Looping through $n"
done
```

* It’s like roll call for your variables. Each one gets its 15 milliseconds of fame.

##  🧮 Dynamic For Loops with `seq`

Want your loop to count instead of conjuring hardcoded values?

```sh
for i in $(seq 1 4); do
  echo "Index $i"
done
```

**Output:**
```
$ Index 1
$ Index 2
$ Index 3
$ Index 4
```

Feeling spicy? Add a step and turn your loop into a teleportation spell:

```sh
for x in $(seq 0 2 8); do
  echo "Teleporting to even number: $x"
done
```

**Output:**
```
$ Teleporting to even number: 0
$ Teleporting to even number: 2
$ Teleporting to even number: 4
$ Teleporting to even number: 6
$ Teleporting to even number: 8
```

Feeling even spicier? Get the loop count from the user and create a dynamic loop with `seq`:

```sh
read count "How many times to loop?"

sequence=$(seq 1 $count)

for i in $sequence; do
  echo "Index $i"
done
```

**Output**:
```
$ run loops.sh
$ How many times to loop?
> 15
$ Index 1
$ Index 2
$ Index 3
$ Index 4
$ Index 5
$ Index 6
$ Index 7
$ Index 8
$ Index 9
$ Index 10
$ Index 11
$ Index 12
$ Index 13
$ Index 14
$ Index 15
```

## 🔁 Nested Loops: Chaos and Beauty

```sh
for outer in A B; do
  for inner in 1 2; do
    echo "$outer$inner"
  done
done
```

* Nesting loops is totally legal. Just remember to close every `do` with a `done`, or risk opening a recursive rift in the shell continuum.