# Contributing to the Documentation

Thank you for your interest in contributing to the ValenVRC documentation! This guide will help you understand how to edit existing documentation and create translations.

## Table of Contents

- [Getting Started](#getting-started)
- [Editing Documentation](#editing-documentation)
- [Creating and Editing Translations](#creating-and-editing-translations)
- [Documentation Standards](#documentation-standards)
- [Submitting Your Changes](#submitting-your-changes)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Git
- A text editor (VS Code recommended)

### Setting Up the Project

1. Fork the repository on GitHub
2. Clone your fork locally:

   ```bash
   git clone https://github.com/YOUR-USERNAME/valenvrc-docs.git
   cd valenvrc-docs/my-website
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The site will open at `http://localhost:3000`.

## Editing Documentation

Documentation files are located in:

- **Main documentation**: `docs/` folder
- **Pages**: `src/pages/` folder

All documentation is written in Markdown (`.md` files) with frontmatter metadata:

```markdown
---
slug: page-slug
title: Page Title
description: Brief description of the page
---

Your content here...
```

### Making Changes

1. Locate the file you want to edit in the `docs/` folder
2. Edit the content using Markdown syntax
3. Save the file
4. Preview your changes in the browser (hot reload is enabled)

### Documentation Guidelines

- Use clear, concise language
- Include code examples where appropriate
- Add images to illustrate complex concepts (place images in the same folder)
- Use proper Markdown formatting:
  - Headers: `#`, `##`, `###`, etc.
  - Code blocks: ` ```language `
  - Lists: `-` or `1.`
  - Links: `[text](url)`
  - Images: `![alt text](image.png)`

### Using Admonitions

Docusaurus supports special callout blocks:

```markdown
:::note
This is a note
:::

:::tip
This is a helpful tip
:::

:::warning
This is a warning
:::

:::danger
This is a danger alert
:::

:::info
This is an info block
:::
```

## Creating and Editing Translations

### Translation File Structure

Translations are organized in the `i18n/` folder:

```
i18n/
  └── es/                                          # Language code
      ├── docusaurus-plugin-content-docs/          # Documentation translations
      │   └── current/
      │       ├── welcome.md
      │       ├── admin-tablet/
      │       ├── security-keypad/
      │       └── ...
      └── docusaurus-plugin-content-pages/         # Page translations
          └── tos.md
```

### Adding a New Translation

1. **For Documentation Pages:**
   - Navigate to `i18n/{language-code}/docusaurus-plugin-content-docs/current/`
   - Create or edit the `.md` file matching the English version's path
   - Example: `docs/welcome.md` → `i18n/es/docusaurus-plugin-content-docs/current/welcome.md`

2. **For Static Pages:**
   - Navigate to `i18n/{language-code}/docusaurus-plugin-content-pages/`
   - Create or edit the `.md` file
   - Example: `src/pages/tos.md` → `i18n/es/docusaurus-plugin-content-pages/tos.md`

### Translation Guidelines

1. **Keep Frontmatter Consistent:**

   ```markdown
   ---
   slug: same-as-english
   title: Translated Title
   description: Translated description
   ---
   ```

2. **Preserve Technical Terms:**
   - Keep English terms for: Unity, VRChat, SDK, Packages, Assets, etc.
   - Keep file paths, folder names, and variable names in English
   - Keep code snippets in their original language

3. **Maintain Markdown Structure:**
   - Keep all headers, lists, and formatting identical to the English version
   - Preserve image references (don't translate image filenames)
   - Keep all links functional

### Testing Translations

To preview a specific language:

```bash
# Spanish
npm run start -- --locale es

# Build for production
npm run build
```

### Adding a New Language

To add support for a new language:

1. Create the language folder structure:

   ```
   i18n/{language-code}/
     ├── docusaurus-plugin-content-docs/
     │   └── current/
     └── docusaurus-plugin-content-pages/
   ```

2. Start translating pages one by one
3. Test with `npm run start -- --locale {language-code}`

## Documentation Standards

### Writing Style

- Use present tense
- Write in second person (you/your)
- Be concise and clear
- Avoid jargon when possible
- Provide examples for complex concepts

### Code Examples

When including code examples:

1. Use proper syntax highlighting:

   ````markdown
   ```csharp
   public void MyMethod() {
       // code here
   }
   ```
   ````

2. Add comments to explain complex parts
3. Keep examples relevant and concise

## Submitting Your Changes

### Before Submitting

1. **Test your changes:**

   ```bash
   npm run build
   ```

   and then

   ```bash
   npm run serve
   ```

2. **Check for spelling errors** (especially in explanation text, not code/field names)

3. **Verify all links work**

4. **Ensure images load correctly**

### Creating a Pull Request

1. Commit your changes:

   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

2. Push to your fork:

   ```bash
   git push origin main
   ```

3. Open a Pull Request on GitHub with:
   - Clear title describing the change
   - Description of what was changed and why
   - Screenshots if relevant

### Pull Request Guidelines

- One logical change per PR (e.g., "Add Spanish translation for Admin Tablet docs")
- Reference any related issues
- Respond to review feedback promptly
- Keep PRs focused and manageable in size

## Questions or Issues?

If you have questions or run into issues:

- Check existing issues on GitHub
- Ask in the Discord server
- Open a new issue with detailed information

## Thank You!

Your contributions help make these docs better for everyone. We appreciate your time and effort! 🎉
