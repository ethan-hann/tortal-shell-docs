# Browser Shell Scripting Guide

## Introduction

Welcome to the whimsical world of Tortal Tech shell scripting — where variables expand, loops loop (usually), and command substitution is basically wizardry. This guide will teach you how to tame the shell dragon and write scripts that are not only functional, but possibly entertaining.

The shell supports a Bash-like syntax with features such as variable assignment, loops, conditionals, case statements, arithmetic, piping, and command substitution. Scripts are run line-by-line and support user-defined functions. Be warned: your scripts may become sentient.

## Writing Scripts

Scripts can be written in multi-line string blocks and passed to the shell. Commands support variable expansion, arithmetic evaluation, and output piping.

### Basic Syntax

```sh
# Set a variable
name="world"
echo "Hello, $name"

# Arithmetic
count=$((1 + 2 * 3))
echo $count
```

And yes, math works. No abacus required.

---

## Control Structures

### If Statements

```sh
if [ $count -le 5 ]; then
  echo "Count is less than or equal to 5"
else
  echo "Count is greater than 5"
fi
```

* Use `[ ... ]` or `test` for conditions.
* Ends with `fi`, which is not a typo — it's just "if" spelled backwards. Because shells are cool like that.

#### String Comparison

```sh
if [ "$NAME" = "OpenAI" ]; then
  echo "Matched"
fi
```

* Prefer single `=` for equality. Save your triple-equals for JavaScript.
* Always quote variables unless you enjoy debugging weird whitespace issues.

#### Number Comparison

```sh
if [ "$COUNT" -gt 3 ]; then
  echo "Greater than 3"
fi
```

* Use `-gt`, `-lt`, `-le`, `-ge`, `-eq`, `-ne` for numeric comparisons.

---

### While Loops

```sh
count=1
while [ $count -le 3 ]; do
  echo "Loop #$count"
  count=$((count + 1))
done
```

* Executes block repeatedly while condition is true.
* Maximum iteration limit (10,000) prevents your browser from melting into goo.

#### Infinite Loop Warning

```sh
count=0
while [ $count -eq 0 ]; do
  echo "Count is $count"
done
```

* This is effectively an infinite loop. You’ve been warned.

#### While Loop with Increment

```sh
count=0
while [ $count -lt 5 ]; do
  echo "Count is $count"
  count++
done
```

* Post-increment works. You're welcome.

#### While Loop with `break`

```sh
count=0
while [ $count -lt 5 ]; do
  if [ $count -eq 3 ]; then
    echo "Breaking at count $count"
    break
  fi
  echo "Count is $count"
  count=$((count + 1))
done
```

* `break` exits the loop immediately. Like bailing out of a bad date.

#### While Loop with `continue`

```sh
count=0
while [ $count -lt 5 ]; do
  count=$((count + 1))
  if [ $count -eq 3 ]; then
    echo "Skipping count $count"
    continue
  fi
  echo "Count is $count"
done
```

* `continue` skips the rest of the current iteration. Good for avoiding number 3, which we all agree is cursed.

---

### For Loops

```sh
for n in 1 2 3; do
  echo "Loop $n"
done
```

* Iterates over a space-separated list. Each item gets a turn in the spotlight.

#### Using `seq` for dynamic loops

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

Feeling fancy? Add a step:

```sh
for x in $(seq 0 2 8); do
  echo "Even: $x"
done
```

**Output:**
```
Even: 0
Even: 2
Even: 4
Even: 6
Even: 8
```

#### Nested Loops

```sh
for outer in A B; do
  for inner in 1 2; do
    echo "$outer$inner"
  done
done
```

* Yes, nesting works. Just don’t forget your `done`s, or chaos will ensue.

---

### Case Statements

```sh
input="yes"
case $input in
  yes) echo "Affirmative" ;;
  no) echo "Negative" ;;
  *) echo "Unknown response, entering panic mode..." ;;
esac
```

* Pattern matching, the fun way.
* `;;` ends each match case.
* `*` is the default case. Think of it like the wildcard that always wins.

---

## Functions

Ah yes, functions — the Swiss army knife of shell scripting. They're where logic goes to modularize, variables go to scope out the place, and recursion goes to party until the stack collapses (which, here, it won’t — we have safeguards!).

### Defining a Function

```sh
greet(name) {
  echo "Hello, $name!"
}
```

Or with unnamed positional arguments:

```sh
add(a, b) {
  echo $((a + b))
}
```

Prefer `$1`, `$2`? That works too:

```sh
multiply() {
  echo $(($1 * $2))
}
```

### Calling a Function

```sh
greet Alice
result=$(add 10 20)
echo "Sum is $result"
```

If you want to call a function inside a substitution inside an arithmetic operation inside a loop… you’re in the right shell.

### Returning from a Function

```sh
check_number(n) {
  if [ $n -lt 0 ]; then
    echo "Too small"
    return
  fi
  echo "Approved"
}

check_number 42
```

