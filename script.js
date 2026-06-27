document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    // Header scroll effect & Active Nav Link highlighting
    window.addEventListener("scroll", () => {
        let current = "";
        
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

    // Intersection Observer for scroll animations (fade in)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target); // Unobserve after animation occurs once
            }
        });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach(element => {
        observer.observe(element);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Form submission simulation
    document.getElementById("contact-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Sending...';
        btn.style.opacity = '0.7';
        btn.style.pointerEvents = 'none';
        
        setTimeout(() => {
            btn.innerText = 'Inquiry Sent';
            btn.style.backgroundColor = '#1a1a1a';
            btn.style.opacity = '1';
            e.target.reset();
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
                btn.style.pointerEvents = 'auto';
            }, 3000);
        }, 1500);
    });
    
    // Initial check for elements in viewport on load
    setTimeout(() => {
        document.querySelectorAll(".fade-in").forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add("appear");
            }
        });
    }, 100);
});
