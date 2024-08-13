'use strict';

// funcion de alternar elementos
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// variables de la barra lateral
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// funcion de alternar elementos en la barra lateral para dispositivos moviles
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// variables del formulario de contacto 
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// eventos para los campos del formulario de contacto
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// variables de la barra de navegación
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// eventos para la barra de navegación
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const targetPage = this.getAttribute("data-nav-link");
    
    for (let j = 0; j < pages.length; j++) {
      if (pages[j].getAttribute("data-page") === targetPage) {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
    window.scrollTo(0, 0);
  });
}