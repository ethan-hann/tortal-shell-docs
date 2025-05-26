# ✨ Language Fundamentals

Scripts are magical incantations you write in multi-line blocks. Each command supports variables, math, and pipes.

## ✍️ Writing A Script

In order to write a script, you just need to open the editor. Type this at the terminal,

```sh
$ edit <script name>.sh
```
where `<script name>` is the name of the script you are writing.

This will open a Monaco editor with syntax highlighting that allows you to write and your scripts.

::: tip
While scripts don't have to have an extension on the file name to run, you will only get syntax highlighting in the editor if you use a common extension, like `sh`.
:::

## 📝 Basic Syntax

```sh
# greet.sh
# Create a magic variable
name="wizard"
echo "Greetings, $name"
```

Save your spellbook with any extension, and pass it directly to `run`:

```
$ run greet.sh
$ Greetings, wizard
```

## 📝 Variables: Store Your Magic

```sh
# Assigning a magical variable
WIZARD_NAME="Zandor"
echo "Welcome, $WIZARD_NAME"
```

* Variable names are case-sensitive and must not contain spaces.
* Use `=` with no spaces around it.
* Variables can be accessed with `$VAR` or `${VAR}`.

## 🔑 Exporting to the Environment

```sh
export SPELL="invisibility"
echo "You have cast $SPELL"
```

* Exported variables are available in all future scripts and spells.
* Think of it like binding a rune permanently to your character.
* Yes, you can export arrays as well

## ➕ Mathmatical!!!

Perform arithmetic operations within an assignment as well:

```sh
# Math magic without a wand
count=$((1 + 2 * 3))
echo $count
```

Yes, the math checks out. No abacus required. Need more complex calculations? We've got you covered. Substitution supported:

**Normal**:
```sh
count=$(( $(calc -s sqrt(4)) + 2 * 3 ))
echo $count
```

**Backticks**:
```sh
count=$((`calc sqrt(4)` + 2 * 3))
echo $count
```