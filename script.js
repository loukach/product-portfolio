// Original portfolio JavaScript
document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".nav-toggle"),t=document.querySelector(".sidebar"),s=document.querySelectorAll(".nav-links a");e&&e.addEventListener("click",()=>{t.classList.toggle("active"),document.body.classList.toggle("nav-open"),e.classList.toggle("active")}),s.forEach(s=>{s.addEventListener("click",()=>{t.classList.remove("active"),document.body.classList.remove("nav-open"),e&&e.classList.remove("active")})}),document.addEventListener("click",s=>{t.classList.contains("active")&&!t.contains(s.target)&&!e.contains(s.target)&&(t.classList.remove("active"),document.body.classList.remove("nav-open"),e.classList.remove("active"))}),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();const t=this.getAttribute("href");if("#"===t)return;const s=document.querySelector(t);if(s){const e=window.pageYOffset,t=s.getBoundingClientRect().top+window.pageYOffset,a=t-e,n=800;let o=null;const i=e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1;window.requestAnimationFrame(function t(s){o||(o=s);const c=s-o,l=Math.min(c/n,1),r=i(l);window.scrollTo(0,e+a*r),c<n&&window.requestAnimationFrame(t)})}})});const a=document.querySelectorAll(".tab-button"),n=document.querySelectorAll(".tab-content");a.forEach(e=>{e.addEventListener("click",()=>{if(e.classList.contains("active"))return;a.forEach(e=>{e.classList.remove("active")}),n.forEach(t=>{t.classList.contains("active")&&(t.style.opacity="0",t.style.transform="translateX(10px)",setTimeout(()=>{n.forEach(e=>{e.classList.remove("active")}),e.classList.add("active");const t=e.getAttribute("data-tab"),s=document.getElementById(t);s.classList.add("active"),void s.offsetWidth,setTimeout(()=>{s.style.opacity="1",s.style.transform="translateX(0)"},50)},200))}),document.querySelector(".tab-content.active")||(e.classList.add("active"),document.getElementById(e.getAttribute("data-tab")).classList.add("active"),setTimeout(()=>{document.getElementById(e.getAttribute("data-tab")).style.opacity="1",document.getElementById(e.getAttribute("data-tab")).style.transform="translateX(0)"},50))})});const o=document.querySelector(".scroll-to-top");function i(){window.scrollY>500?o.classList.add("visible"):o.classList.remove("visible")}o.addEventListener("click",()=>{const e=window.pageYOffset,t=800;let s=null;const a=e=>e<.5?2*e*e:-1+(4-2*e)*e;window.requestAnimationFrame(function n(o){s||(s=o);const i=o-s,c=Math.min(i/t,1),l=a(c);window.scrollTo(0,e*(1-l)),i<t&&window.requestAnimationFrame(n)})});const c=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){e.target.classList.add("active");const t=e.target.getAttribute("id");s.forEach(e=>{e.classList.remove("active"),e.getAttribute("href")===`#${t}`&&e.classList.add("active")})}})},{root:null,rootMargin:"-20% 0px -20% 0px",threshold:.1});document.querySelectorAll(".section").forEach(e=>{c.observe(e)}),window.addEventListener("scroll",()=>{i()});const l=document.querySelector(".contact-button");if(l){const e=["your-email","example.com"],t=e[0]+"[at]"+e[1];l.setAttribute("href","mailto:"+t),l.addEventListener("click",function(t){this.setAttribute("href","mailto:"+e[0]+"@"+e[1])})}document.querySelector(".section")&&document.querySelector(".section").classList.add("active")});

