const texts = ["WELCOME TO MY PORTFOLIO", "I'M AJ CASTILLO", "EXPLORE MY PROJECTS", "PROGRAMMER"];
let index = 0;
const typingText = document.getElementById("typing-text");

function type() {
    typingText.textContent = '';
    let text = texts[index];
    let i = 0;
    
    function typeNext() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeNext, 100); 
        }
    }
    
    typeNext();
    
    setTimeout(() => {
        index = (index + 1) % texts.length;
        setTimeout(type, 1500); 
    }, text.length * 100 + 2000); 
}

type();

function showPopup() {
    document.getElementById('popup-overlay').classList.add('popup-show');
    document.getElementById('popup-content').classList.add('popup-show');
    return false; 
}

function hidePopup() {
    document.getElementById('popup-overlay').classList.remove('popup-show');
    document.getElementById('popup-content').classList.remove('popup-show');
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function showPopup() {
    document.getElementById('popup-overlay').classList.add('popup-show');
    document.getElementById('popup-content').classList.add('popup-show');
    return false; 
}

function hidePopup() {
    document.getElementById('popup-overlay').classList.remove('popup-show');
    document.getElementById('popup-content').classList.remove('popup-show');
}