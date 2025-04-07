// Services page animations and functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero section animation
    const servicesHeroContent = document.querySelector('.services-hero-content');
    
    // Make hero content visible after short delay
    setTimeout(() => {
        servicesHeroContent.classList.add('visible');
    }, 300);

    // Animate service cards when they come into view
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceAreas = document.querySelector('.service-areas');
    
    const animateOnScroll = () => {
        // Check service cards
        serviceCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.classList.add('visible');
            }
        });
        
        // Check service areas
        const areasPosition = serviceAreas.getBoundingClientRect().top;
        if (areasPosition < window.innerHeight / 1.3) {
            serviceAreas.classList.add('visible');
        }
    };

    // Initial check in case elements are already visible
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);

    // Add hover effects to service cards programmatically
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.service-icon i');
            icon.style.transform = 'rotate(15deg) scale(1.2)';
            icon.style.color = '#00a5f7';
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.service-icon i');
            icon.style.transform = '';
            icon.style.color = '#4fc3f7';
        });
    });
});