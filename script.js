/* ============================================
   IRON FORGE - Premium Gym Website
   Complete JavaScript Functionality
   Version: 1.0.0
   ============================================ */

// ============================================
// DATA
// ============================================

// Classes Data
const classesData = [
    { id: 1, name: "Body Building", time: "Mon/Wed/Fri - 9:00 AM", duration: "60 min", desc: "Build muscle mass and increase strength with intensive weight training.", icon: "fas fa-dumbbell" },
    { id: 2, name: "Yoga Flow", time: "Tue/Thu - 8:00 AM", duration: "75 min", desc: "Improve flexibility, reduce stress, and find inner peace.", icon: "fas fa-praying-hands" },
    { id: 3, name: "HIIT Training", time: "Mon/Wed/Fri - 6:00 PM", duration: "45 min", desc: "High-intensity interval training for maximum calorie burn.", icon: "fas fa-bolt" },
    { id: 4, name: "Spin Class", time: "Tue/Thu - 7:00 PM", duration: "50 min", desc: "Energetic indoor cycling with motivating music.", icon: "fas fa-bicycle" },
    { id: 5, name: "CrossFit", time: "Mon/Wed/Fri - 5:00 PM", duration: "60 min", desc: "Functional fitness combining weightlifting, cardio, and gymnastics.", icon: "fas fa-running" },
    { id: 6, name: "Zumba Dance", time: "Sat/Sun - 10:00 AM", duration: "60 min", desc: "Fun, energetic dance workout set to Latin rhythms.", icon: "fas fa-music" }
];

// Trainers Data
const trainersData = [
    { id: 1, name: "Mike Thompson", specialty: "Body Building & Strength", bio: "15+ years experience. Former competitive bodybuilder.", icon: "fas fa-user-circle" },
    { id: 2, name: "Jessica Chen", specialty: "Yoga & Pilates", bio: "Certified yoga instructor with expertise in therapeutic yoga.", icon: "fas fa-user-circle" },
    { id: 3, name: "David Rodriguez", specialty: "HIIT & CrossFit", bio: "CrossFit Level 4 trainer. Marathon runner.", icon: "fas fa-user-circle" },
    { id: 4, name: "Sarah Williams", specialty: "Zumba & Cardio", bio: "International Zumba instructor. Dance fitness specialist.", icon: "fas fa-user-circle" }
];

// Pricing Data
const pricingData = [
    { id: 1, name: "Basic", price: 49, period: "month", features: ["Gym access 5am-11pm", "Locker room access", "Free parking", "Basic equipment"], icon: "fas fa-user", popular: false },
    { id: 2, name: "Premium", price: 89, period: "month", features: ["24/7 Gym access", "All group classes", "Personalized workout plan", "Locker & towel service"], icon: "fas fa-crown", popular: true },
    { id: 3, name: "Elite", price: 149, period: "month", features: ["Everything in Premium", "1-on-1 personal training", "Spa & sauna access", "Guest passes (4/month)"], icon: "fas fa-star", popular: false }
];

// Testimonials Data
const testimonialsData = [
    { id: 1, text: "IRON FORGE completely transformed my life. In just 6 months, I lost 30 pounds and gained so much confidence!", name: "Sarah Johnson", role: "Member since 2023", img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { id: 2, text: "Best gym I've ever been to! The equipment is top-notch, and the community is incredibly supportive.", name: "Michael Brown", role: "Member since 2022", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 3, text: "The yoga classes with Jessica have changed my life. I've never felt more flexible and at peace.", name: "Emily Wilson", role: "Member since 2024", img: "https://randomuser.me/api/portraits/women/45.jpg" }
];

// ============================================
// DOM ELEMENTS
// ============================================

const loaderWrapper = document.getElementById('loaderWrapper');
const header = document.getElementById('header');
const backToTop = document.getElementById('backToTop');
const mobileToggle = document.getElementById('mobileToggle');
const mobileNav = document.getElementById('mobileNav');
const closeMobile = document.getElementById('closeMobile');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');
const classesGrid = document.getElementById('classesGrid');
const trainersGrid = document.getElementById('trainersGrid');
const pricingGrid = document.getElementById('pricingGrid');
const testimonialsSlider = document.getElementById('testimonialsSlider');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Show Toast Notification
function showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Format Price
function formatPrice(price) {
    return `$${price}`;
}

// ============================================
// RENDER FUNCTIONS
// ============================================

// Render Classes
function renderClasses() {
    if (!classesGrid) return;
    
    classesGrid.innerHTML = classesData.map(cls => `
        <div class="class-card" data-id="${cls.id}">
            <div class="class-image">
                <i class="${cls.icon}"></i>
            </div>
            <div class="class-info">
                <h3 class="class-title">${cls.name}</h3>
                <div class="class-time"><i class="far fa-clock"></i> ${cls.time} | ${cls.duration}</div>
                <p class="class-desc">${cls.desc}</p>
                <a href="#contact" class="class-link">Join Class <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
    
    // Add click handler to class cards
    document.querySelectorAll('.class-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.class-link')) {
                const name = this.querySelector('.class-title')?.textContent;
                if (name) showToast(`Check availability for ${name} class`);
            }
        });
    });
}

// Render Trainers
function renderTrainers() {
    if (!trainersGrid) return;
    
    trainersGrid.innerHTML = trainersData.map(trainer => `
        <div class="trainer-card" data-id="${trainer.id}">
            <div class="trainer-image">
                <i class="${trainer.icon}"></i>
            </div>
            <h3 class="trainer-name">${trainer.name}</h3>
            <div class="trainer-specialty">${trainer.specialty}</div>
            <p class="trainer-bio">${trainer.bio}</p>
        </div>
    `).join('');
    
    // Add click handler to trainer cards
    document.querySelectorAll('.trainer-card').forEach(card => {
        card.addEventListener('click', function() {
            const name = this.querySelector('.trainer-name')?.textContent;
            if (name) showToast(`Book a session with ${name}`);
        });
    });
}

// Render Pricing
function renderPricing() {
    if (!pricingGrid) return;
    
    pricingGrid.innerHTML = pricingData.map(plan => `
        <div class="pricing-card ${plan.popular ? 'popular' : ''}">
            ${plan.popular ? '<div class="popular-badge">🔥 MOST POPULAR</div>' : ''}
            <div class="pricing-icon"><i class="${plan.icon}"></i></div>
            <h3 class="pricing-title">${plan.name}</h3>
            <div class="pricing-price">${formatPrice(plan.price)}<span>/${plan.period}</span></div>
            <ul class="pricing-features">
                ${plan.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
            </ul>
            <button class="btn btn-primary choose-plan" data-plan="${plan.name}">Choose Plan →</button>
        </div>
    `).join('');
    
    // Add click handler to plan buttons
    document.querySelectorAll('.choose-plan').forEach(btn => {
        btn.addEventListener('click', function() {
            const planName = this.getAttribute('data-plan');
            showToast(`You selected the ${planName} plan! We'll contact you soon.`);
        });
    });
}

