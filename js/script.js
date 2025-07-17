// Enhanced Portfolio JavaScript - Fixed Version

// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const loadingOverlay = document.querySelector('.loading-overlay');

// Global variables
let lastScrollTop = 0;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeLoading();
    initializeNavbar();
    initializeScrollAnimations();
    initializeTypingEffect();
    initializeContactForm();
    initializeBackToTop();
});

// Loading animation
function initializeLoading() {
    setTimeout(() => {
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
        }
    }, 1500);
}

// Navbar functionality
function initializeNavbar() {
    // Scroll effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        if (scrolled > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollTop = scrolled;
    });

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.about-text, .stat-item, .skill-item, .project-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });

    // Animate skill progress bars
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const percentage = entry.target.dataset.percentage || '90';
                entry.target.style.width = percentage + '%';
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Typing effect for hero section
function initializeTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;

    const text = typingText.textContent;
    typingText.textContent = '';
    typingText.style.opacity = '1';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 1000);
}

// Contact form handling
// Enhanced Contact Form with Modern Animations
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    const submitButton = document.querySelector('.contact-submit');
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

    if (!contactForm || !submitButton) return;

    // Add validation icons to form groups
    formInputs.forEach(input => {
        const formGroup = input.closest('.form-group');
        if (!formGroup.querySelector('.validation-icon')) {
            const validationIcon = document.createElement('div');
            validationIcon.className = 'validation-icon';
            formGroup.appendChild(validationIcon);
        }
    });

    // Real-time validation
    formInputs.forEach(input => {
        input.addEventListener('input', function () {
            validateField(this);
        });

        input.addEventListener('blur', function () {
            validateField(this);
        });

        // Enhanced focus animations
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            this.parentElement.classList.remove('focused');
        });
    });

    // Form submission with enhanced animations
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name')?.trim();
        const email = formData.get('email')?.trim();
        const message = formData.get('message')?.trim();
        const phone = formData.get('phone')?.trim();

        // Validate all fields
        let isValid = true;
        formInputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            showFormMessage(getTranslation('form-validation-error'), 'error');
            shakeForm();
            return;
        }

        // Start loading state
        setSubmitLoading(true);

        try {
            // Simulate API call
            await simulateFormSubmission({ name, email, message, phone });

            // Success state
            showFormMessage(getTranslation('form-success-message'), 'success');
            contactForm.reset();
            clearValidationStates();

        } catch (error) {
            showFormMessage(getTranslation('form-error-message'), 'error');
        } finally {
            setSubmitLoading(false);
        }
    });
}

function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    const isRequired = field.hasAttribute('required');

    let isValid = true;
    let errorMessage = '';

    // Required field validation
    if (isRequired && !value) {
        isValid = false;
        errorMessage = getTranslation('field-required');
    }

    // Email validation
    else if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = getTranslation('email-invalid');
        }
    }

    // Phone validation (optional but if filled, should be valid)
    else if (fieldType === 'tel' && value) {
        const phoneRegex = /^(\+62|62|0)[0-9]{9,13}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
            isValid = false;
            errorMessage = getTranslation('phone-invalid');
        }
    }

    // Message length validation
    else if (field.name === 'message' && value && value.length < 10) {
        isValid = false;
        errorMessage = getTranslation('message-too-short');
    }

    // Update field appearance
    updateFieldValidation(field, isValid, errorMessage);

    return isValid;
}

function updateFieldValidation(field, isValid, errorMessage = '') {
    const formGroup = field.closest('.form-group');

    // Remove existing error message
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Update field classes
    field.classList.remove('valid', 'invalid');

    if (field.value.trim()) {
        if (isValid) {
            field.classList.add('valid');
        } else {
            field.classList.add('invalid');

            // Add error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = errorMessage;
            errorDiv.style.cssText = `
                color: #ef4444;
                font-size: 0.85rem;
                margin-top: 0.5rem;
                opacity: 0;
                transform: translateY(-10px);
                transition: all 0.3s ease;
            `;
            formGroup.appendChild(errorDiv);

            // Animate error message
            setTimeout(() => {
                errorDiv.style.opacity = '1';
                errorDiv.style.transform = 'translateY(0)';
            }, 10);
        }
    }
}

