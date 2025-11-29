# XCSS Scaffold: Spin Your Flavor

**xcss-scaffold** is the default template bundled with **xcss-package**. No need to download it separately for your project.

Use this repository as a template to create your own XCSS frameworks and flavors.

## Navigation

- [Installation](#installation)
- [Create Flavour](#how-to-spin-your-flavour)

## Installation

### Prerequisites

1. Install the core **xcss-package** via your preferred package manager:

```sh
  npm i xcss-package

  yarn add xcss-package

  pnpm add xcss-package
```

2. Verify `xcss` or `xpin` CLI is available (provided by the **xcss-package**). Check if any of them are available with your preffered package runner

```sh
  npx xcss
  npx xpin

  yarn dlx xcss
  yarn dlx xpin

  pnpm exec xcss
  pnpm exec xpin
```

### Install Flavor

Install the `xcss-scaffold` flavor:

```sh
  npm i xcss-scaffold

  yarn add xcss-package

  pnpm add xcss-package`
```

### Scaffold Project

Spin flavour reference of **xcss-package** to **xcss-scaffold**:

```sh
  npx xpin xcss-scaffold
  npx xcss spin xcss-scaffold

  yarn dlx xpin xcss-scaffold
  yarn dlx xcss spin xcss-scaffold

  pnpm exec xpin xcss-scaffold
  pnpm exec xcss spin xcss-scaffold
```

The command automatically updates references to the new flavor.

### Initialize

In an unconfigured project, run:
```sh
  npm i xcss init

  yarn add xcss init

  pnpm add xcss init
```
This sets up XCSS Setup directory and boilerplate.

---

# How to spin your Flavour?

Use this scaffold template as a starting point for your customized CSS framework. Follow the following steps to updata

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