import { CAMPING } from "./models/model.js";

import { galleryView, galleryDetailView } from "./views/view.js";

const titleBase = "DevConnect";

//click handler to get detail of item, e.g. blog & gallery items
const itemClickHandler = (itemID, view, items) => {
  const getItem = (itemID) => items.find((item) => itemID == item.id);
  const requestedItem = getItem(itemID);
  const itemPage = view(requestedItem);

  $("#app").html(itemPage);
};

const loadData = () => {
  $("#app").html(galleryView(CAMPING));
  initListeners();
};

function initListeners() {
  $(".card-vertical").click(function (e) {
    itemClickHandler(e.currentTarget.id, galleryDetailView, CAMPING);

    //add listener here after item has loaded
    $(".close-detail").click(function (e) {
      // console.log(e.currentTarget);
      loadData();
    });
  });
}
$(document).ready(function () {
  loadData();
});
