const tabTitle = document.querySelectorAll(".tab-title");
const tabContent = document.querySelectorAll(".tab-content");

tabTitle.forEach(function (ele) {
    ele.addEventListener("click", function () {
        removeActiveClass(tabTitle);
        ele.classList.add("active");
        let dataId = ele.dataset.id;
        removeActiveClass(tabContent);
        document.getElementById(dataId).classList.add('active')
    });
});

function removeActiveClass(items) {
    items.forEach((element) => {
        element.classList.remove("active");
    });
}
