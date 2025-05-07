# Product Manager Portfolio

A personal portfolio website for Lucas Gros, a Product Manager specializing in AI implementation and transformation.

## Overview

This is a responsive, single-page portfolio website with a dark theme inspired by Brittany Chiang's design. It features:

- A clean, minimalist, professional design
- JSON-powered content management for easy updates
- Responsive layout that works on all devices
- Smooth animations and transitions
- No build steps or complex setup required

## Features

- JSON-based content management - update without touching HTML
- Fixed side navigation that highlights the current section
- Animated hero section with staggered fade-ins
- Foldable cards for the experience section with expand/collapse functionality
- Project showcase with alternating layout
- Skills section organized by categories
- Education timeline
- Contact section with email protection
- Smooth scrolling and intersection animations

## Project Structure

The project uses a simple file structure:

```
/
├── index.html         # HTML skeleton structure
├── styles.css         # CSS styling with variables
├── script.js          # JavaScript with content loader
├── content.json       # All portfolio content in JSON format
├── favicon.svg        # Site icon
├── README.md          # This file
└── CLAUDE.md          # Guidance for Claude AI
```

## Getting Started

### Running Locally

Run the site locally using either Python or Node.js:

```bash
# Using Python (recommended)
python -m http.server

# OR using Node.js
npx serve
```

Then open your browser to the URL shown in the terminal (typically http://localhost:8000 or http://localhost:3000).

## Customizing Content

All content is stored in `content.json`, making it easy to update:

1. Open `content.json` in any text editor
2. Modify the content as needed (see structure below)
3. Save the file
4. Refresh your browser to see the changes

### JSON Structure

The content.json file is organized into sections:

- `meta`: SEO information (title, description, etc.)
- `navigation`: Navigation links and social media icons
- `hero`: Main hero section content
- `about`: About me section with skills list
- `experience`: Work experience entries with descriptions
- `projects`: Project showcase items
- `skills`: Skills organized by categories
- `education`: Education history
- `contact`: Contact section content
- `footer`: Footer links and copyright

Example of updating your job experience:
```json
"jobs": [
  {
    "id": "company-name",
    "company": "Company Name",
    "number": "01",
    "title": "Your Role",
    "url": "https://company-website.com",
    "period": "Month Year - Present",
    "type": "Optional Type (e.g., Volunteering)",
    "description": [
      "Achievement one with quantifiable results",
      "Achievement two with impact",
      "Achievement three with technologies used"
    ]
  }
]
```

## Deployment

This site can be deployed to any static hosting service:

1. GitHub Pages
2. Netlify
3. Vercel
4. Amazon S3
5. Any web hosting with file upload capability

Simply upload all files as-is - no build step required.

## Credits

- Design inspiration: [Brittany Chiang](https://brittanychiang.com/)
- Built with [Claude Code](https://claude.ai/code)
- Icons from [Font Awesome](https://fontawesome.com/)

## License

This project is licensed under the MIT License.