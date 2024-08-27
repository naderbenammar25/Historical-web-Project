document.addEventListener("DOMContentLoaded", function() {
    gsap.to(".titre", {
        opacity: 1,
        translateY: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: function() {
            
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.to("nav a", {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
        stagger: 0.2, 
        onComplete: function() {
            
        }
    });
});


let currentIndex = 0;
const intervalTime = 4000; // 4 seconds

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  index = (index + totalSlides) % totalSlides;
  const translateValue = -index * 100 + '%';
  slides.style.transform = `translateX(${translateValue})`;
  currentIndex = index;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// Ajoutez cette fonction pour changer automatiquement les diapositives
function startSlider() {
  setInterval(() => {
    nextSlide();
  }, intervalTime);
}

// Démarrez le slider automatique lorsque la page est chargée
document.addEventListener('DOMContentLoaded', startSlider);



document.addEventListener("DOMContentLoaded", function() {
  const backToTopButton = document.getElementById("back-to-top-btn");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});






const box = document.querySelector('.p_container');
const boxRect = box.getBoundingClientRect();

box.addEventListener('mousemove', (e) => {
  const xPosition = (e.clientX - boxRect.left) / boxRect.width;
  const yPosition = (e.clientY - boxRect.top) / boxRect.height - 0.2;
  const xOffset = -(xPosition - 0.2);
  const dxNorm = Math.min(Math.max(xOffset, -0.2), 0.2);
  box.style.transform = `perspective(1000px) rotateY(${
    dxNorm * 45
  }deg) rotateX(${yPosition * 45}deg)`;
});

box.addEventListener('mouseleave', () => {
  box.style.transform = 'none';
});

















function toggleDropdown() {
  var dropdown = document.getElementById("langDropdown");
  dropdown.style.display = (dropdown.style.display === "none") ? "flex" : "none";
}
