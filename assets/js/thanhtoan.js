const paymentCloseBtn = document.querySelector(".payment-close-btn");
const paymentOpenBtn = document.querySelector(".show-payment-info");

const addressBookCloseBtn = document.querySelector(".address-book-close-btn");
const addressBookOpenBtn = document.querySelector(".address-card-btn");
console.log(addressBookOpenBtn);
const shippingListCloseBtn = document.querySelector(".shipping-list-close-btn");
const shippingListOpenBtn = document.querySelector(
  ".cart-table-footer .change"
);

paymentCloseBtn.onclick = () => {
  document.querySelector(".payment-info").classList.remove("active");
  console.log(1);
};
paymentOpenBtn.onclick = (e) => {
  e.stopPropagation();
  document.querySelector(".payment-info").classList.add("active");
};

document.querySelector(".payment-info-submit").onclick = () => {
  document.querySelector(".payment-info").classList.remove("active");
};

addressBookCloseBtn.onclick = () => {
  document.querySelector(".address-book").classList.remove("active");
};
addressBookOpenBtn.onclick = (e) => {
  console.log(1);
  document.querySelector(".address-book").classList.add("active");
};

shippingListCloseBtn.onclick = () => {
  document.querySelector(".shipping-list").classList.remove("active");
};
shippingListOpenBtn.onclick = (e) => {
  console.log(1);
  document.querySelector(".shipping-list").classList.add("active");
};
