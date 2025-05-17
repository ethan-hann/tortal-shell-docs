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