Use `return` to exit early. Use `exit` to nuke the entire script.

### Example: Recursive Factorial

```sh
factorial(n) {
  if [ $n -le 1 ]; then
    echo 1
    return
  fi
  prev=$(factorial $((n - 1)))
  echo $((n * prev))
}

result=$(factorial 5)
echo "5! = $result"
```

**Output:**
```
5! = 120
```

This example is great for showing off recursion and making your friends think you're doing something way harder than you are.

### Example: File Type Detective

```sh
describe_file(file) {
  if test -d $file; then
    echo "$file is a directory"
  elif test -f $file; then
    echo "$file is a file"
  else
    echo "$file does not exist"
  fi
}

describe_file /tmp
describe_file ./banana.png
```

Shell scripts: better than any snitch.

### Example: Fibonacci Generator

```sh
fibonacci(n) {
  a=0
  b=1
  for i in $(seq 1 $n); do
    echo -n "$a "
    next=$((a + b))
    a=$b
    b=$next
  done
  echo
}

fibonacci 7
```

**Output:**
```
0 1 1 2 3 5 8
```

Functions are powerful. And like all powerful things, they come with great responsibility. Or at least some parentheses.

---

## Command Substitution

Command substitution is like teleportation for strings — the output of one command magically appears inside another. It's the "yo dawg, I heard you like commands" of the shell.

### Basic Syntax

```sh
echo "Now: `date`"
CURRENT=`pwd`
echo "Current directory: $CURRENT"
```

Or, use the modern and less backtick-prone form:

```sh
FILES=$(ls | count)
echo "Number of files: $FILES"
```

Why `count` instead of `wc -l` or `wc -w`? Because `ls` output is formatted in ways that make `wc` give misleading results. `count` is smarter about whitespace, and behaves better with `ls`, `ls -l`, or piped input.

If you're counting files — this is the way. Period.

### Use Cases

- Storing command output in a variable
- Nesting command outputs inside arguments
- Creating dynamic loop ranges, filenames, messages, insults, etc.

### Example: Today’s Mood

```sh
echo "Today is: $(date +%A)"
```

**Output:**
```
Today is: Friday
```

### Example: Who dis?

```sh
user=$(whoami)
echo "Welcome, $user. The shell is yours."
```

### Example: Combined with arithmetic

```sh
files=$(ls | count)
echo "Double that? $((files * 2))"
```

You can also nest them like a Russian doll made of parentheses:

```sh
count=$(echo $(echo $(echo 5)))
echo "Count: $count"
```

Careful though — too much nesting and you may summon a sub-shell demon.

Output from command substitution is automatically flattened to a single line — newlines are replaced with spaces.

---

## Chaining and Piping

Chaining and piping are the secret sauce of shell scripting. Want to feed output from one command into another? Pipe it. Want to run something only if the previous command didn’t explode? Chain it.

### The Mighty Pipe (`|`)

```sh
ls | grep "txt"
```

This sends the output of `ls` into `grep`, which filters for files containing “txt”. You just built a search engine. Sort of.

```sh
echo "one two three" | count
```

Yes, you can pipe anything into `count` and it’ll tell you how many “things” it sees. Great for counting how often your boss emails you “just checking in.”

### Chain Commands with `&&` and `||`

```sh
mkdir demo && cd demo
```

`cd demo` only runs if `mkdir demo` succeeds. A classic duo.

```sh
invalidcmd || echo "Something failed!"
```

Only runs the `echo` if `invalidcmd` goes down in flames. Use this to sound calm and collected while panicking.

### Combining All Three

```sh
cat hello.txt | grep "world" && echo "Found it" || echo "Nope"
```

- `cat` pipes into `grep`
- If `grep` finds it, you get "Found it"
- If not, the fallback is "Nope"

It’s like a choose-your-own-adventure story, but with more brackets.

---

## Tips and Tricks

Here are some helpful tips to get the most out of your browser shell.

### Reuse Output with Command Substitution

```sh
echo "Today is: `date`"
COUNT=$(ls | count)
echo "There are $COUNT files"
```

### Arithmetic Evaluation

```sh
COUNT=$((5 + 2 * 3))
echo $COUNT
```

**Output:** `11`

### Chaining and Conditional Execution

```sh
mkdir logs && echo "Created logs dir"
cat file.txt || echo "File not found"
mkdir temp && cd temp || echo "Could not enter dir"
```

### Use `read` for Interactive Scripts

```sh
read username "What's your name?" Guest
echo "Welcome, $username"
```

### Use Functions for Reusability

```sh
say(msg) {
  echo "📢 $msg"
}

say "This is reusable"
```

### Save and Use Variables Persistently

```sh
export FAVORITE=banana
```

Now `$FAVORITE` will be available in future scripts and sessions.

### Count Things Reliably

```sh
ls | count
```

Because `wc` lies, and `count` tells the truth.
