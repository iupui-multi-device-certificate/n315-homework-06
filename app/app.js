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

const loadData = () => {
  const getCamping = (campingID) =>
    CAMPING.find((item) => campingID == item.id);

  const requestedItem = getCamping(1);

  //set up routes
  const routes = {
    home: galleryView(CAMPING),
    // home: galleryDetailView(requestedItem),
    // create: userProfileView(),
    // edit: userProfileView(users[0], true),
    // login: loginView(),
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

  //add listener on each button
  let elements = document.querySelectorAll(".btn");

  elements.forEach((item) => {
    item.addEventListener("click", handleSubmit);
  });
}
$(document).ready(function () {
  // initListeners();
  loadData();
});
