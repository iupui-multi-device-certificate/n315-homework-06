import { CAMPING } from "./models/model.js";

import {
  homeView,
  userProfileView,
  loginView,
  galleryView,
  galleryDetailView,
} from "./views/view.js";

const titleBase = "DevConnect";

const changeRoute = (routesIn) => {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  //set to home if empty string
  if (pageID == "") {
    pageID = "home";
  }
  document.getElementById("app").innerHTML = routesIn[pageID];
  $(document).attr("title", `${titleBase} | ${pageID.toUpperCase()}`);
};

const toggleMobileMenu = () => {
  $(".hamburger").toggleClass("active");
  $(".nav-menu").toggleClass("active");
};

//click handler to get detail of item, e.g. blog & gallery items
const itemClickHandler = (itemID, view, items) => {
  const getItem = (itemID) => items.find((item) => itemID == item.id);
  const requestedItem = getItem(itemID);
  const itemPage = view(requestedItem);

  $("#app").html(itemPage);
};

const loadData = () => {
  //set up routes
  const routes = {
    home: galleryView(CAMPING),
  };

  //pass in routes
  initListeners(routes);
};

function initListeners(routes) {
  $(window).on("hashchange", changeRoute);
  changeRoute(routes);

  $(".hamburger").click(function (e) {
    toggleMobileMenu();
  });

  //close when click a nav link
  $(".nav-link").click(function (e) {
    toggleMobileMenu();
  });

  //use event delegation
  //variation on redundant click event
  //if time, will come back and work on making text selectable
  $(".card-vertical").click(function (e) {
    if (e.target.className === "item-link") {
      itemClickHandler(e.target.id, galleryDetailView, CAMPING);
    }
  });
}
$(document).ready(function () {
  // initListeners();
  loadData();
});
