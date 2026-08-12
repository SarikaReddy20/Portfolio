# Portfolio

A personal portfolio website for Sarika Reddy built with React and Vite.

## Overview

This project showcases Sarika's education, experience, skills, projects, certifications, and contact details in a modern portfolio layout.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide icons

## Available Scripts

From the project directory, run:

```bash
npm install
npm run dev
```

Then open `http://localhost:5173/` in your browser.

To create a production build:

```bash
npm run build
```

### GitHub Pages deployment

This project is configured for GitHub Pages under `https://<username>.github.io/Portfolio/`.

Install the deployment helper and deploy:

```bash
npm install --save-dev gh-pages
npm run deploy
```

If your repository name is not `Portfolio`, update `vite.config.ts` `base` to match the repo path.

## Sections

- Home / Hero
- About
- Education
- Experience
- Skills
- Projects
- Certifications
- Achievements
- Resume download
- Contact

## Notes

The app is located under `src/app` and uses component-based layouts in `src/app/components`.