// Render Testimonials
function renderTestimonials() {
    if (!testimonialsSlider) return;
    
    // Show first testimonial
    const t = testimonialsData[0];
    testimonialsSlider.innerHTML = `
        <div class="testimonial-card">
            <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
            <p>"${t.text}"</p>
            <div class="member-info">
                <img src="${t.img}" alt="${t.name}">
                <div>
                    <h4>${t.name}</h4>
                    <span>${t.role}</span>
                </div>
            </div>
        </div>
    `;
    
    // Auto-rotate testimonials
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonialsData.length;
        const t = testimonialsData[currentIndex];
        testimonialsSlider.innerHTML = `
            <div class="testimonial-card">
                <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                <p>"${t.text}"</p>
                <div class="member-info">
                    <img src="${t.img}" alt="${t.name}">
                    <div>
                        <h4>${t.name}</h4>
                        <span>${t.role}</span>
                    </div>
                </div>
            </div>
        `;
    }, 5000);
}

// ============================================
// SCROLL FUNCTIONS
// ============================================

// Handle Scroll
function handleScroll() {
    // Header shadow
    if (window.scrollY > 100) {
        header?.classList.add('scrolled');
        backToTop?.classList.add('visible');
    } else {
        header?.classList.remove('scrolled');
        backToTop?.classList.remove('visible');
    }
    
    // Active nav link
    const sections = document.querySelectorAll('section');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Smooth Scroll
function smoothScroll(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu
        mobileNav?.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// ANIMATION FUNCTIONS
// ============================================

// Animate Numbers
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        element.textContent = target;
                        clearInterval(timer);
                    } else {
                        element.textContent = Math.floor(current);
                    }
                }, 30);
                
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(num => observer.observe(num));
}

// Scroll Reveal Animation
function initScrollReveal() {
    const elements = document.querySelectorAll('.class-card, .trainer-card, .pricing-card, .about-content, .contact-card, .contact-form');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileNav?.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeMobile) {
        closeMobile.addEventListener('click', () => {
            mobileNav?.classList.remove('open');
            document.body.style.overflow = '';
        });
    }
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            smoothScroll(href);
        });
    });
    
    // Close mobile nav on outside click
    document.addEventListener('click', (e) => {
        if (mobileNav?.classList.contains('open')) {
            if (!mobileNav.contains(e.target) && !mobileToggle?.contains(e.target)) {
                mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            }
        }
    });
}

// ============================================
// FORMS
// ============================================

function initForms() {
    // Contact Form
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const message = document.getElementById('message')?.value.trim();
            
            if (!name || !email || !message) {
                showToast('Please fill in all required fields');
                return;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                showToast('Please enter a valid email address');
                return;
            }
            
            showToast(`Thank you ${name}! We'll get back to you within 24 hours.`);
            contactForm.reset();
        });
    }
    
    // Newsletter Form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input')?.value.trim();
            
            if (!email || !email.includes('@')) {
                showToast('Please enter a valid email address');
                return;
            }
            
            showToast('Subscribed successfully! Check your inbox.');
            newsletterForm.reset();
        });
    }
}

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            smoothScroll(href);
        });
    });
}

// ============================================
// LOADING SCREEN
// ============================================

function initLoader() {
    setTimeout(() => {
        loaderWrapper?.classList.add('hidden');
    }, 1500);
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Escape key closes mobile menu
        if (e.key === 'Escape' && mobileNav?.classList.contains('open')) {
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================

function init() {
    // Render dynamic content
    renderClasses();
    renderTrainers();
    renderPricing();
    renderTestimonials();
    
    // Initialize features
    initLoader();
    initMobileMenu();
    initNavigation();
    initForms();
    initKeyboardShortcuts();
    animateNumbers();
    initScrollReveal();
    
    // Event listeners
    window.addEventListener('scroll', handleScroll);
    backToTop?.addEventListener('click', scrollToTop);
    
    // Console branding
    console.log('%c💪 IRON FORGE | Premium Gym & Fitness Center', 'color: #e63946; font-size: 16px; font-weight: bold;');
    console.log('%c🔥 Transform Your Body. Transform Your Life.', 'color: #ffd700; font-size: 12px;');
}

// Start app on DOM ready
document.addEventListener('DOMContentLoaded', init);