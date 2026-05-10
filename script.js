document.addEventListener('DOMContentLoaded', () => {
    // 0. Theme Toggle Logic
    const themeSwitches = document.querySelectorAll('.theme-toggle input');
    
    // Check local storage for theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeSwitches.forEach(sw => sw.checked = true);
    }
    
    themeSwitches.forEach(themeSwitch => {
        themeSwitch.addEventListener('change', function(e) {
            if (e.target.checked) {
                document.body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
                // Sync other switches if multiple exist
                themeSwitches.forEach(sw => sw.checked = true);
            } else {
                document.body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
                // Sync other switches
                themeSwitches.forEach(sw => sw.checked = false);
            }
        });
    });

    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle icon (hamburger to close)
            const svg = mobileMenuBtn.querySelector('svg');
            if (navLinks.classList.contains('active')) {
                svg.innerHTML = `
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                `;
            } else {
                svg.innerHTML = `
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                `;
            }
        });
    }

    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const svg = mobileMenuBtn.querySelector('svg');
                svg.innerHTML = `
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                `;
            }
        });
    });

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(11, 15, 25, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
        } else {
            navbar.style.background = 'rgba(11, 15, 25, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. Intersection Observer for Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Contact Form Submission → mailto:support@mazeart.co.in
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const company = document.getElementById('company').value.trim();
            const message = document.getElementById('message').value.trim();

            const subject = encodeURIComponent(`Website Inquiry from ${name}${company ? ' — ' + company : ''}`);
            const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`
            );

            window.location.href = `mailto:support@mazeart.co.in?subject=${subject}&body=${body}`;

            // Show success state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Opening email client...';
            submitBtn.disabled = true;

            setTimeout(() => {
                formSuccess.classList.remove('hidden');
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // 5. Command Center Dashboard Interaction (Optional touch of life)
    const ccCards = document.querySelectorAll('.cc-card');
    setInterval(() => {
        // Randomly pulse a card's border or icon to simulate activity
        if (ccCards.length > 0) {
            const randomCardIndex = Math.floor(Math.random() * ccCards.length);
            const card = ccCards[randomCardIndex];
            
            card.style.transform = 'scale(1.02)';
            card.style.borderColor = 'var(--color-accent-1)';
            
            setTimeout(() => {
                card.style.transform = 'scale(1)';
                card.style.borderColor = 'var(--border-color)';
            }, 300);
        }
    }, 3000);
});
