document.addEventListener('DOMContentLoaded', () => {
    const light = document.querySelector('.cursor-light');
    
    document.addEventListener('mousemove', (e) => {
        if (light) {
            light.style.left = e.pageX + 'px';
            light.style.top = e.pageY + 'px';
        }
    });
});

function downloadCV() {
    const cvPath = 'AJ-Resume.pdf';
    
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'AJ_Castillo_CV.pdf'; 
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}