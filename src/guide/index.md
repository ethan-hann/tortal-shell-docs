# Installation Guide 🚀

This guide explains how to install the Tortal Tech File Shell library, including prerequisites and configuration steps.

## Prerequisites

Before installation, ensure you have the following:

- **Operating System**: Linux, macOS, or Windows 10/11.
- **Python Version**: 3.8 or higher. 🐍
- **Pip**: Updated to the latest version.
- **Virtual Environment**: Recommended to avoid conflicts with other libraries.

## Installation Steps

1. **Clone the Repository**:  
   Clone the Tortal Tech File Shell repository from GitHub. Run:
   ```
   git clone https://github.com/tortal-tech/file-shell.git
   cd file-shell
   ```

2. **Activate Virtual Environment**:  
   Create and activate a virtual environment to manage dependencies:
   ```
   python3 -m venv env
   source env/bin/activate   # On Windows, use `env\Scripts\activate`
   ```

3. **Install Dependencies**:  
   Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

4. **Complete Installation**:  
   Verify the installation by running:
   ```
   python setup.py install
   ```

## Post-installation

After installation, ensure your environment is set up correctly by running:
```
tortal-shell --version
```
You should see the library's version number. If not, review the steps above to confirm all prerequisites and configurations are correct.