# Product Manager Portfolio

A personal portfolio website for Lucas Gros, a Product Manager specializing in AI implementation and transformation.

## Overview

This is a responsive, single-page portfolio website with a dark theme inspired by Brittany Chiang's design. It features:

- A clean, minimalist, professional design
- Responsive layout that works on all devices
- Smooth animations and transitions
- No external JavaScript libraries (except Font Awesome for icons)

Live site: [https://loukach.github.io/product-portfolio](https://loukach.github.io/product-portfolio)

## Features

- Fixed side navigation that highlights the current section
- Animated hero section with staggered fade-ins
- Tabbed interface for the experience section with smooth transitions
- Project showcase with alternating layout
- Skills section arranged in categories
- Education timeline
- Contact section with email protection
- Smooth scrolling and intersection animations

## Project Structure

- `public/`: Contains the development version of the site
  - `index.html`: Main HTML file
  - `favicon.svg`: Site icon
- `src/`: Development source code
  - `styles/`: CSS files
    - `main.css`: Main stylesheet with CSS variables and styling
  - `index.js`: JavaScript for interactive features
- `deploy/`: Production-ready files
  - `index.html`: Optimized HTML
  - `styles.css`: Minified CSS
  - `script.js`: Minified JavaScript
  - `favicon.svg`: Site icon
  - `README.md`: Deployment instructions

## Getting Started

### Prerequisites

- A modern web browser
- Git (for cloning the repository)

### Running Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/loukach/product-portfolio.git
   cd product-portfolio
   ```

2. Open in your browser:
   - For development version: `public/index.html`
   - For production version: `deploy/index.html`

3. Alternatively, serve the project using a local server:
   ```bash
   # If you have Python installed:
   python -m http.server
   
   # If you have Node.js installed:
   npx serve
   ```

## Development

The project uses vanilla HTML, CSS, and JavaScript with no build tools required.

### Customizing

To customize this portfolio for yourself:

1. Edit the content in `public/index.html`
2. Modify styles in `src/styles/main.css`
3. Update animations and interactions in `src/index.js`
4. Deploy your changes by updating the files in the `deploy/` directory

## Deployment

The `deploy/` directory contains production-ready files that can be deployed to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- Render.com

## Credits

- Design inspiration: [Brittany Chiang](https://brittanychiang.com/)
- Built with [Claude Code](https://claude.ai/code)
- Icons from [Font Awesome](https://fontawesome.com/)

## License

This project is licensed under the MIT License.