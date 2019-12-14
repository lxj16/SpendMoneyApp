console.log("loaded");
const handleBuy = function(total, purchased) {
  //   $(".product-buy").click(function() {
  //     const product_name = $(this)
  //       .parents(".product-wrapper")
  //       .find(".product-title")
  //       .text();
  //     console.log("product =", product_name);
  //   });
  $(".product-buy").click(function() {
    const quantity = $(this)
      .parent()
      .find(".product-input")
      .val();

    const name = $(this)
      .parent()
      .attr("data-key");
    const price = $(this)
      .parent()
      .attr("data-price");
    console.log("buy", name, price);

    const subTotal = price * quantity;
    console.log(subTotal);

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
    console.table(purchased);

    handleTotal(total, -subTotal);
    handleShoppingCart(purchased);
  });
};

const handleShoppingCart = function(purchased) {
  if ($.isEmptyObject(purchased)) {
    $(".shopping-cart").hide();
  } else {
    $(".shopping-cart").show();
  }
};

const handleTotal = function(total, diff) {
  total += diff;
  console.log("new total:", total);
};

$(document).ready(function() {
  let total = 1000000;

  let purchased = {};
  handleShoppingCart(purchased);
  handleBuy(total, purchased);
});
