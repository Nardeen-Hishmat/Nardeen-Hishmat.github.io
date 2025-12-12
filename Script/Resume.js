document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Resume page loaded');
});

window.onload = function() {
    // إضافة الصورة بجانب العنوان
    var title = document.getElementById("pageTitle");
    /* var img = document.createElement("img");
    img.src = "https://github.com/Nardeen-Hishmat.png"; 
    img.className = "page-icon";
    if(title) title.insertBefore(img, title.firstChild); */

    // الكتابة المتحركة
    var typed = new Typed(".auto-type-resume", {
        strings: ["My Resume", "Education", "Experience", "Certifications"], 
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
};

// Scroll Logic
document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('.go-commun');
    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSections = document.querySelectorAll(".icon-cy");
            targetSections.forEach(targetSection => {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                targetSection.classList.add('flashing');
                setTimeout(() => {
                    targetSection.classList.remove('flashing');
                }, 5000);
            });
        });
    });
});