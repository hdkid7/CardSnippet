import Swiper from "swiper";

var swiper = new Swiper(".swiper-container", {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const addActiveClass = (element) => element.classList.add("active");
const removeActiveClass = (element) => element.classList.remove("active");

const header = document.getElementById("header");
const linksInHeader = header.querySelectorAll(".link");

const displayPage = (pageElement) => {
  pageElement.style.display = "block";
};

const getElementId = (element) => document.getElementById(element);

const removePage = (pageElement) => {
  pageElement.style.display = "none";
};

const toggleActive = () => {
  linksInHeader.forEach((link) => {
    link.onclick = () => {
      toggleActive();
      addActiveClass(link);
      displayPage(getElementId(link.getAttribute("data-value")));
    };
    removeActiveClass(link);
    removePage(getElementId(link.getAttribute("data-value")));
  });
};
toggleActive();

getElementId("staffTag").click();