// Content Loader - Minified
async function loadContent(){try{const e=await fetch("content.json");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const t=await e.json();populateContent(t)}catch(e){console.error("Error loading content:",e)}}function populateContent(e){populateMetadata(e.meta),populateNavigation(e.navigation),populateHero(e.hero),populateAbout(e.about),populateExperience(e.experience),populateProjects(e.projects),populateTestimonials(e.testimonials),populateSkills(e.skills),populateEducation(e.education),populateContact(e.contact),populateFooter(e.footer),initializeInteractiveFeatures()}function populateMetadata(e){
    // Set document title
    document.title = e.title;
    
    // Helper function to safely update meta tags
    const updateMetaTag = (selector, attribute, value) => {
        const element = document.querySelector(selector);
        if (element) {
            element.setAttribute(attribute, value);
        }
    };
    
    // Update meta tags only if they exist
    updateMetaTag('meta[name="description"]', 'content', e.description);
    updateMetaTag('meta[name="keywords"]', 'content', e.keywords);
    updateMetaTag('meta[name="author"]', 'content', e.author);
    updateMetaTag('meta[property="og:title"]', 'content', e.title);
    updateMetaTag('meta[property="og:description"]', 'content', e.description);
    updateMetaTag('meta[property="og:url"]', 'content', e.url);
    updateMetaTag('meta[property="og:image"]', 'content', e.socialImage);
    updateMetaTag('meta[property="twitter:title"]', 'content', e.title);
    updateMetaTag('meta[property="twitter:description"]', 'content', e.description);
    updateMetaTag('meta[property="twitter:url"]', 'content', e.url);
    updateMetaTag('meta[property="twitter:image"]', 'content', e.socialImage);
    updateMetaTag('link[rel="canonical"]', 'href', e.url);
}function populateNavigation(e){
    // Skip changing the logo since we now use an image instead of text
    
    // Update navigation links
    const t = document.querySelector(".nav-links");
    t.innerHTML = "";
    e.links.forEach(e => {
        const n = document.createElement("li");
        const a = document.createElement("a");
        a.href = e.url;
        a.innerHTML = `<span>${e.number}.</span> ${e.name}`;
        if ("About" === e.name) a.classList.add("active");
        n.appendChild(a);
        t.appendChild(n);
    });
    
    // Update social links
    const n = document.querySelector(".social-links");
    n.innerHTML = "";
    e.social.forEach(e => {
        const t = document.createElement("a");
        t.href = e.url;
        t.setAttribute("aria-label", e.name);
        const a = document.createElement("i");
        a.className = e.icon;
        t.appendChild(a);
        n.appendChild(t);
    });
}function populateHero(e){
    // Populate all profile-intro sections (desktop in left panel and mobile in right panel)
    const profileIntros = document.querySelectorAll(".profile-intro");
    
    profileIntros.forEach(t => {
        if (!t) return; // Skip if element doesn't exist
        
        // Safely set text content
        const safeSetText = (selector, text) => {
            const element = t.querySelector(selector);
            if (element) {
                element.textContent = text;
            }
        };
        
        // Safely set HTML content
        const safeSetHtml = (selector, html) => {
            const element = t.querySelector(selector);
            if (element) {
                element.innerHTML = html;
            }
        };
        
        // Update hero elements
        safeSetText(".intro", e.intro);
        safeSetText(".title", e.name);
        safeSetText(".subtitle", e.tagline);
        safeSetHtml(".description", e.description);
        
        // Update CTA button if it exists in this intro
        const n = t.querySelector(".cta-button");
        if (n) {
            n.textContent = e.ctaText;
            n.href = e.ctaLink;
        }
    });
}function populateAbout(e){const t=document.getElementById("about");t.querySelector(".section-title").innerHTML=`<span>${e.number}.</span> ${e.title}`;const n=t.querySelector(".about-text");n.innerHTML="",e.paragraphs.forEach(e=>{const t=document.createElement("p");t.textContent=e,n.appendChild(t)});const a=document.createElement("ul");a.className="skills-list",e.skills.forEach(e=>{const t=document.createElement("li");t.textContent=e,a.appendChild(t)}),n.appendChild(a);const o=document.createElement("p");o.textContent=e.closing,n.appendChild(o)}function populateExperience(e) {
    const t = document.getElementById("experience");
    t.querySelector(".section-title").innerHTML = `<span>${e.number}.</span> ${e.title}`;
    
    const list = t.querySelector(".experience-list");
    list.innerHTML = "";
    
    e.jobs.forEach((job, index) => {
        // Create experience card
        const card = document.createElement("div");
        card.className = "experience-card";
        if (index === 0) card.classList.add("expanded");
        card.setAttribute("data-id", job.id);
        
        // Create header
        const header = document.createElement("div");
        header.className = "experience-header";
        
        // Create header content
        const headerContent = document.createElement("div");
        headerContent.className = "experience-header-content";
        
        // Create company
        const company = document.createElement("h3");
        company.className = "experience-company";
        company.innerHTML = `<a href="${job.url}" target="_blank" rel="noopener noreferrer">${job.company}</a>`;
        
        // Create title
        const title = document.createElement("div");
        title.className = "experience-title";
        title.textContent = job.title;
        
        // Add job type if available
        if (job.type) {
            const type = document.createElement("span");
            type.className = "experience-type";
            type.textContent = `(${job.type})`;
            title.appendChild(type);
        }
        
        // Create duration
        const duration = document.createElement("div");
        duration.className = "experience-duration";
        duration.textContent = job.period;
        
        // Append all header content elements
        headerContent.appendChild(company);
        headerContent.appendChild(title);
        headerContent.appendChild(duration);
        
        // Create toggle button
        const toggle = document.createElement("button");
        toggle.className = "experience-toggle";
        toggle.innerHTML = "+";
        toggle.setAttribute("aria-label", "Toggle experience details");
        
        // Add header elements to header
        header.appendChild(headerContent);
        header.appendChild(toggle);
        
        // Create content section
        const content = document.createElement("div");
        content.className = "experience-content";
        
        // Create description list
        const description = document.createElement("ul");
        description.className = "experience-description";
        
        // Add description items
        job.description.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            description.appendChild(li);
        });
        
        // Append description to content
        content.appendChild(description);
        
        // Append all sections to card
        card.appendChild(header);
        card.appendChild(content);
        
        // Append card to list
        list.appendChild(card);
        
        // Add click event for toggling
        header.addEventListener("click", () => {
            card.classList.toggle("expanded");
        });
    });
}function populateProjects(e){const t=document.getElementById("projects");t.querySelector(".section-title").innerHTML=`<span>${e.number}.</span> ${e.title}`;const n=t.querySelector(".projects-grid");n.innerHTML="",e.items.forEach(e=>{const t=document.createElement("div");t.className="project-card";const a=document.createElement("div");a.className="project-content";const o=document.createElement("div");o.className="project-overline",o.textContent="Featured Project",a.appendChild(o);const c=document.createElement("h3");c.className="project-title",c.textContent=e.title,a.appendChild(c);const i=document.createElement("div");i.className="project-description";const r=document.createElement("p");r.textContent=e.description,i.appendChild(r),a.appendChild(i);const l=document.createElement("ul");l.className="project-tech-list",e.technologies.forEach(e=>{const t=document.createElement("li");t.textContent=e,l.appendChild(t)}),a.appendChild(l);const s=document.createElement("div");s.className="project-links",e.links.forEach(e=>{const t=document.createElement("a");t.href=e.url,t.setAttribute("aria-label",e.label);const n=document.createElement("i");n.className=e.icon,t.appendChild(n),s.appendChild(t)}),a.appendChild(s),t.appendChild(a);const d=document.createElement("div");d.className="project-image";const m=document.createElement("div");m.className="image-placeholder";const p=document.createElement("i");p.className=e.image.placeholder,m.appendChild(p),d.appendChild(m),t.appendChild(d),n.appendChild(t)})}function populateSkills(e){const t=document.getElementById("skills");t.querySelector(".section-title").innerHTML=`<span>${e.number}.</span> ${e.title}`;const n=t.querySelector(".skills-container");n.innerHTML="",e.categories.forEach(e=>{const t=document.createElement("div");t.className="skills-category";const a=document.createElement("h3");a.className="category-title",a.textContent=e.name,t.appendChild(a);const o=document.createElement("ul");o.className="skills-category-list",e.items.forEach(e=>{const t=document.createElement("li");t.textContent=e,o.appendChild(t)}),t.appendChild(o),n.appendChild(t)})}function populateEducation(e){const t=document.getElementById("education");t.querySelector(".section-title").innerHTML=`<span>${e.number}.</span> ${e.title}`;const n=t.querySelector(".education-list");n.innerHTML="",e.schools.forEach(e=>{const t=document.createElement("div");t.className="education-item";const a=document.createElement("h3");a.className="school-name",a.textContent=e.name,t.appendChild(a);const o=document.createElement("div");o.className="degree",o.textContent=e.degree,t.appendChild(o);const c=document.createElement("div");c.className="education-year-location",c.textContent=`${e.period}, ${e.location}`,t.appendChild(c),n.appendChild(t)})}function populateContact(e){const t=document.getElementById("contact");t.querySelector(".section-title").innerHTML=`<span>${e.number}.</span> ${e.title}`;const n=t.querySelector(".contact-content"),a=n.querySelectorAll(".contact-text");a.forEach(e=>e.remove()),e.paragraphs.forEach(e=>{const t=document.createElement("p");t.className="contact-text",t.textContent=e,n.insertBefore(t,n.querySelector(".contact-button"))});const o=n.querySelector(".contact-button");o.textContent=e.ctaText;const c=[e.email.user,e.email.domain],i=c[0]+"@"+c[1];o.setAttribute("href","mailto:"+i)}function populateFooter(e){const t=document.querySelector("footer");t.innerHTML="";const n=document.createElement("p"),a=document.createElement("a");a.href=e.designCredit.url,a.target="_blank",a.rel="noopener noreferrer",a.textContent=e.designCredit.name,n.textContent=e.designCredit.text+" ",n.appendChild(a),t.appendChild(n);const o=document.createElement("p"),c=document.createElement("a");c.href=e.toolCredit.url,c.target="_blank",c.rel="noopener noreferrer",c.textContent=e.toolCredit.name,o.textContent=e.toolCredit.text+" ",o.appendChild(c),t.appendChild(o);const i=document.createElement("p");i.className="copyright",i.textContent=e.copyright,t.appendChild(i)}

