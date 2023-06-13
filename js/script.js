"use strickt";

//our services
const serviceTitle = document.querySelectorAll(".our-services-nav");
const serviceMenuItem = document.querySelectorAll(".services-info");

// console.log(serviceTitle);
// console.log(serviceMenuItem);

serviceTitle.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentTitle = item;
    let tabId = currentTitle.getAttribute("data-tab");
    let currenData = document.querySelector(tabId);

    if (!currenData.classList.contains("active")) {
      serviceTitle.forEach(function (item) {
        item.classList.remove("active");
      });
      serviceMenuItem.forEach(function (item) {
        item.classList.remove("active");
      });
      currentTitle.classList.add("active");
      currenData.classList.add("active");
    }
  });
});

//Our Amazing Work
const workMenu = document.querySelector(".amazing-work_menu");
let workMenuItem = document.querySelectorAll(".work_menu_item");
let workMenuContent = document.querySelectorAll(".work-list");
const loadButton = document.getElementById("load");
const hiddenList = document.querySelectorAll(".hidden-list");

workMenu.addEventListener("click", function (event) {
  loadButton.style.display = "inline-block";
  for (let i = 0; i < hiddenList.length; i++) {
    hiddenList[i].style.display = "none";
  }
  for (let i = 0; i < workMenuContent.length; i++) {
    if (
      event.target.dataset.tab == "all" ||
      event.target.dataset.tab == workMenuContent[i].dataset.content
    ) {
      workMenuContent[i].style.display = "block";
    } else {
      workMenuContent[i].style.display = "none";
    }
  }
  for (let i = 0; i < workMenuItem.length; i++) {
    workMenuItem[i].classList.toggle("active_work-menu", false);
  }
  event.target.classList.toggle("active_work-menu");
});
loadButton.addEventListener("click", function (e) {
  for (let i = 0; i < hiddenList.length; i++) {
    let currentItem = document.querySelector(".active_work-menu");
    if (
      hiddenList[i].dataset.content === currentItem.dataset.tab ||
      currentItem.dataset.tab === "all"
    ) {
      hiddenList[i].style.display = "block";
    } else hiddenList[i].style.display = "none";
  }
  loadButton.style.display = "none";
});

//people's feedback
const options = {
  arrows: true,
  dots: true,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 10,
  easing: "ease",
  initialSlide: 0,
  swipe: false,
};
const mySlider = $(".slider")
  .on("init", function (slick) {
    const slider = this;

    setTimeout(function () {
      let dots = $(".slick-dots > LI > BUTTON", slider);

      $.each(dots, function (i, e) {
        let slide_id = $(this).attr("aria-controls");

        let dot_img = $("#" + slide_id).data("dot-img");

        $(this).html('<img src="' + dot_img + '" alt="" />');
      });
    }, 100);
  })
  .slick(options);
