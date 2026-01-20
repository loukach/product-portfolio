# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

This is a JSON-powered portfolio website for a Product Manager, built with a dark theme inspired by Brittany Chiang's design. The site uses vanilla JavaScript, HTML, and CSS (with Font Awesome for icons) to create a responsive single-page application with smooth scrolling, animations, and a content management system through JSON.

## Key Features

- **JSON Content Management**: All content is loaded dynamically from content.json
- **Single Page Design**: Smooth scrolling between sections with active navigation
- **Responsive Layout**: Works on all device sizes with mobile navigation
- **Interactive Elements**: Foldable experience cards, project cards, skills categories, testimonials slider
- **Performance Optimized**: Efficient animations using IntersectionObserver
- **No Build Process**: Ready to deploy with no compilation step

## File Structure

```
/
├── index.html         # HTML skeleton structure
├── styles.css         # CSS styling with variables
├── script.js          # JavaScript with content loader
├── content.json       # All portfolio content in JSON format
├── favicon.svg        # Site icon
├── README.md          # User documentation
└── CLAUDE.md          # This file - guidance for Claude
```

## Running the Project

```bash
# Using Python
python -m http.server

# OR using Node.js
npx serve
```

## Code Organization

### HTML (index.html)
- Semantic HTML5 structure with appropriate landmarks
- Empty container elements that are populated by JavaScript
- Minimal inline content - skeleton structure only
- Font Awesome for icons

### CSS (styles.css)
- CSS variables at the top for theming
- Mobile-first responsive design
- Flexbox and Grid for layouts
- Smooth animations and transitions
- Media queries for responsive breakpoints

### JavaScript (script.js)
Two main components:
1. **Core Functionality**:
   - Smooth scrolling
   - Foldable cards for experience section
   - Testimonials slider with navigation
   - IntersectionObserver for scroll animations
   - Mobile navigation toggle
   - Scroll-to-top button
   - Reading mode toggle
   - Scroll progress indicator

2. **Content Loader**:
   - Fetches content.json asynchronously
   - Populates all sections dynamically
   - Creates DOM elements based on JSON data
   - Sets up event handlers for interactive elements

### Content (content.json)
Structured JSON with sections for:
- Meta information
- Navigation links
- Hero section
- About section with skills
- Experience items
- Projects
- Skills categories
- Education history
- Contact information
- Footer credits

## Modifying Content

The main way to update the site is by editing content.json:

1. Each section in the JSON has a specific schema that must be maintained
2. New entries (jobs, projects, etc.) can be added by following the existing patterns
3. The content loader will automatically process new items

For structure changes:
1. Update the HTML skeleton in index.html
2. Add corresponding sections to styles.css
3. Extend the content loader functions in script.js to handle new sections
4. Add the new content structure to content.json

## Styling Guidelines

- Maintain the dark theme with navy/cyan color scheme
- Use the existing CSS variables for consistency
- Follow the established naming conventions
- Keep responsive breakpoints consistent
- Test any style changes across multiple screen sizes
- Project cards alternate between left and right alignment with colored borders
- Project images use larger sizes with improved spacing for better visibility

## JavaScript Guidelines

- Maintain separation between UI functionality and content loading
- Use modern JavaScript (ES6+) features
- Preserve the asynchronous content loading pattern
- Keep event handlers properly scoped
- Use the established animation patterns

## Project Images

To add images to projects:

1. Place project images in the `project-images/` directory
2. In `content.json`, update each project's image configuration

### Single Image (standard)
```json
"image": {
  "placeholder": "fas fa-image",
  "src": "project-images/your-image-filename.jpg"
}
```

### Multiple Images (mobile screenshots)
For mobile app projects or when showcasing multiple views, use the `sources` array:
```json
"image": {
  "placeholder": "fas fa-mobile-alt",
  "sources": [
    "project-images/app-screen-1.png",
    "project-images/app-screen-2.png",
    "project-images/app-screen-3.png"
  ]
}
```

Multiple images are displayed side-by-side on desktop and stack responsively on mobile. This is ideal for:
- Mobile app screenshots showing different screens/features
- Before/after comparisons
- Multi-step process demonstrations

3. If no image is available, the system will automatically use the icon specified in the "placeholder" property

### Image Recommendations

**Single images:**
- Use 16:9 aspect ratio (e.g., 1280x720px) for consistent display
- Optimize images for web (reduce file size while maintaining quality)
- Use .jpg, .png, or .gif formats (animated GIFs are supported!)
- For animated GIFs, keep file size under 1MB to prevent performance issues

**Mobile screenshots (multiple images):**
- Use consistent dimensions across all screenshots in a set
- Portrait orientation works best (mobile phone aspect ratio)
- Recommended: 390x844px or similar iPhone dimensions
- Keep each image under 500KB for good performance
- 3 images is the recommended maximum for side-by-side display

### Enhanced Features
- Project cards alternate between left and right alignment with accent-colored borders
- Animated GIFs are automatically detected and given special styling treatment
- Images scale up slightly on hover for a more engaging experience
- Large, prominent project images with minimum heights of 500px for better visibility
- Mobile versions are optimized with centered cards and adjusted dimensions
- Technology tags feature subtle backgrounds for improved readability
- Multiple mobile screenshots display in a responsive gallery layout

### Project Image Naming Convention
- `background-removal.jpg` - For the AI Background Removal project
- `volunteer-agent.gif` - For the Conversational Agent project (using GIF for animation)
- `stock-management.gif` - For the Next-Gen UX project (animated demo)
- `parla-mobile-*.png` - For Parla! project mobile screenshots (votes, topics, participate)

## Deployment

The site is ready to deploy as-is to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Any standard web hosting

No build process is required - simply upload all files.