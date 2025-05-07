// Original portfolio JavaScript
document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".nav-toggle"),t=document.querySelector(".sidebar"),s=document.querySelectorAll(".nav-links a");e&&e.addEventListener("click",()=>{t.classList.toggle("active"),document.body.classList.toggle("nav-open"),e.classList.toggle("active")}),s.forEach(s=>{s.addEventListener("click",()=>{t.classList.remove("active"),document.body.classList.remove("nav-open"),e&&e.classList.remove("active")})}),document.addEventListener("click",s=>{t.classList.contains("active")&&!t.contains(s.target)&&!e.contains(s.target)&&(t.classList.remove("active"),document.body.classList.remove("nav-open"),e.classList.remove("active"))}),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();const t=this.getAttribute("href");if("#"===t)return;const s=document.querySelector(t);if(s){const e=window.pageYOffset,t=s.getBoundingClientRect().top+window.pageYOffset,a=t-e,n=800;let o=null;const i=e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1;window.requestAnimationFrame(function t(s){o||(o=s);const c=s-o,l=Math.min(c/n,1),r=i(l);window.scrollTo(0,e+a*r),c<n&&window.requestAnimationFrame(t)})}})});const a=document.querySelectorAll(".tab-button"),n=document.querySelectorAll(".tab-content");a.forEach(e=>{e.addEventListener("click",()=>{if(e.classList.contains("active"))return;a.forEach(e=>{e.classList.remove("active")}),n.forEach(t=>{t.classList.contains("active")&&(t.style.opacity="0",t.style.transform="translateX(10px)",setTimeout(()=>{n.forEach(e=>{e.classList.remove("active")}),e.classList.add("active");const t=e.getAttribute("data-tab"),s=document.getElementById(t);s.classList.add("active"),void s.offsetWidth,setTimeout(()=>{s.style.opacity="1",s.style.transform="translateX(0)"},50)},200))}),document.querySelector(".tab-content.active")||(e.classList.add("active"),document.getElementById(e.getAttribute("data-tab")).classList.add("active"),setTimeout(()=>{document.getElementById(e.getAttribute("data-tab")).style.opacity="1",document.getElementById(e.getAttribute("data-tab")).style.transform="translateX(0)"},50))})});const o=document.querySelector(".scroll-to-top");function i(){window.scrollY>500?o.classList.add("visible"):o.classList.remove("visible")}o.addEventListener("click",()=>{const e=window.pageYOffset,t=800;let s=null;const a=e=>e<.5?2*e*e:-1+(4-2*e)*e;window.requestAnimationFrame(function n(o){s||(s=o);const i=o-s,c=Math.min(i/t,1),l=a(c);window.scrollTo(0,e*(1-l)),i<t&&window.requestAnimationFrame(n)})});const c=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){e.target.classList.add("active");const t=e.target.getAttribute("id");s.forEach(e=>{e.classList.remove("active"),e.getAttribute("href")===`#${t}`&&e.classList.add("active")})}})},{root:null,rootMargin:"-20% 0px -20% 0px",threshold:.1});document.querySelectorAll(".section").forEach(e=>{c.observe(e)}),window.addEventListener("scroll",()=>{i()});const l=document.querySelector(".contact-button");if(l){const e=["your-email","example.com"],t=e[0]+"[at]"+e[1];l.setAttribute("href","mailto:"+t),l.addEventListener("click",function(t){this.setAttribute("href","mailto:"+e[0]+"@"+e[1])})}document.querySelector(".section")&&document.querySelector(".section").classList.add("active")});

