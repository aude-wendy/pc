// Script for potential future animations or interactive features
document.addEventListener("DOMContentLoaded", function() {
    // Example: Animate buttons on hover (can be expanded for other effects)
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
