var ID = 1;

/* Typed JS Title */
window.onload = function() {
    var title = document.getElementById("pageTitle");
    // إضافة صورتك كأيقونة
    /* var img = document.createElement("img");
    img.src = "https://github.com/Nardeen-Hishmat.png";
    img.className = "page-icon";
    if(title) title.insertBefore(img, title.firstChild); */

    // الكتابة المتحركة
    var typed = new Typed(".auto-type-projects", {
        strings: ["My Projects", "Cloud Infrastructure", "CI/CD Pipelines", "Automation Scripts"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
};

/* Links Configuration - نضفت الروابط القديمة */

/* زرار Visit Repo الرئيسي */
if(document.querySelector("#visit")) {
    document.querySelector("#visit").addEventListener("click", function() {
        window.open("https://github.com/Nardeen-Hishmat?tab=repositories", "_blank");
    });
}

/* باقي الزراير تفتح بروفايل جيت هب مؤقتاً لحد ما يكون ليهم مشاريع محددة */
if(document.querySelector("#src-code")) {
    document.querySelector("#src-code").addEventListener("click", function() {
        window.open("https://github.com/Nardeen-Hishmat/Nardeen-Hishmat.github.io", "_blank");
    });
}

/* JQuery for Tabs - سبت اللوجيك عشان التابات تقلب */
$(document).ready(function(){
    $('.Download-button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var filter = $(this).attr('id'); 
        $('.content-download').removeClass('active');
        $('#' + filter + '-cont').addClass('active');
    });
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