const cartDetailCollapseBtn = document.querySelector(
  ".cart-detail-collapse-btn"
);
const cartDetailContent = document.querySelector(".cart-detail-content");
cartDetailCollapseBtn.onclick = (e) => {
  e.target.classList.toggle("active");
  cartDetailContent.classList.toggle("active");
};

const cartSectionCollapseBtn = document.querySelectorAll(
  ".cart-content .cart-section-heading .collapse-btn"
);
const cartSectionContents = document.querySelectorAll(".cart-section-content");
cartSectionCollapseBtn.forEach((item, i) => {
  item.onclick = () => {
    cartSectionContents[i].classList.toggle("active");
  };
});
