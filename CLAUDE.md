# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static web application that displays a product portfolio/catalog. It uses vanilla JavaScript, HTML, and CSS without any frameworks. The project structure follows a simple organization with separate directories for components, pages, assets, and styles.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Lint JavaScript files
npm run lint

# Format code with Prettier
npm run format
```

## Architecture

- **Frontend Only**: This is a static frontend application without a backend.
- **Data Management**: Product data is currently stored in a JavaScript array in `src/index.js`.
- **Component Structure**: The application uses a simple component structure where the main layout is defined in `index.html` and dynamic content is generated via JavaScript.
- **Styling**: The project uses CSS variables for theming and a responsive grid layout for the product catalog.

## File Structure

- `public/index.html`: Entry point that defines the overall page structure
- `src/index.js`: Main JavaScript file that handles rendering products and user interactions
- `src/styles/main.css`: Contains all styling for the application
- `src/assets/`: Contains image files for products
- `src/components/`: Reserved for reusable UI components (currently empty)
- `src/pages/`: Reserved for page-specific components (currently empty)

## Adding New Features

When adding new features to this codebase:

1. For new visual components, create appropriate files in the `components/` directory
2. For new pages, add them to the `pages/` directory
3. Ensure any new CSS follows the existing pattern in `main.css`
4. Add new product data to the `products` array in `index.js`

## Deployment

This is a static site that can be deployed to any static hosting service like GitHub Pages, Netlify, Vercel, or any web server.