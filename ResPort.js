// Animate circular progress on load
window.addEventListener("DOMContentLoaded", () => {
  // Animate technical skill bars once
  document.querySelectorAll(".bar").forEach(bar => {
    const percent = bar.getAttribute("data-percent");
    bar.style.width = percent;
  });

  // Create professional circular progress bars
  document.querySelectorAll(".circle").forEach(circle => {
    const percent = circle.getAttribute("data-percent");
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100");
    svg.setAttribute("height", "100");

    const bgCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    bgCircle.setAttribute("cx", "50");
    bgCircle.setAttribute("cy", "50");
    bgCircle.setAttribute("r", radius);
    bgCircle.setAttribute("stroke", "#222");
    bgCircle.setAttribute("stroke-width", "8");
    bgCircle.setAttribute("fill", "none");

    const fgCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    fgCircle.setAttribute("cx", "50");
    fgCircle.setAttribute("cy", "50");
    fgCircle.setAttribute("r", radius);
    fgCircle.setAttribute("stroke", "#00f0ff");
    fgCircle.setAttribute("stroke-width", "8");
    fgCircle.setAttribute("fill", "none");
    fgCircle.setAttribute("stroke-dasharray", circumference);
    fgCircle.setAttribute("stroke-dashoffset", circumference - (percent / 100) * circumference);
    fgCircle.setAttribute("transform", "rotate(-90 50 50)");

    svg.appendChild(bgCircle);
    svg.appendChild(fgCircle);
    circle.appendChild(svg);
  });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been submitted.");
  this.reset();
});


  // Typing effect
  const typedText = document.querySelector('h3 span');
  const words = ['Front-end Developer', 'UI/UX Designer'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      charIndex--;
      typedText.textContent = currentWord.substring(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 300);
      } else {
        setTimeout(type, 50);
      }
    } else {
      charIndex++;
      typedText.textContent = currentWord.substring(0, charIndex);
      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else {
        setTimeout(type, 100);
      }
    }
  }

  if (typedText) type();

