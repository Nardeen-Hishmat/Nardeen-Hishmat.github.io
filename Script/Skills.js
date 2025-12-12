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

window.onload = function() {
    /* Code to add image near title if needed (Commented out to keep clean) */
    /* var title = document.getElementById("pageTitle");
    var img = document.createElement("img");
    if(title) title.insertBefore(img, title.firstChild); */

    // Typing Animation
    var typed = new Typed(".auto-type-skills", {
        strings: ["Technical Skills", "DevOps Tools", "Cloud Platforms"], 
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
};