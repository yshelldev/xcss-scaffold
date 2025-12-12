# Xcaffold: Scaffold Template to Spin Your Flavor

Use this repository as a template to create your own Xtatix frameworks and flavors.

## Navigation

- [Installation](#installation)
- [Create Flavour](#how-to-spin-your-flavour)
- [Learn Xtatix Basics](https://www.xtatix.io/documentation)

# Installation

1. Install prefered flavour of Xtatix using your package manager:

```sh
  npm install xcaffold
  yarn add xcaffold
  pnpm add xcaffold
```

2. Initialize Xtatix in your project directory with the installed **flavour**:

```sh
  xtatix init xcaffold
```

This creates the xtatix/* config directory using your chosen flavour.

---

# How to spin your Flavour?

Use this scaffold template as a starting point for your customized CSS framework. Follow the following steps to update.

## Setup Steps

### 1. Clone the Repository

Start by cloning this repository to set up your Xtatix scaffold project.

### 2. Configure for Your Development Setup

The scaffold uses Sass as its CSS compiler, which helps efficiently create and maintain multiple class variations with similar structures. A vanilla JS sandbox is included for fast previews—you can rewrite it to work with your preferred framework as long as you adhere to the provided API methods and avoid breaking core logic.

### 3. Customize Template Folders

Adjust the folder structure to suit your project needs. If you do so, be sure to update the corresponding paths in the package.json configuration.

##### `./library`

- **Purpose:** Houses your custom design libraries (CSS files).
- **Reference:** See Libraries documentation for naming conventions and management.
- **Customization:** Use your preferred CSS compiler (Sass used here—replace as needed).

##### `./sandbox`

- **Purpose:** Live preview area for testing components.
- **Customization:** Freely modify to fit your workflow while preserving API compatibility.
- **Configuration:** ./xtatix/configure.jsonc from working directory is automatically shared with sandbox-view responses for extended functionality.

##### `./blueprint`

- **Purpose:** Contains foundational stylesheets, design tokens, and core system components.
> **Important:** Do not modify directory structure. Edit only content within files to maintain Xtatix compatibility.

### 4. Update `package.json`

Ensure that your package.json file contains correct author and repository details. Also, update the configs paths if you change the folder layout:

```json
{
  "configs": {
    "name": "scaffold",
    "version": "0.0.0",
    "sandbox": "sandbox",
    "blueprint": "blueprint",
    "libraries": "libraries"
  }
}
```

This configuration connects directly with the xtatix-central tooling.
​
### 5. Update `README.md`

Customize the `README.md` file to reflect your project's specifics. Include:

- Project description and purpose
- Setup instructions and usage notes
- Folder structure explanations and configuration details
- Contribution guidelines (if open source)
- License information

### 6. Publish or Keep Private

Decide whether to publish your scaffold to npm for public use or keep it private for internal projects.