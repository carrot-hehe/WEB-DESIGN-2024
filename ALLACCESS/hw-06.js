  document.addEventListener("DOMContentLoaded", function () {
      const elements = document.querySelectorAll(".fade-in");
      function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      function handleScroll() {
        elements.forEach(function (element) {
          if (isInViewport(element)) {
            element.classList.add("visible");
          }
        });
      }
  
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    });
  
  function typeWriterEffect(element, text, speed) {
      element.innerHTML = "";
    
      let i = 0;
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      type();
    }
    
    const welcomeParagraph = document.querySelector(".welcome p");
    typeWriterEffect(
      welcomeParagraph,
      "Mời bạn ghé thăm gian hàng đầy đồ xinh và thật nhiều tình yêu của oula ~"
      ,
      50
    );
    