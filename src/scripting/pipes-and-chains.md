# Pipes and Chaining

## Pipes

Pipe output from one command to another:

```sh
cat file.txt | grep banana | sort | uniq
```

## Logical Chaining

- `&&` — run next only if previous succeeded
- `||` — run next only if previous failed

```sh
mkdir demo && echo "created" || exit 1
```

You can chain multiple logical blocks:

```sh
run this || echo "fail" && echo "recovered"
```
