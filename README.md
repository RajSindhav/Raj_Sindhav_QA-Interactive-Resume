# Resume Builder

A modern, interactive resume and portfolio application built with React, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo

[View Live Demo on GitHub Pages](https://<your-username>.github.io/<your-repo-name>/)

*(Note: Replace `<your-username>` and `<your-repo-name>` with your actual GitHub username and repository name once deployed).*

## 🛠️ Setup & Deployment to GitHub Pages

This project is pre-configured to be easily deployed to GitHub Pages. Follow these steps to host your resume for free:

1. **Push your code to GitHub:**
   Make sure this project is pushed to a new repository on your GitHub account.
   
   If you haven't initialized a git repository yet:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Update `package.json` (Optional):**
   You can add a `"homepage": "https://<your-username>.github.io/<your-repo-name>"` field at the top level of your `package.json` file.

3. **Deploy:**
   Run the deploy script. This will automatically build the project and push the `dist` folder to a new `gh-pages` branch.
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Repo:**
   Go to your repository **Settings** > **Pages**. Under "Build and deployment", ensure the source is set to "Deploy from a branch" and select the `gh-pages` branch. Your site will be live in a few minutes!

## 💻 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
