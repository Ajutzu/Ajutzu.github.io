document.addEventListener('DOMContentLoaded', () => {
    const light = document.querySelector('.cursor-light');
    
    document.addEventListener('mousemove', (e) => {
        if (light) {
            light.style.left = e.pageX + 'px';
            light.style.top = e.pageY + 'px';
        }
    });
});