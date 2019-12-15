$(document).ready(function() {
  let total = Number($("#fund-total-wrap").attr("data-fund-total"));

  let purchased = {};
  handleShoppingCart(purchased);
  handleBuy(total, purchased);
  handleSell(total, purchased);
});

const handleBuy = function(total, purchased) {
  $(".product-buy").click(function() {
    let quantity = $(this)
      .parent()
      .find(".product-input")
      .val();

    if (quantity <= 0) {
      alert("Input a valid number");
    } else {
      const name = $(this)
        .parent()
        .attr("data-key");
      const price = $(this)
        .parent()
        .attr("data-price");

      if (purchased[name]) {
        purchased[name]["quantity"] =
          Number(purchased[name]["quantity"]) + Number(quantity);
      } else {
        purchased[name] = {
          name: name,
          price: price,
          quantity: quantity
        };
      }

      handleTotal(total, purchased);
      handleShoppingCart(purchased);
    }
  });
};
const handleSell = function(total, purchased) {
  $(".product-sell").click(function() {
    let quantity = $(this)
      .parent()
      .find(".product-input")
      .val();

    if (quantity <= 0) {
      alert("Input a valid number");
    } else {
      const name = $(this)
        .parent()
        .attr("data-key");

      if (purchased[name]) {
        purchased[name]["quantity"] =
          Number(purchased[name]["quantity"]) - Number(quantity);
      } else {
        alert("You don't have this item");
      }

      handleTotal(total, purchased);
      handleShoppingCart(purchased);
    }
  });
};

const handleShoppingCart = function(purchased) {
  if ($.isEmptyObject(purchased)) {
    $(".shopping-cart").hide();
  } else {
    $(".shopping-cart").show();
  }

  for (let key in purchased) {
    if (purchased[key].quantity === 0) {
      delete purchased[key];
    }
  }
  let htmlContent = "";
  console.log(purchased);
  for (let key in purchased) {
    htmlContent += `<li>${key}, $${purchased[key].price}, ${purchased[key].quantity}</li>`;
  }
  $(".shopping-cart ul").html(htmlContent);
};

const handleTotal = function(total, purchased) {
  let diff = 0;

  for (let key in purchased) {
    diff += Number(purchased[key].price) * Number(purchased[key].quantity);
  }
  total -= diff;
  console.log(total);
  console.log(diff);
  $("#fund-total-wrap").attr("data-fund-total", total);
  $("#fund-total-wrap").html(`$${total} left`);
};
