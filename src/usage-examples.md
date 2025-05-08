# Usage Examples

Explore practical examples on how to use the Tortal Tech File Shell library in your projects. This guide provides code snippets and explanations to streamline your development workflow.

## Example 1: Basic File Operations

To perform basic file operations such as reading and writing, use the `FileShell` class. Here's a simple example to get you started:

```python
from tortal_tech_file_shell import FileShell

# Initialize FileShell
file_shell = FileShell()

# Reading from a file
content = file_shell.read_file('example.txt')
print(content)

# Writing to a file
file_shell.write_file('output.txt', 'Hello, World!')
```

## Example 2: Directory Management

Manage directories with the `DirectoryManager` class. This allows for creating, deleting, and navigating through directories:

```python
from tortal_tech_file_shell import DirectoryManager

# Initialize DirectoryManager
dir_manager = DirectoryManager()

# Create a new directory
dir_manager.create_directory('new_folder')

# List contents of a directory
contents = dir_manager.list_directory_contents('new_folder')
print(contents)

# Remove a directory
dir_manager.remove_directory('new_folder')
```

## Example 3: File Search

Easily search for files across directories:

```python
from tortal_tech_file_shell import FileSearcher

# Initialize FileSearcher
file_searcher = FileSearcher()

# Search for a file
found_files = file_searcher.search_files(directory='/', pattern='*.txt')
print(found_files)
```

These examples offer a foundation for using the Tortal Tech File Shell library. Happy coding! 🛠️