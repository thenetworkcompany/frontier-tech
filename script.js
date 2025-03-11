document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers for navigation items
    document.querySelectorAll('.nav-item:not(.disabled)').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const href = item.getAttribute('href');
            
            // Add exit animation
            document.body.style.opacity = 0;
            document.body.style.transform = 'translateY(-20px)';
            document.body.style.transition = 'all 0.3s ease';
            
            // Navigate after animation
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
});
