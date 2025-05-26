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

## Returning With A Value

```sh
get_2() {
    return 2
}

get_4() {
    return 4
}

greet() {
    return "Hello"
}

echo "$(greet): $(get_2) + $(get_4) = $(($(get_2) + $(get_4)))"
```

**Output**:
```
$ run return.sh
Hello: 2 + 4 = 6
```

* Use `return` to exit a function without drama and, well, return a value to the caller.
  - `return` (or no `return`) indicates successful function execution.
  - `return "I'm a return value"` returns to the caller "*I'm a return value*"
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