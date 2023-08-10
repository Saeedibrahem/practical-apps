const scrollBar = document.querySelector(".scroll-bar");
const scrollTop = document.querySelector(".scroll-top");
const links = document.querySelectorAll(".nav-link");
const searchBtn = document.querySelector(".btn");
const searchInput = document.querySelector(".form-control");

const title = document.querySelectorAll(".container h2");

// scroll to element
function ssssss() {
  window.addEventListener("scroll", () => {
    title.forEach((item, i) => {
      if (window.scrollY === 0) {
        title.forEach((ele) => {
          ele.classList.remove("active");
        });
      } else {
        if (title[i + 1]) {
          if (
            item.offsetTop < window.scrollY + 300 &&
            title[i + 1]?.offsetTop > window.scrollY + 300
          ) {
            title.forEach((ele) => {
              ele.classList.remove("active");
            });
            item.classList.add("active");
          }
        } else {
          if (item.offsetTop < window.scrollY + 200) {
            title.forEach((ele) => {
              ele.classList.remove("active");
            });
            item.classList.add("active");
          }
        }
      }
    });
  });
}
ssssss();
links.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    let targetElement = document.getElementById(item.dataset.target);
    scrollToPosition(targetElement);
  });
});

// get position of element

function scrollToPosition(target) {
  if (target) {
    let position = target.offsetTop - target.clientHeight;
    window.scrollTo({
      top: position,
    });
  }
}

// scroll to element by search button

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  searchInputAction();
});

// search input actions of search

function searchInputAction() {
  if (searchInput.value.trim().length !== 0) {
    let targetElement = document.getElementById(searchInput.value);
    getElementBySearch(targetElement);
  } else {
    alert("Enter any thing to search");
  }
}

// get position of element by search button

function getElementBySearch(ele) {
  scrollToPosition(ele);
  if (ele) {
  } else {
    alert(`${searchInput.value} Not found in this page`);
  }
  searchInput.value = "";
}

//  display scroll bar

window.addEventListener("scroll", function () {
  let mainHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let percentage = document.documentElement.scrollTop / mainHeight;
  scrollBar.style.width = `${percentage * 100}%`;

  displayScrollToTopBtn();
});

// scroll to top button

scrollTop.addEventListener("click", function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// display Scroll To Top button

function displayScrollToTopBtn() {
  if (this.scrollY > 600) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}
