# Joel Piñeiro Suárez - Personal Portfolio

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS.
Features a "Bento Grid" layout, dark mode aesthetic, and automated deployment to GitHub Pages.

## 🚀 Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Typography:** Inter & JetBrains Mono (Google Fonts)
- **Deployment:** GitHub Actions (gh-pages)

## 🛠️ Project Structure

- `src/App.jsx`: Main application component containing the layout and content.
- `src/index.css`: Global styles and Tailwind directives.
- `.github/workflows/deploy.yml`: CI/CD workflow for automated deployment.

## 📦 Deployment to GitHub Pages

This project uses a standard "Source in Main, Deploy to Branch" workflow:

1.  **Source Code:** The `main` branch contains the source code (React + Vite).
2.  **Build Process:** On every push to `main`, the GitHub Action builds the static site into the `dist/` folder.
3.  **Deployment:** The content of `dist/` is automatically deployed to the `gh-pages` branch.

**Configuration:**
- Go to your Repository Settings > Pages.
- Set **Source** to `Deploy from a branch`.
- Select **Branch** as `gh-pages` and folder `/ (root)`.

## 🏃‍♂️ Local Development

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
3.  Build for production:
    ```bash
    npm run build
    ```
