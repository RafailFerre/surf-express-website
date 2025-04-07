document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Gallery item hover effects
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        // Preload images for smoother hover effects
        const img = item.querySelector('img');
        if (img) {
            img.style.transition = 'transform 0.5s ease';
        }

        // Add hover effects
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
            this.style.boxShadow = '0 0 20px rgba(48, 101, 246, 0.8)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        });
    });

    // Intersection Observer for gallery items
    const createIntersectionObserver = () => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        document.querySelectorAll('.gallery-item').forEach(item => {
            observer.observe(item);
        });
    };

    // Call the function to set up the observer
    createIntersectionObserver();

    // Hero section animation
    const galleryHero = document.querySelector('.gallery-hero-content');
    if (galleryHero) {
        setTimeout(() => {
            galleryHero.classList.add('visible');
        }, 300);
    }

    // Testimonial hover effects
    const testimonials = document.querySelectorAll('.testimonial-item');
    
    testimonials.forEach(testimonial => {
        testimonial.addEventListener('mouseenter', function() {
            this.querySelector('i').style.color = '#00a5f7';
            this.querySelector('h4').style.color = '#ffffff';
            this.querySelector('p').style.color = '#00a5f7';
        });

        testimonial.addEventListener('mouseleave', function() {
            this.querySelector('i').style.color = '#003feb';
            this.querySelector('h4').style.color = '#000000';
            this.querySelector('p').style.color = '#ffffff';
        });
    });

    // Parallax effect for hero background (if needed)
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const heroSection = document.querySelector('.gallery-hero');
        
        if (heroSection) {
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });

    // Responsive adjustments
    function handleResize() {
        // Adjust gallery grid gap based on screen size
        const galleryGrid = document.querySelector('.gallery-grid');
        if (galleryGrid) {
            if (window.innerWidth < 768) {
                galleryGrid.style.gap = '15px';
            } else {
                galleryGrid.style.gap = '25px';
            }
        }
    }

    // Initial call and event listener for resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Keyboard navigation for gallery items
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('gallery-item')) {
                focusedElement.style.boxShadow = '0 0 0 3px rgba(48, 101, 246, 0.8)';
            }
        }
    });

    // Clean up box shadow when focus leaves
    document.addEventListener('focusout', function(e) {
        if (e.target.classList.contains('gallery-item')) {
            e.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        }
    });
});