// Flashlight Hover First Section
document.addEventListener('DOMContentLoaded', () => {
    const light = document.querySelector('.cursor-light');
    
    document.addEventListener('mousemove', (e) => {
        if (light) {
            light.style.left = e.pageX + 'px';
            light.style.top = e.pageY + 'px';
        }
    });
});

// Dowload CV
function downloadCV() {
    const cvPath = 'assets/cv.pdf';
    
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'AJ_Castillo_CV.pdf'; 
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// Prevent Context Menu
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener('keydown', (e) => {
  if (
      e.key === 'F12' || 
      (e.ctrlKey && e.shiftKey && e.key === 'I') || 
      (e.ctrlKey && e.shiftKey && e.key === 'J') || 
      (e.ctrlKey && e.key === 'U')
  ) {
      e.preventDefault();
  }
});

// Prevent Ctrl+U
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'U') {
      e.preventDefault();
  }
});