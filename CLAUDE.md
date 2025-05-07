# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for a Product Manager, built with a dark theme inspired by Brittany Chiang's portfolio design. It uses vanilla JavaScript, HTML, and CSS without any frameworks (except Font Awesome for icons). The website is a single-page application with smooth scrolling between sections and animated elements.

## Development Commands

```bash
# If using npm:
npm install

# Start a local development server
npx serve public

# View production-ready files
npx serve deploy
```

## Architecture

- **Frontend Only**: This is a static frontend application without a backend.
- **Single Page Application**: All content is on a single HTML page with smooth navigation between sections.
- **CSS Variables**: The project uses CSS variables for consistent theming and easy customization.
- **Responsive Design**: The layout adapts to various screen sizes with specific breakpoints.
- **JavaScript Features**:
  - Tab system for the experience section
  - IntersectionObserver for scroll animations
  - Smooth scrolling with custom easing functions
  - Email obfuscation for spam protection
  - Mobile navigation toggle

## File Structure

The project is organized into two main areas:

### Development Files
- `public/index.html`: Main HTML file with all content sections
- `public/favicon.svg`: SVG icon for the site
- `src/index.js`: JavaScript for interaction and animations
- `src/styles/main.css`: Unminified CSS with comments and organization

### Production Files (in `deploy/` directory)
- `index.html`: Optimized HTML
- `styles.css`: Minified CSS
- `script.js`: Minified JavaScript
- `favicon.svg`: Site icon
- `README.md`: Deployment instructions

## Modifying Content

When updating this portfolio:

1. **Personal Information**: Update personal details in `public/index.html`
2. **Experience**: Modify the tab sections in the experience area
3. **Projects**: Update the project cards with your own work
4. **Skills**: Adjust the skills categories and items to match your expertise
5. **Contact**: Change the email address in `src/index.js` (look for `emailParts` array)

## Styling Guidelines

- Maintain the dark theme with the navy/cyan color scheme
- Keep CSS variables at the top of the stylesheet for easy customization
- Follow the existing naming conventions for classes
- Preserve the responsive breakpoints for consistent mobile experience

## JavaScript Considerations

- The site uses vanilla JavaScript with no dependencies
- Animation timing is managed through CSS variables
- Tab functionality is handled via data attributes
- IntersectionObserver provides efficient scroll-based animations

## Deployment

For deployment updates:

1. Make changes to the development files first
2. Test thoroughly in the browser
3. Minify the CSS and JavaScript
4. Update the files in the `deploy/` directory
5. The site can be deployed to any static hosting service (GitHub Pages is recommended)

## GitHub Pages Setup

The repository is configured for GitHub Pages from the `main` branch. The live site is available at: [https://loukach.github.io/product-portfolio](https://loukach.github.io/product-portfolio)