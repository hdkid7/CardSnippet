
import CardBuilder from "./CardBuilder";
import {cardArray,userCardMaker} from "./CardArray"
import createViewModel from "./ViewModel"



userCardMaker({name:"Stephen Curry",profession:"NBA Player",email:"jack@yahoo.com",roomNumber:"224", phoneNumber:"(718)-435-45656", imagePath:"https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MTg4NzMwNzU3MDk3MzQ1/stephen-curry-unlikely-return-injury.jpg"})
userCardMaker({name:"Lil Tjay",profession:"Rapper", imagePath:"https://memberdata.s3.amazonaws.com/hi/hitsdd/photos/hitsdd_photo_gal__photo_1839800802.jpg"})
userCardMaker({name:"Lil Tecca",profession:"Rapper",readMoreLink:"google.com", imagePath:"https://static01.nyt.com/images/2019/10/06/arts/music/doas-tecca-promo/GettyImages-1165612474-square640.jpg"})
userCardMaker({name:"Lebron James",profession:"NBA Player", imagePath:"https://nba.nbcsports.com/wp-content/uploads/sites/12/2020/04/GettyImages-1206647160-e1586390067316.jpg?w=610&h=343&crop=1"})
userCardMaker({name:"Ninja",profession:"Streamer", imagePath:"https://api.time.com/wp-content/uploads/2019/04/tyler-blevins-ninja-time-100-2019-002-1.jpg?quality=85&zoom=2"})
userCardMaker({name:"Shiggy",profession:"Comedian", imagePath:"https://static.vibe.com/files/2018/08/GettyImages-1001042940-1533829844-compressed.jpg"})
userCardMaker({name:"Donald Trump",profession:"US President", imagePath:"https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg"})
userCardMaker({name:"Lamelo Ball",profession:"Basketball Player", imagePath:"https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2133,w_3200/https%3A%2F%2Fpippenainteasy.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2016%2F04%2F1190997301-1.jpeg"})






cardArray
.map(item => createViewModel(item))
.forEach(view => {
  document.getElementById("card-container").innerHTML += view;
})




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