// Content Loader - Minified
async function loadContent(){try{const e=await fetch("content.json");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const t=await e.json();populateContent(t)}catch(e){console.error("Error loading content:",e)}}function populateContent(e){populateMetadata(e.meta),populateNavigation(e.navigation),populateHero(e.hero),populateAbout(e.about),populateExperience(e.experience),populateProjects(e.projects),populateTestimonials(e.testimonials),populateSkills(e.skills),populateEducation(e.education),populateContact(e.contact),populateFooter(e.footer),initializeInteractiveFeatures()}function populateMetadata(e){document.title=e.title,document.querySelector('meta[name="description"]').setAttribute("content",e.description),document.querySelector('meta[name="keywords"]').setAttribute("content",e.keywords),document.querySelector('meta[name="author"]').setAttribute("content",e.author),document.querySelector('meta[property="og:title"]').setAttribute("content",e.title),document.querySelector('meta[property="og:description"]').setAttribute("content",e.description),document.querySelector('meta[property="og:url"]').setAttribute("content",e.url),document.querySelector('meta[property="og:image"]').setAttribute("content",e.socialImage),document.querySelector('meta[property="twitter:title"]').setAttribute("content",e.title),document.querySelector('meta[property="twitter:description"]').setAttribute("content",e.description),document.querySelector('meta[property="twitter:url"]').setAttribute("content",e.url),document.querySelector('meta[property="twitter:image"]').setAttribute("content",e.socialImage),document.querySelector('link[rel="canonical"]').setAttribute("href",e.url)}function populateNavigation(e){document.querySelector(".logo a").textContent=e.logo;const t=document.querySelector(".nav-links");t.innerHTML="",e.links.forEach(e=>{const n=document.createElement("li"),a=document.createElement("a");a.href=e.url,a.innerHTML=`<span>${e.number}.</span> ${e.name}`,"About"===e.name&&a.classList.add("active"),n.appendChild(a),t.appendChild(n)});const n=document.querySelector(".social-links");n.innerHTML="",e.social.forEach(e=>{const t=document.createElement("a");t.href=e.url,t.setAttribute("aria-label",e.name);const a=document.createElement("i");a.className=e.icon,t.appendChild(a),n.appendChild(t)})}function populateHero(e){const t=document.querySelector(".profile-intro");t.querySelector(".intro").textContent=e.intro,t.querySelector(".title").textContent=e.name,t.querySelector(".subtitle").textContent=e.tagline,t.querySelector(".description").innerHTML=e.description;const n=t.querySelector(".cta-button");n.textContent=e.ctaText,n.href=e.ctaLink}function populateAbout(e){const t=document.getElementById("about");t.querySelector(".section-title").innerHTML=`<span>${e.number}.</span> ${e.title}`;const n=t.querySelector(".about-text");n.innerHTML="",e.paragraphs.forEach(e=>{const t=document.createElement("p");t.textContent=e,n.appendChild(t)});const a=document.createElement("ul");a.className="skills-list",e.skills.forEach(e=>{const t=document.createElement("li");t.textContent=e,a.appendChild(t)}),n.appendChild(a);const o=document.createElement("p");o.textContent=e.closing,n.appendChild(o)}function populateExperience(e){const t=document.getElementById("experience");t.querySelector(".section-title").innerHTML=`<span>${e.number}.</span> ${e.title}`;const n=t.querySelector(".tabs-list");n.innerHTML="",e.jobs.forEach(t=>{const a=document.createElement("button");a.className="tab-button",a.setAttribute("data-tab",t.id),a.innerHTML=`<span>${t.number}.</span> ${t.company}`,t.id===e.jobs[0].id&&a.classList.add("active"),n.appendChild(a)});const a=t.querySelector(".tab-content-container");a.innerHTML="",e.jobs.forEach(t=>{const n=document.createElement("div");n.className="tab-content",n.id=t.id,t.id===e.jobs[0].id&&n.classList.add("active");const o=document.createElement("h3");o.className="job-title";let c=`${t.title} <span class="company">@ <a href="${t.url}" target="_blank" rel="noopener noreferrer">${t.company}</a></span>`;t.type&&(c+=` <span class="job-type">(${t.type})</span>`),o.innerHTML=c,n.appendChild(o);const i=document.createElement("p");i.className="job-duration",i.textContent=t.period,n.appendChild(i);const r=document.createElement("ul");r.className="job-description",t.description.forEach(e=>{const t=document.createElement("li");t.textContent=e,r.appendChild(t)}),n.appendChild(r),a.appendChild(n)})}function populateProjects(e){const t=document.getElementById("projects");t.querySelector(".section-title").innerHTML=`<span>${e.number}.</span> ${e.title}`;const n=t.querySelector(".projects-grid");n.innerHTML="",e.items.forEach(e=>{const t=document.createElement("div");t.className="project-card";const a=document.createElement("div");a.className="project-content";const o=document.createElement("div");o.className="project-overline",o.textContent="Featured Project",a.appendChild(o);const c=document.createElement("h3");c.className="project-title",c.textContent=e.title,a.appendChild(c);const i=document.createElement("div");i.className="project-description";const r=document.createElement("p");r.textContent=e.description,i.appendChild(r),a.appendChild(i);const l=document.createElement("ul");l.className="project-tech-list",e.technologies.forEach(e=>{const t=document.createElement("li");t.textContent=e,l.appendChild(t)}),a.appendChild(l);const s=document.createElement("div");s.className="project-links",e.links.forEach(e=>{const t=document.createElement("a");t.href=e.url,t.setAttribute("aria-label",e.label);const n=document.createElement("i");n.className=e.icon,t.appendChild(n),s.appendChild(t)}),a.appendChild(s),t.appendChild(a);const d=document.createElement("div");d.className="project-image";const m=document.createElement("div");m.className="image-placeholder";const p=document.createElement("i");p.className=e.image.placeholder,m.appendChild(p),d.appendChild(m),t.appendChild(d),n.appendChild(t)})}function populateSkills(e){const t=document.getElementById("skills");t.querySelector(".section-title").innerHTML=`<span>${e.number}.</span> ${e.title}`;const n=t.querySelector(".skills-container");n.innerHTML="",e.categories.forEach(e=>{const t=document.createElement("div");t.className="skills-category";const a=document.createElement("h3");a.className="category-title",a.textContent=e.name,t.appendChild(a);const o=document.createElement("ul");o.className="skills-category-list",e.items.forEach(e=>{const t=document.createElement("li");t.textContent=e,o.appendChild(t)}),t.appendChild(o),n.appendChild(t)})}function populateEducation(e){const t=document.getElementById("education");t.querySelector(".section-title").innerHTML=`<span>${e.number}.</span> ${e.title}`;const n=t.querySelector(".education-list");n.innerHTML="",e.schools.forEach(e=>{const t=document.createElement("div");t.className="education-item";const a=document.createElement("h3");a.className="school-name",a.textContent=e.name,t.appendChild(a);const o=document.createElement("div");o.className="degree",o.textContent=e.degree,t.appendChild(o);const c=document.createElement("div");c.className="education-year-location",c.textContent=`${e.period}, ${e.location}`,t.appendChild(c),n.appendChild(t)})}function populateContact(e){const t=document.getElementById("contact");t.querySelector(".section-title").innerHTML=`<span>${e.number}.</span> ${e.title}`;const n=t.querySelector(".contact-content"),a=n.querySelectorAll(".contact-text");a.forEach(e=>e.remove()),e.paragraphs.forEach(e=>{const t=document.createElement("p");t.className="contact-text",t.textContent=e,n.insertBefore(t,n.querySelector(".contact-button"))});const o=n.querySelector(".contact-button");o.textContent=e.ctaText;const c=[e.email.user,e.email.domain],i=c[0]+"@"+c[1];o.setAttribute("href","mailto:"+i)}function populateFooter(e){const t=document.querySelector("footer");t.innerHTML="";const n=document.createElement("p"),a=document.createElement("a");a.href=e.designCredit.url,a.target="_blank",a.rel="noopener noreferrer",a.textContent=e.designCredit.name,n.textContent=e.designCredit.text+" ",n.appendChild(a),t.appendChild(n);const o=document.createElement("p"),c=document.createElement("a");c.href=e.toolCredit.url,c.target="_blank",c.rel="noopener noreferrer",c.textContent=e.toolCredit.name,o.textContent=e.toolCredit.text+" ",o.appendChild(c),t.appendChild(o);const i=document.createElement("p");i.className="copyright",i.textContent=e.copyright,t.appendChild(i)}

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
        
        const ai = document.createElement("div");
        ai.className = "testimonial-author-image";
        
        if (e.author.image.initials) {
            const in1 = document.createElement("span");
            in1.className = "initials";
            in1.textContent = e.author.image.initials;
            ai.appendChild(in1);
        }
        
        a.appendChild(ai);
        
        const ai2 = document.createElement("div");
        ai2.className = "testimonial-author-info";
        
        const an = document.createElement("div");
        an.className = "testimonial-author-name";
        an.textContent = e.author.name;
        ai2.appendChild(an);
        
        const at = document.createElement("div");
        at.className = "testimonial-author-title";
        at.textContent = e.author.title;
        ai2.appendChild(at);
        
        a.appendChild(ai2);
        s.appendChild(a);
        
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
    // Initialize reading mode toggle
    const readingModeToggle = document.querySelector(".reading-mode-toggle");
    if (readingModeToggle) {
        readingModeToggle.addEventListener("click", function() {
            document.body.classList.toggle("reading-mode");
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
        
        function showTestimonial(index) {
            testimonials.forEach(t => t.classList.remove("active"));
            indicators.forEach(i => i.classList.remove("active"));
            
            testimonials[index].classList.add("active");
            indicators[index].classList.add("active");
            currentIndex = index;
        }
        
        if (prevButton) {
            prevButton.addEventListener("click", function() {
                let newIndex = currentIndex - 1;
                if (newIndex < 0) newIndex = testimonials.length - 1;
                showTestimonial(newIndex);
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener("click", function() {
                let newIndex = currentIndex + 1;
                if (newIndex >= testimonials.length) newIndex = 0;
                showTestimonial(newIndex);
            });
        }
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", function() {
                showTestimonial(index);
            });
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

document.addEventListener("DOMContentLoaded",loadContent);