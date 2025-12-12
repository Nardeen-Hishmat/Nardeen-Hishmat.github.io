/* Current year Copyright */
var yearSpan = document.getElementById("currentYear");
if(yearSpan) {
    yearSpan.innerHTML = new Date().getFullYear();
}

/* Home Page Typing Animation */
var typed = new Typed('.auto-type', {
    strings: [
        '<span style="color:#FF1493;">Nardeen Hishmat</span>', // اسمك
        '<span style="color:#FF1493;">DevOps Engineer</span>',
        '<span style="color:#FF1493;">Cloud Enthusiast</span>',
        '<span style="color:#FF1493;">Automation Geek</span>'
    ],
    typeSpeed: 100,
    backSpeed :50,
    loop : true
});

/* Scroll Logic */
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
                }, 3000);
            });
        });
    });
});

/* Buttons Actions */
if(document.querySelector(".head-fbtn")){
    document.querySelector(".head-fbtn").addEventListener("click", function() {
        window.location.href = "Projects.html";
    });
}

if(document.querySelector(".head-sbtn")){
    document.querySelector(".head-sbtn").addEventListener("click", function() {
        // خليته يفتح لنكد إن بدل الويكي القديم
        window.open("https://www.linkedin.com/in/nardeen-hishmat-ageeb/", "_blank"); 
    });
}