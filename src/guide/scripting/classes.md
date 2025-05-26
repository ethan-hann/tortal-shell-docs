### 🧾 Enchanted Objects: Properties & Simple Spells

Need to store a bundle of attributes like a character sheet or enchanted scroll? Use key-value pairs like so:

```sh
wizard={name:'Elara',level:'27'}
echo "Hail ${wizard.name}, level ${wizard.level} arcanist."
```

- Access properties with dot notation: `${object.key}`
- This isn’t JSON—it’s lighter, faster, and less picky about quotes. A true wizard’s shortcut.

Perfect for when your variables need to travel in style, grouped like a proper guild.

### 🤓 Mystic Classes: Arcane Blueprints with Behavior

Sometimes you need more than just variables—you need structure, identity, and reusable spellcraft. Behold the mighty class, your blueprint for enchanted entities:

```sh
class Wizard:
{
    name='Merlin'
    age='130'
    potions=('healing','mana','invisibility')

    function get_potion(index) {
        echo "${potions[index]}"
    }
}

Wizard w = new Wizard()

read pot_num "What is your favorite potion number?"

potion=$(w.get_potion($pot_num))
echo "🧪 Potion retrieved: $potion"
```

- Define classes with `class Name:` followed by a magical `{}` block.
- Create instances using `new ClassName()`.
- Access fields with dot notation: `w.name`
- Call internal functions using `object.method(args)`.

Perfect for crafting spellcasters, familiars, dungeons, or anything requiring state and skill.

::: tip ⚡ Note
This is a simple class system, meant for small magical tasks. It does not support inheritance, polymorphism, or complex object hierarchies. For that, you'll need a different spellbook (or a compiled language).
:::

This is object-oriented spellcraft made terminal-friendly. Your scripts just leveled up!