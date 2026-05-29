// SIMPLE SCROLL ANIMATION

const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

});

// INITIAL STATE

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";
});

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const words = [
  "modern websites.",
  
];

let wordIndex = 0;
let charIndex = 0;

const typing = document.querySelector(".typing");

function type() {

  if(charIndex < words[wordIndex].length){
    typing.textContent += words[wordIndex][charIndex];
    charIndex++;

    setTimeout(type, 80);

  } else {

    setTimeout(erase, 100000);
  }
}

function erase(){

  if(charIndex > 0){

    typing.textContent =
      words[wordIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(erase, 40);

  } else {

    wordIndex++;

    if(wordIndex >= words.length){
      wordIndex = 0;
    }

    setTimeout(type, 300);
  }
}

type();

const elements = document.querySelectorAll(".project-card, .section-title");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
});

elements.forEach(el => observer.observe(el));

document.querySelectorAll(".project-card").forEach(card => {

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });

});
