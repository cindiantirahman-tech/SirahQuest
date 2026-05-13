// =========================
// HAMBURGER MENU
// =========================

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// =========================
// CLOSE MENU SAAT LINK DIKLIK
// =========================

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// =========================
// ANIMASI SCROLL
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

  reveals.forEach(item => {

    const windowHeight = window.innerHeight;
    const elementTop = item.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      item.classList.add("active");
    }

  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =========================
// FALLBACK GAMBAR
// =========================

const images = document.querySelectorAll(".image-fallback");

images.forEach(img => {

  img.addEventListener("error", () => {

    img.src =
      "https://via.placeholder.com/600x400?text=Gambar+Belum+Ditambahkan";

  });

});
// =========================
// QUIZ INTERAKTIF
// =========================

function checkAnswer(button, correct){

  if(correct){
    button.style.background = "#8fd694";
    button.innerHTML = "Jawaban Benar ✅";
  } else {
    button.style.background = "#ff9b9b";
    button.innerHTML = "Jawaban Salah ❌";
  }

}
// =========================
// QUIZ INTERAKTIF
// =========================

function checkAnswer(button, correct){

  if(correct){

    button.style.background = "#8fd694";
    button.style.color = "white";

    button.innerHTML = "Jawaban Benar ✅";

  } else {

    button.style.background = "#ff9b9b";
    button.style.color = "white";

    button.innerHTML = "Jawaban Salah ❌";

  }

}

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior:"smooth"
    });

  });

});