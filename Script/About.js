/* زرار الهيدر يفتح صفحة التحميل أو الـ CV */
if(document.querySelector(".nav-btn")) {
    document.querySelector(".nav-btn").addEventListener("click", function() {
        window.open("Nardeen.pdf", "_blank"); // غيري الاسم لو ملف الـ PDF مختلف
    });
}

/* التيرمينال يكتب اسمك */
var typed = new Typed('.whoami', {
    // غيرت اللون لـ Hot Pink عشان يليق ع الثيم
    strings: [
        '<span style="color:#FF1493;"> whoami</span>', 
        '<span style="color:#FF1493;"> Nardeen Hishmat</span>',
        '<span style="color:#FF1493;"> DevOps Engineer</span>'
    ],
    typeSpeed: 100,
    backSpeed :50,
    loop : true
});

// كود السكرول والوميض (زي ما هو شغال تمام)
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
                }, 10000); 
            }); 
        });
    });
});