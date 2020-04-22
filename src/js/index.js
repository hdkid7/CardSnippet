import Swiper from "swiper";
import CardBuilder from "./CardBuilder";
import {cardArray,userCardMaker} from "./CardArray"
import createViewModel from "./ViewModel"


userCardMaker({name:"John Allen",profession:"Blacksmith",email:"jack@yahoo.com",roomNumber:"224"})
userCardMaker({name:"Jack slals",profession:"Grren Man"})
userCardMaker({name:"Jack Black",profession:"Grren Man",readMoreLink:"google.com"})

cardArray
.map(item => createViewModel(item))
.forEach(view => {
  document.getElementById("card-container").innerHTML += view;
})


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

//Call userCardMaker foreach row in table




