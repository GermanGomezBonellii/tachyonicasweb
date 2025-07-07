
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.hollow-button');
    buttons.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            btn.style.transform = 'scale(1.05)';
        });
        btn.addEventListener('mouseout', () => {
            btn.style.transform = 'scale(1)';
        });
    });
});
