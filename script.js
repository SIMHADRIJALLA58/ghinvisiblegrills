/* ==========================
   HERO SLIDER
========================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let slideInterval;

/* ==========================
   SHOW SLIDE FUNCTION
========================== */

function showSlide(index) {

    // Remove active classes
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    // Add active classes
    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}

/* ==========================
   NEXT SLIDE
========================== */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

/* ==========================
   AUTO PLAY
========================== */

function startSlider() {

    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Change every 5 seconds
}

/* ==========================
   RESET AUTO PLAY
========================== */

function resetSlider() {

    clearInterval(slideInterval);
    startSlider();
}

/* ==========================
   DOT NAVIGATION
========================== */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);
        resetSlider();

    });

});


/* ==========================
   TOUCH SWIPE SUPPORT
========================== */

let touchStartX = 0;
let touchEndX = 0;

const hero = document.querySelector(".hero");

hero.addEventListener("touchstart", (e) => {

    touchStartX = e.changedTouches[0].screenX;

});

hero.addEventListener("touchend", (e) => {

    touchEndX = e.changedTouches[0].screenX;

    handleSwipe();

});


function handleSwipe() {

    const swipeDistance = touchStartX - touchEndX;

    // Swipe Left → Next
    if (swipeDistance > 50) {

        nextSlide();
        resetSlider();

    }

    // Swipe Right → Previous
    if (swipeDistance < -50) {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);
        resetSlider();
    }
}


/* ==========================
   PAUSE ON HOVER (DESKTOP)
========================== */

hero.addEventListener("mouseenter", () => {

    clearInterval(slideInterval);

});

hero.addEventListener("mouseleave", () => {

    startSlider();

});


/* ==========================
   INITIALIZE
========================== */

showSlide(currentSlide);
startSlider();






 AOS.init({
        duration: 1000,
        once: true
    });


  document.querySelectorAll(".anr-pro-faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;

      document.querySelectorAll(".anr-pro-faq-item").forEach((el) => {
        if (el !== item) el.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });





const navbar = document.querySelector('.main-navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});




const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {

const btn = item.querySelector(".faq-question");
const ans = item.querySelector(".faq-answer");
const icon = btn.querySelector("i");

btn.addEventListener("click",()=>{

document.querySelectorAll(".faq-answer").forEach(a=>{

if(a!==ans){

a.style.display="none";

a.previousElementSibling.querySelector("i").classList.replace("fa-minus","fa-plus");

}

});

if(ans.style.display==="block"){

ans.style.display="none";

icon.classList.replace("fa-minus","fa-plus");

}else{

ans.style.display="block";

icon.classList.replace("fa-plus","fa-minus");

}

});

});





document.getElementById("quoteForm").addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;

    const phone = document.getElementById("phone").value;

    const service = document.getElementById("service").value;

    const location = document.getElementById("location").value;

    const message = document.getElementById("message").value;

    const whatsappNumber = "919701744317"; // Your WhatsApp Number

    const text =
`*NEW ENQUIRY - GH INVISIBLE GRILL NETS*

👤 Name : ${name}

📞 Mobile : ${phone}

🛠 Service : ${service}

📍 Location : ${location}

📝 Requirement :

${message}`;

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url,"_blank");

    document.getElementById("quoteForm").reset();

});