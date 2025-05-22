# Control Flow

## `if` / `else` / `fi`

```sh
if test -e file.txt; then
  echo "File exists"
else
  echo "Missing"
fi
```

### String Comparison

```sh
if test "$NAME" === "OpenAI"; then
  echo "Matched"
fi
```

### Number Comparison

```sh
if test "$COUNT" -gt 3; then
  echo "Greater than 3"
fi
```

## Loops

### For loop

```sh
for n in 1 2 3; do
  echo "Loop $n"
done
```

### Nested Loops

```sh
for outer in A B; do
  for inner in 1 2; do
    echo "$outer$inner"
  done
done
```

### While loop

```sh
count=0
while [ $count -eq 0 ]; do
  echo "Count is $count"
done
```
> ⚠️ Equivalent to a `while(true)` loop, i.e. infinite loop

#### While loop with increment

```sh
count=0
while [ $count -lt 5 ]; do
  echo "Count is $count"
  count++
done
```

#### While loop with conditional and break

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

#### While loop with conditional and continue

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

> `break`, `continue`, and conditionals also work inside `for` loops.