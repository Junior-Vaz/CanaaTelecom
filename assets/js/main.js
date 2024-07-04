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
      logo.src = "assets/images/logo/logo.svg";
    } else {
      logo.src = "assets/images/logo/logo-white.svg";
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
  
  // Captura os elementos do DOM
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');
const modal = document.getElementById('myModal');

// Função para abrir o modal
function openModal() {
    modal.style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listeners para abrir e fechar o modal
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

// Event listener para ação de confirmação
confirmBtn.addEventListener('click', function() {
    alert('Ação de confirmar!');
    closeModal();
});


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
