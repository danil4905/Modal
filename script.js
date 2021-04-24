window.onload = function () {
  let count = 1,
    sum = 0,
    min = 1,
    max = 5,
    totalPrice = 0,
    optionSum = 0,
    flatWhitePrice = 125;
  let btnPlus = document.getElementById("pluse-btn"),
    btnMinus = document.getElementById("minus-btn"),
    counter = document.getElementById("count"),
    coffePrice = document.getElementById("coffe-price"),
    prices = document.getElementsByClassName("option-item"),
    cartCounter = document.getElementById("cart-add"),
    event = document.getElementsByTagName("section"),
    totalResult = document.getElementById("cart-total");

  let renderResults = (place, result) => {
    place.innerHTML = result;
  };
  let renderTotalPrice = () => {
    totalPrice = count * (flatWhitePrice + findOptionSum());
    renderResults(totalResult, `$ ${totalPrice}`);
  };
  renderResults(counter, count);
  renderResults(cartCounter, `ADD ${count} TO CART`);
  renderResults(coffePrice, `$  ${count * flatWhitePrice}`);

  let findOptionSum = () => {
    optionSum = 0;
    for (let i = 0; i < prices.length; i++) {
      if (prices[i].checked) {
        optionSum += prices[i].value * 1;
      }
    }
    return optionSum;
  };

  renderTotalPrice();

  btnMinus.onclick = function () {
    if (count > min) {
      count = count - 1;
      renderResults(counter, count);
      renderResults(cartCounter, `ADD ${count} TO CART`);
      renderResults(coffePrice, "$ " + count * flatWhitePrice);
      renderTotalPrice();
    }
  };
  btnPlus.onclick = function () {
    if (count < max) {
      count = count + 1;
      renderResults(counter, count);
      renderResults(cartCounter, `ADD ${count} TO CART`);
      renderResults(coffePrice, "$ " + count * flatWhitePrice);
      renderTotalPrice();
    }
  };
  for (let i = 0; event.length; i++) {
    event[i].onclick = function () {
      renderTotalPrice();
    };
  }
};
