// Smooth scroll helper
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Animated counter function
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counters when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });

    // Form submission handlers
    const guideForm = document.getElementById('guide-form');
    if (guideForm) {
        guideForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[name="email"]').value;
            
            // Simulate PDF download
            alert(`Thank you! Your Free Waste Cost Optimization Guide is being prepared.\n\nWe've sent a download link to: ${email}`);
            
            // Reset form
            this.reset();
            
            // In production, this would:
            // 1. Send email to your email service
            // 2. Log the lead in your CRM
            // 3. Trigger automated email sequence
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: this.querySelector('input[name="name"]').value,
                email: this.querySelector('input[name="email"]').value,
                phone: this.querySelector('input[name="phone"]').value,
                company: this.querySelector('input[name="company"]').value,
                message: this.querySelector('textarea[name="message"]').value
            };
            
            console.log('Diagnostic Request:', formData);
            alert('Thank you for your diagnostic request! Samuel will contact you within 24 hours.');
            
            // Reset form
            this.reset();
            
            // In production, this would:
            // 1. Send to your email service
            // 2. Add contact to CRM
            // 3. Create task for follow-up
            // 4. Send confirmation email to client
        });
    }

    // Add scroll animations to cards
    const cards = document.querySelectorAll('.service-card, .case-card, .result-card');
    
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                cardObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        cardObserver.observe(card);
    });
});

// Mobile menu toggle (if needed for future enhancement)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Track page analytics events (integrate with your analytics tool)
function trackEvent(eventName, data = {}) {
    if (window.gtag) {
        gtag('event', eventName, data);
    }
    console.log('Event tracked:', eventName, data);
}

// Track CTA clicks
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-link');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            trackEvent('cta_click', {
                cta_text: buttonText,
                button_class: this.className
            });
        });
    });
});
