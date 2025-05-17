# Script Examples

## Hello with Variables

```sh
GREETING="Hi"
TARGET="there"
echo "$GREETING, $TARGET"
```

## Argument + File Output

```sh
write log.txt "Started at `date`"
echo -n "First line" >> log.txt
```

## Count Items

```sh
cat items.txt | grep apple | wc -l
```

## Control + Functions

```sh
greet(name) {
  echo "Hello, $name!"
}

if test "$1" === "Admin"; then
  greet "$1"
else
  echo "User only"
fi
```

## Wait + Substitution

```sh
echo "Now: `date`"
wait 200
echo "Done"
```