// Populate testimonials section
function populateTestimonials(e) {
    const t = document.getElementById("testimonials");
    t.querySelector(".section-title").innerHTML = `<span>${e.number}.</span> ${e.title}`;
    
    const n = t.querySelector(".testimonials-slider");
    n.innerHTML = "";
    
    e.items.forEach((e, i) => {
        const s = document.createElement("div");
        s.className = "testimonial";
        if (i === 0) s.classList.add("active");
        
        const c = document.createElement("div");
        c.className = "testimonial-content";
        c.textContent = e.content;
        s.appendChild(c);
        
        const a = document.createElement("div");
        a.className = "testimonial-author";
        
        // Create minimal author info
        const authorName = document.createElement("span");
        authorName.className = "testimonial-author-name";
        
        // Extract first name only
        const firstName = e.author.name.split(' ')[0];
        authorName.textContent = firstName;
        
        // Add title with separator
        const authorTitle = document.createElement("span");
        authorTitle.className = "testimonial-author-title";
        authorTitle.textContent = e.author.title;
        
        // Add author information to author div
        a.appendChild(authorName);
        
        // Add separator with proper spacing exactly as specified
        a.appendChild(document.createTextNode("  •  "));
        
        a.appendChild(authorTitle);
        
        // Add author section to testimonial
        s.appendChild(a);
        
        // Add testimonial to slider
        n.appendChild(s);
    });
    
    // Create indicators
    const ind = t.querySelector(".testimonials-indicators");
    ind.innerHTML = "";
    
    e.items.forEach((e, i) => {
        const d = document.createElement("div");
        d.className = "testimonial-indicator";
        if (i === 0) d.classList.add("active");
        d.setAttribute("data-index", i);
        ind.appendChild(d);
    });
}

