# Resume Builder

A modern, interactive resume and portfolio application built with React, Tailwind CSS, and Framer Motion.

## 🚀 Live Website

**Click the link below to view the live website directly:**

👉 **[View Live Resume](https://RajSindhav.github.io/Raj_Sindhav_QA/)** 👈

*(Note: Replace the link with your actual GitHub Pages URL once deployed).*

---

## ⚙️ How to Automate Deployment (No NPM required!)

To make your website update automatically whenever you push changes, you need to set up a GitHub Action. 

**Note:** *The AI Studio cannot automatically create this file for security reasons, so you need to do it once manually on GitHub.*

### Step-by-step Setup on GitHub:

1. Go to your repository on GitHub: `https://github.com/RajSindhav/Raj_Sindhav_QA`
2. Click on the **"Actions"** tab at the top.
3. Click **"New workflow"** (or "set up a workflow yourself").
4. Name the file `deploy.yml` (it will be placed in `.github/workflows/deploy.yml`).
5. Copy and paste the following code into the editor:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

6. Click **"Commit changes..."** in the top right corner.
7. Go to your repository **Settings** > **Pages** (on the left sidebar).
8. Under **Build and deployment**, change the **Source** dropdown to **"GitHub Actions"**.

That's it! GitHub will now automatically build your site and give you a live URL. Every time you make a change and push it to GitHub, your live website will update automatically.
