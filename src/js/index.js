import CardBuilder from "./CardBuilder";
import { cardArray, userCardMaker } from "./CardArray";
import { linkArray, linkMaker } from "./LinkArray";
import createViewModel from "./ViewModel";
//----------------------------------------omni dependecies
//OMNIUPDATE VARIABLES
// newArray.forEach(s => {
//   userCardMaker({
//   imagePath:s[0].trim(),
//   name:s[1],
//   profession:s[2],
//   phoneNumber:s[3],
//   roomNumber:s[4],
//   webUrl:s[5],
//   email:s[6],
//   description:s[7],
//   readMoreLink:s[8]
//   })
//    })

// link array = omniUpdate var name
// linkArray.forEach
// (s => {
//   linkMaker({
//     linkName:s[0],
//     linkContent:s[1]
//   })
// })

//${aboutView}

//${contactView}
//----------------------------------------omni dependecies

userCardMaker({
  name: "Stephen Curry",
  profession: "NBA Player",
  email: "jack@yahoo.com",
  roomNumber: "224",
  phoneNumber: "(718)-435-45656",
  imagePath:
    "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MTg4NzMwNzU3MDk3MzQ1/stephen-curry-unlikely-return-injury.jpg",
});
userCardMaker({
  name: "Lil Tjay",
  profession: "Rapper",
  imagePath:
    "https://memberdata.s3.amazonaws.com/hi/hitsdd/photos/hitsdd_photo_gal__photo_1839800802.jpg",
});
userCardMaker({
  name: "Lil Tecca",
  profession: "Rapper",
  readMoreLink: "google.com",
  webUrl: "jack.org",
  imagePath:
    "https://static01.nyt.com/images/2019/10/06/arts/music/doas-tecca-promo/GettyImages-1165612474-square640.jpg",
});
userCardMaker({
  name: "Lebron James",
  profession: "NBA Player",
  imagePath:
    "https://nba.nbcsports.com/wp-content/uploads/sites/12/2020/04/GettyImages-1206647160-e1586390067316.jpg?w=610&h=343&crop=1",
});
userCardMaker({
  name: "Ninja",
  profession: "Streamer",
  imagePath:
    "https://api.time.com/wp-content/uploads/2019/04/tyler-blevins-ninja-time-100-2019-002-1.jpg?quality=85&zoom=2",
});

let staffView = "";

cardArray
  .map((item) => createViewModel(item))
  .forEach((view) => {
    staffView += view;
  });

linkMaker({
  linkName: "Staff",
  linkContent: `<div id="card-container">
    ${staffView}
    </div>`,
});
linkMaker({
  linkName: "about",
  linkContent: "Lol im here in about",
});

const routes = linkArray.reduce(
  (acc, post) => {
    let { linkName, linkHtml, linkContentHtml } = post;
    return { ...acc, [linkName]: (acc[linkName] = linkContentHtml) };
  },
  { staff: `<div id ="card-container">${staffView}</div>` }
);

console.log(routes);

let links = "";

var header = document.getElementById("header");

linkArray.forEach((item) => {
  if (item.link != "") links += item.linkHtml;
});

header.innerHTML = links;

const setActiveLink = (id) => {
  var links = document.querySelectorAll("#header div");

  for (let index = 0; index < links.length; index++) {
    const element = links[index];
    const routeName = element.getAttribute("id");

    if (routeName == id) {
      element.setAttribute("class", "active");
    } else {
      element.removeAttribute("class");
    }
  }
};

var contentDiv = document.getElementById("content");

let state = {
  initialState: routes.staff,
};

function render(id) {
  contentDiv.innerHTML = state.initialState;
  setActiveLink(id);
}

//Init
(function initialize() {
  window.history.replaceState(state, null, "");
  render(state);
  setActiveLink("Staff");
})();

const addClickListener = (e, id) =>
  e.addEventListener("click", function (e) {
    state.initialState = routes[id];
    console.log(routes[id]);
    window.history.pushState(state, null, "");
    render(id);
  });
const linkElements = linkArray.map((s) => document.getElementById(s.linkName));

linkElements.forEach((s) => {
  addClickListener(s, s.id);
  console.log(s.id);
});

window.onpopstate = function (event) {
  if (event.state) {
    console.log(event.state.initialState);
    state = event.state;
    setActiveLink(event.state.id);
  }
  render(state);
  setActiveLink(event.state.id);
};