// Function to initialize all interactive features
function initializeInteractiveFeatures() {
    // Initialize color palette functionality
    initializePaletteSelector();
    
    // Initialize reading mode toggle
    const readingModeToggle = document.querySelector(".reading-mode-toggle");
    if (readingModeToggle) {
        readingModeToggle.addEventListener("click", function() {
            document.body.classList.toggle("reading-mode");
            
            // When reading mode changes, we need to update the active palette colors
            const currentPalette = document.body.getAttribute("data-palette") || "original";
            applyPalette(currentPalette);
            
            // When reading mode changes, save the current state
            saveUserPreferences();
        });
    }
    
    // Initialize scroll progress indicator
    const scrollProgress = document.querySelector(".scroll-progress-bar");
    if (scrollProgress) {
        window.addEventListener("scroll", function() {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;
            scrollProgress.style.width = scrolledPercentage + "%";
        });
    }
    
    // Initialize testimonials slider
    const testimonialsSlider = document.querySelector(".testimonials-slider");
    if (testimonialsSlider) {
        const testimonials = testimonialsSlider.querySelectorAll(".testimonial");
        const indicators = document.querySelectorAll(".testimonial-indicator");
        const prevButton = document.querySelector(".prev-testimonial");
        const nextButton = document.querySelector(".next-testimonial");
        
        let currentIndex = 0;
        let autoplayInterval = null;
        const autoplayDelay = 3500; // 3.5 seconds between transitions
        
        function showTestimonial(index) {
            testimonials.forEach(t => t.classList.remove("active"));
            indicators.forEach(i => i.classList.remove("active"));
            
            testimonials[index].classList.add("active");
            indicators[index].classList.add("active");
            currentIndex = index;
        }
        
        function nextTestimonial() {
            let newIndex = currentIndex + 1;
            if (newIndex >= testimonials.length) newIndex = 0;
            showTestimonial(newIndex);
        }
        
        function prevTestimonial() {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = testimonials.length - 1;
            showTestimonial(newIndex);
        }
        
        // Start autoplay
        function startAutoplay() {
            if (autoplayInterval) clearInterval(autoplayInterval);
            autoplayInterval = setInterval(nextTestimonial, autoplayDelay);
        }
        
        // Stop autoplay
        function stopAutoplay() {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
                autoplayInterval = null;
            }
        }
        
        // Initialize autoplay
        startAutoplay();
        
        // Pause on hover
        testimonialsSlider.addEventListener("mouseenter", stopAutoplay);
        testimonialsSlider.addEventListener("mouseleave", startAutoplay);
        
        // Setup navigation buttons
        if (prevButton) {
            prevButton.addEventListener("click", function() {
                prevTestimonial();
                // Reset autoplay timer after manual navigation
                stopAutoplay();
                startAutoplay();
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener("click", function() {
                nextTestimonial();
                // Reset autoplay timer after manual navigation
                stopAutoplay();
                startAutoplay();
            });
        }
        
        // Setup indicator clicks
        indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", function() {
                showTestimonial(index);
                // Reset autoplay timer after manual navigation
                stopAutoplay();
                startAutoplay();
            });
        });
        
        // Stop autoplay when page is not visible
        document.addEventListener("visibilitychange", function() {
            if (document.hidden) {
                stopAutoplay();
            } else {
                startAutoplay();
            }
        });
    }
    
    // Initialize navigation for split-screen layout
    const navToggle = document.querySelector(".nav-toggle");
    const leftPanel = document.querySelector(".left-panel");
    const navLinks = document.querySelectorAll(".nav-links a");
    
    if (navToggle && leftPanel) {
        navToggle.addEventListener("click", () => {
            leftPanel.classList.toggle("active");
            document.body.classList.toggle("nav-open");
            navToggle.classList.toggle("active");
        });
        
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (window.innerWidth < 992) {
                    leftPanel.classList.remove("active");
                    document.body.classList.remove("nav-open");
                    navToggle.classList.remove("active");
                }
            });
        });
    }
}

