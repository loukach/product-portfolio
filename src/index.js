// Main JavaScript for Product Portfolio

document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            document.body.classList.toggle('nav-open');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile nav when clicking on a nav item
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
            document.body.classList.remove('nav-open');
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        });
    });
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('active') && 
            !sidebar.contains(e.target) && 
            !navToggle.contains(e.target)) {
            sidebar.classList.remove('active');
            document.body.classList.remove('nav-open');
            navToggle.classList.remove('active');
        }
    });
    
    // Smooth scroll for anchor links with easing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Improved smooth scrolling with a slight customization
                const startPosition = window.pageYOffset;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 800; // ms
                let start = null;
                
                // Easing function for smoother scroll
                const easeInOutCubic = (t) => t < 0.5 
                    ? 4 * t * t * t 
                    : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                
                window.requestAnimationFrame(step);
                
                function step(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const percentage = Math.min(progress / duration, 1);
                    const ease = easeInOutCubic(percentage);
                    
                    window.scrollTo(0, startPosition + distance * ease);
                    
                    if (progress < duration) {
                        window.requestAnimationFrame(step);
                    }
                }
            }
        });
    });
    
    // Experience tabs functionality with animation
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Don't do anything if the tab is already active
            if (button.classList.contains('active')) return;
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Fade out all tabs first
            tabContents.forEach(content => {
                if (content.classList.contains('active')) {
                    content.style.opacity = '0';
                    content.style.transform = 'translateX(10px)';
                    
                    // After fade out, remove active class and set up the new tab
                    setTimeout(() => {
                        tabContents.forEach(c => c.classList.remove('active'));
                        
                        // Add active class to clicked button
                        button.classList.add('active');
                        
                        // Get the tab ID and activate the corresponding content
                        const tabId = button.getAttribute('data-tab');
                        const newContent = document.getElementById(tabId);
                        newContent.classList.add('active');
                        
                        // Force a reflow before adding the transition back in
                        void newContent.offsetWidth;
                        
                        // Fade in the new tab
                        setTimeout(() => {
                            newContent.style.opacity = '1';
                            newContent.style.transform = 'translateX(0)';
                        }, 50);
                    }, 200);
                }
            });
            
            // If no tabs are active yet, activate the clicked one immediately
            if (!document.querySelector('.tab-content.active')) {
                button.classList.add('active');
                const tabId = button.getAttribute('data-tab');
                const content = document.getElementById(tabId);
                content.classList.add('active');
                
                setTimeout(() => {
                    content.style.opacity = '1';
                    content.style.transform = 'translateX(0)';
                }, 50);
            }
        });
    });
    
    // Scroll to top button
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    
    function handleScrollToTop() {
        if (window.scrollY > 500) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    }
    
    scrollToTopButton.addEventListener('click', () => {
        // Smooth scroll to top with easing
        const startPosition = window.pageYOffset;
        const duration = 800; // ms
        let start = null;
        
        // Easing function
        const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        
        window.requestAnimationFrame(step);
        
        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            const ease = easeInOutQuad(percentage);
            
            window.scrollTo(0, startPosition * (1 - ease));
            
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }
    });
    
    // Use IntersectionObserver for section animations
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.1
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add active class to animate the section
                entry.target.classList.add('active');
                
                // Update active navigation link
                const sectionId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Handle scroll effects (like scroll to top button)
    window.addEventListener('scroll', () => {
        handleScrollToTop();
    });
    
    // Email obfuscation for contact button
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        // Change the visible href to prevent scraping
        const emailParts = ['your-email', 'example.com'];
        const obfuscatedEmail = emailParts[0] + '[at]' + emailParts[1];
        
        // Display obfuscated email in the link's href attribute
        contactButton.setAttribute('href', 'mailto:' + obfuscatedEmail);
        
        // Replace with real email on click
        contactButton.addEventListener('click', function(e) {
            const realEmail = emailParts[0] + '@' + emailParts[1];
            this.setAttribute('href', 'mailto:' + realEmail);
        });
    }
    
    // Make the first section active immediately for a better initial view
    const firstSection = document.querySelector('.section');
    if (firstSection) {
        firstSection.classList.add('active');
    }
});