(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelector(".header-logo");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    // === logo change
    if (ud_header.classList.contains("sticky")) {
      logo.src = "/images/logo/logo-blue-go.png";
    } else {
      logo.src = "/images/logo/logo-white-go.png";

    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  //----------------------------------------------------------------



  // ===== responsive navbar
  let navbarToggler = document.querySelector("#navbarToggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("navbarTogglerActive");
    navbarCollapse.classList.toggle("hidden");
  });

  //===== close navbar-collapse when a  clicked
  document
    .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
    .forEach((e) =>
      e.addEventListener("click", () => {
        navbarToggler.classList.remove("navbarTogglerActive");
        navbarCollapse.classList.add("hidden");
      })
    );

  // ===== Sub-menu
  const submenuItems = document.querySelectorAll(".submenu-item");
  submenuItems.forEach((el) => {
    el.querySelector("a").addEventListener("click", () => {
      el.querySelector(".submenu").classList.toggle("hidden");
    });
  });

  // ===== Faq accordion
  const faqs = document.querySelectorAll(".single-faq");
  faqs.forEach((el) => {
    const faqBtn = el.querySelector(".faq-btn");
    const icon = el.querySelector(".icon");
    const faqContent = el.querySelector(".faq-content");

    faqBtn.addEventListener("mouseenter", () => {
      icon.classList.add("rotate-180");
      faqContent.classList.add("show");
    });

    faqBtn.addEventListener("mouseleave", () => {
      icon.classList.remove("rotate-180");
      faqContent.classList.remove("show");
    });
  });
  //================ Troca de texto


  document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");

    const texts = [
      {
        title: "Desfrute da melhor experiência online",
        subtitle: "A ultravelocidade que você merece!"
      },
      {
        title: "Tecnologia é ter conexão mais rápida.",
        subtitle: "E maior cobertura."
      },
      {
        title: "Internet rápida como nunca",
        subtitle: "Aproveite o melhor da tecnologia"
      },
      {
        title: "Navegação sem limites",
        subtitle: "Conecte-se com o mundo"
      }
    ];

    let index = 0;
    let charIndex = 0;
    let typingInterval;

    function typeText(element, text, callback) {
      if (charIndex < text.length) {
        element.innerHTML += text.charAt(charIndex);
        charIndex++;
        typingInterval = setTimeout(() => typeText(element, text, callback), 30);
      } else {
        callback();
      }
    }

    function eraseText(element, callback) {
      if (charIndex > 0) {
        element.innerHTML = element.innerHTML.slice(0, -3);
        charIndex--;
        typingInterval = setTimeout(() => eraseText(element, callback), 30);
      } else {
        callback();
      }
    }

    function changeText() {
      eraseText(title, () => {
        title.classList.add('typing');
        charIndex = 0;
        typeText(title, texts[index].title, () => {
          title.classList.remove('typing');
          eraseText(subtitle, () => {
            subtitle.classList.add('typing');
            charIndex = 0;
            typeText(subtitle, texts[index].subtitle, () => {
              subtitle.classList.remove('typing');
              index = (index + 1) % texts.length;
              setTimeout(changeText, 8000); // Espera 3 segundos antes de mudar o texto novamente
            });
          });
        });
      });
    }

    changeText(); // Inicia a primeira troca
  });




  // ===== wow js
  new WOW().init();

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };
})();