// Palette Selector Functions
function initializePaletteSelector() {
    const paletteSelector = document.querySelector(".palette-selector");
    const paletteToggle = document.querySelector(".palette-toggle");
    const paletteOptions = document.querySelectorAll(".palette-option");
    
    // Toggle dropdown visibility
    if (paletteToggle) {
        paletteToggle.addEventListener("click", function() {
            paletteSelector.classList.toggle("active");
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (paletteSelector && paletteSelector.classList.contains("active") && 
            !paletteSelector.contains(event.target)) {
            paletteSelector.classList.remove("active");
        }
    });
    
    // Handle palette selection
    paletteOptions.forEach(option => {
        option.addEventListener("click", function() {
            const palette = this.getAttribute("data-palette");
            
            // Remove active class from all options
            paletteOptions.forEach(opt => opt.classList.remove("active"));
            
            // Add active class to selected option
            this.classList.add("active");
            
            // Apply the selected palette
            applyPalette(palette);
            
            // Close the dropdown
            paletteSelector.classList.remove("active");
            
            // Save user preferences
            saveUserPreferences();
        });
    });
    
    // Load saved preferences on init
    loadUserPreferences();
}

// Apply palette to document
function applyPalette(palette) {
    // Reference to document root for CSS variables
    const root = document.documentElement;
    
    // Store the current palette name as a data attribute for reference
    document.body.setAttribute("data-palette", palette);
    
    // Check if we're in dark or light mode currently
    const isLightMode = document.body.classList.contains("reading-mode");
    const mode = isLightMode ? "light" : "dark";
    
    // Update CSS variables based on palette and mode
    // Main Background
    root.style.setProperty('--navy', `var(--palette-${palette}-${mode}-bg)`);
    
    // Card Background
    root.style.setProperty('--light-navy', `var(--palette-${palette}-${mode}-card)`);
    
    // Accent Color
    root.style.setProperty('--cyan', `var(--palette-${palette}-${mode}-accent)`);
    
    // Text Colors
    root.style.setProperty('--lightest-slate', `var(--palette-${palette}-${mode}-text)`);
    root.style.setProperty('--slate', `var(--palette-${palette}-${mode}-text-secondary)`);
    
    // Light Mode Variables (for toggling)
    root.style.setProperty('--light-bg', `var(--palette-${palette}-light-bg)`);
    root.style.setProperty('--light-secondary', `var(--palette-${palette}-light-card)`);
    root.style.setProperty('--light-accent', `var(--palette-${palette}-light-accent)`);
    root.style.setProperty('--light-text', `var(--palette-${palette}-light-text)`);
    root.style.setProperty('--light-text-secondary', `var(--palette-${palette}-light-text-secondary)`);
    
    // Apply smooth transition to body
    document.body.style.transition = "var(--palette-transition)";
    
    // Update the active state in the UI
    const paletteOptions = document.querySelectorAll(".palette-option");
    paletteOptions.forEach(option => {
        option.classList.toggle("active", option.getAttribute("data-palette") === palette);
    });
}

// Save user preferences to localStorage
function saveUserPreferences() {
    const currentPalette = document.body.getAttribute("data-palette") || "original";
    const isDarkMode = !document.body.classList.contains("reading-mode");
    
    const preferences = {
        palette: currentPalette,
        darkMode: isDarkMode
    };
    
    localStorage.setItem("portfolioPreferences", JSON.stringify(preferences));
}

// Load user preferences from localStorage
function loadUserPreferences() {
    const savedPrefs = localStorage.getItem("portfolioPreferences");
    
    if (savedPrefs) {
        const preferences = JSON.parse(savedPrefs);
        
        // Apply saved palette
        applyPalette(preferences.palette);
        
        // Apply saved dark/light mode
        if (preferences.darkMode === false) {
            document.body.classList.add("reading-mode");
        } else {
            document.body.classList.remove("reading-mode");
        }
    } else {
        // Default to your preferred palette if no saved preferences
        applyPalette("warm"); // Available options: warm, neofuture, terminal, creative, original
    }
}

document.addEventListener("DOMContentLoaded",loadContent);