
const acc = document.querySelectorAll(".fqa-accordion__btn");

acc.forEach((item) => {
  item.addEventListener("click", function() {
    this.classList.toggle("fqa-accordion__btn--active")
  })
})