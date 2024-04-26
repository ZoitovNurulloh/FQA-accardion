
const acc = document.querySelectorAll(".fqa-accordion__inner");

acc.forEach((item) => {
  item.addEventListener("click", function() {
    this.classList.toggle("fqa-accordion__inner--active");
  })
})