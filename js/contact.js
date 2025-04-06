document.addEventListener('DOMContentLoaded', function() {
    // Animation trigger on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.contact-hero-content, .contact-info-block');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible'); // Changed from 'animate' to 'visible'
            } else {
                element.classList.remove('visible'); // Optional: remove if scrolling back up
            }
        });
    };

    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Touch device support
    const contactItems = document.querySelectorAll('.contact-info-block');
    contactItems.forEach(item => {
        item.addEventListener('touchstart', function() {
            this.classList.add('hover-effect');
            this.style.transform = 'scale(1.1) translateY(0)'; // Force scale on touch
        });
        
        item.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('hover-effect');
                this.style.transform = 'translateY(0)'; // Reset if not hovering
            }, 500);
        });
    });
});