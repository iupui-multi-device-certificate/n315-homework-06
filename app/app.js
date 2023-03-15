import { GAMES } from "./data/games.js";

import {
  homeView,
  userProfileView,
  loginView,
  galleryView,
} from "./views/view.js";

const titleBase = "DevConnect";

const routes = {
  home: galleryView(GAMES),
  // create: userProfileView(),
  // edit: userProfileView(users[0], true),
  // login: loginView(),
};

const changeRoute = () => {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  //set to home if empty string
  if (pageID == "") {
    pageID = "home";
  }
  document.getElementById("app").innerHTML = routes[pageID];
  $(document).attr("title", `${titleBase} | ${pageID.toUpperCase()}`);
};

const toggleMobileMenu = () => {
  $(".hamburger").toggleClass("active");
  $(".nav-menu").toggleClass("active");
};

function initListeners() {
  $(window).on("hashchange", changeRoute);
  changeRoute();

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
  initListeners();
});
