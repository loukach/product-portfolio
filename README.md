# Product Portfolio

A static web application showcasing a collection of products with a responsive design.

## Features

- Responsive product catalog with grid layout
- Product cards with images, descriptions, and prices
- Mobile-friendly design

## Project Structure

- `public/`: Contains public assets and HTML files
  - `index.html`: Main HTML file
- `src/`: Source code
  - `assets/`: Images and other static assets
  - `components/`: Reusable UI components
  - `pages/`: Page-specific components
  - `styles/`: CSS files
    - `main.css`: Main stylesheet
  - `index.js`: Main JavaScript file

## Getting Started

### Prerequisites

- A modern web browser
- A local web server (optional)

### Running Locally

1. Clone this repository
2. To view the project, you can either:
   - Open `public/index.html` directly in your browser
   - Serve the project using a local server:

```bash
# If you have Python installed:
python -m http.server

# If you have Node.js installed:
npx serve
```

## Development

### Adding New Products

Edit the `products` array in `src/index.js` to add new products to the portfolio.

### Customizing Styles

Modify `src/styles/main.css` to customize the appearance of the product portfolio.

## License

This project is licensed under the MIT License - see the LICENSE file for details.