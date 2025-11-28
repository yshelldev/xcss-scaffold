# XCSS Scaffold

Use this scaffold template as a starting point for your customized CSS framework.

## Setup Steps

### 1. Clone Repository

Clone this repository to begin scaffolding your XCSS project.

### 2. Update Template Folders

Modify the folder structure as needed, but remember to update the configs field in package.json accordingly.

#### `./library` (customizable path)

Store your design libraries here. Refer to How to Manage Libraries for details.

#### `./blueprint` (customizable path)

Configure initial stylesheets, tokens, and design system foundations.

#### `./sandbox` (customizable path)

Preview components in real-time. Customize or rewrite without breaking the core API logic.

### 3. Update `package.json`

Set valid author and repository details. Adjust the flavour field if paths change.

```json
{
  "configs": {
    "name": "xcss-scaffold",
    "version": "0.0.0",
    "sandbox": "sandbox",
    "blueprint": "blueprint",
    "libraries": "libraries"
  }
}
```

This data integrates directly with xcss-package.
​
### 4. Update `README.md`

Customize the `README.md` file to reflect your project's specifics. Include:

- Project description and purpose
- Setup instructions and usage notes
- Folder structure explanations and configuration details
- Contribution guidelines (if open source)
- License information

### 5. Publish or Keep Private

Publish to npm or maintain as a private template for internal use.