function setSubmitLoading(loading) {
    const submitButton = document.querySelector('.contact-submit');
    const submitText = submitButton.querySelector('.submit-text');

    if (loading) {
        submitButton.classList.add('loading');
        submitButton.disabled = true;
        if (submitText) {
            submitText.textContent = getTranslation('form-sending');
        }
    } else {
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
        if (submitText) {
            submitText.textContent = getTranslation('form-submit');
        }
    }
}

// Helper function to get translations
function getTranslation(key) {
    const currentLang = window.languageManager ? window.languageManager.getCurrentLanguage() : 'id';
    return languages[currentLang] && languages[currentLang][key] ? languages[currentLang][key] : key;
}

function showFormMessage(text, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const contactForm = document.querySelector('.contact-form');
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.innerHTML = text;

    contactForm.appendChild(messageDiv);

    // Animate in
    setTimeout(() => {
        messageDiv.classList.add('show');
    }, 10);

    // Auto hide after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.classList.remove('show');
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 400);
        }
    }, 5000);
}

function shakeForm() {
    const contactForm = document.querySelector('.contact-form');
    contactForm.style.animation = 'none';
    setTimeout(() => {
        contactForm.style.animation = 'invalidShake 0.5s ease';
    }, 10);

    setTimeout(() => {
        contactForm.style.animation = '';
    }, 500);
}

function clearValidationStates() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.classList.remove('valid', 'invalid');
        const errorMessage = input.closest('.form-group').querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    });
}

async function simulateFormSubmission(data) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulate occasional network error for demo
    if (Math.random() < 0.1) {
        throw new Error('Network error');
    }

    // Log form data (in real app, this would be sent to server)
    console.log('Form submitted:', data);

    return { success: true };
}

// Add enhanced interactions and typing indicators
function addEnhancedInteractions() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

    formInputs.forEach(input => {
        let typingTimer;

        // Typing indicator
        input.addEventListener('input', function () {
            const formGroup = this.closest('.form-group');
            formGroup.classList.add('typing');

            clearTimeout(typingTimer);
            typingTimer = setTimeout(() => {
                formGroup.classList.remove('typing');
            }, 1000);
        });

        // Enhanced focus/blur effects
        input.addEventListener('focus', function () {
            this.closest('.form-group').classList.add('focused');
            addFocusRipple(this);
        });

        input.addEventListener('blur', function () {
            this.closest('.form-group').classList.remove('focused', 'typing');
        });
    });
}

function addFocusRipple(element) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(139, 92, 246, 0.3);
        width: 10px;
        height: 10px;
        pointer-events: none;
        animation: rippleEffect 0.6s linear;
        z-index: 1;
    `;

    const rect = element.getBoundingClientRect();
    ripple.style.left = rect.width / 2 + 'px';
    ripple.style.top = rect.height / 2 + 'px';

    element.style.position = 'relative';
    element.appendChild(ripple);

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleEffect {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(4);
                opacity: 0;
            }
        }
    `;

    if (!document.querySelector('#ripple-styles')) {
        style.id = 'ripple-styles';
        document.head.appendChild(style);
    }

    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.remove();
        }
    }, 600);
}

// Call enhanced interactions in the initialization
document.addEventListener('DOMContentLoaded', function () {
    initializeLoading();
    initializeNavbar();
    initializeScrollAnimations();
    initializeTypingEffect();
    initializeContactForm();
    addEnhancedInteractions(); // Add this new function
    initializeBackToTop();
});
function showMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;

    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: #10b981;' : 'background: #ef4444;'}
    `;

    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        messageDiv.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 300);
    }, 3000);
}

// Back to top button
function initializeBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling for all anchor links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effects to cards
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.stat-item, .skill-item, .project-card')) {
        const card = e.target.closest('.stat-item, .skill-item, .project-card');
        card.style.transform = 'translateY(-5px)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.stat-item, .skill-item, .project-card')) {
        const card = e.target.closest('.stat-item, .skill-item, .project-card');
        card.style.transform = 'translateY(0)';
    }
});

// Mobile menu animations
const hamburgerBars = document.querySelectorAll('.bar');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburgerBars.forEach((bar, index) => {
            if (hamburger.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(6px, 6px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    });
}
