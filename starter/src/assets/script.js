/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
let inventory1 = {
  name: 'cherry',
  price: 5.99,
  quantity: 0,
  productId: 1,
  image: 'images/cherry.jpg'
};

let inventory2 = {
  name: 'orange',
  price: 3.99,
  // by setting the quantity to default 1 when the add func pulls the odj it only adds the one on the obj w/o depleting the quan on the obj.
  quantity: 0,
  productId: 2,
  image: 'images/orange.jpg'

  
};

let inventory3 = {
  name: 'strawberry',
  price: 7.99,
  quantity: 0,
  productId: 3,
  image: 'images/strawberry.jpg'

};

// push inventory to the prod. array
products.push(inventory1, inventory2, inventory3);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

//helper functions
const item = function (productId){
  // this function runs a find method on the products arr and returns the obj by id
    return products.find((product) => product.productId === productId);
};

function round(num){
  return Number.parseFloat(num).toFixed(2)
};


function addProductToCart(productId) {
  for (let x = 0; x < products.length; x++) {
    for (let y = 0; y < products.length; y = y + 1) {
      if(products[y].productId  === productId){
        let product = item(productId);

        product.quantity += 1;

        if (!cart.includes(product)) {
            cart.push(products[y])
        };
        // make sure only 1 product is added from the odj
        
        //need to move entire obj in to cart
        
      };
    };
    break;
  };
};

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      cart[i].quantity++;
      break;
    }
  }
};

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      if (cart[i].quantity > 0) {
        cart[i].quantity--;
        if (cart[i].quantity === 0) {
          cart.splice(i, 1);
        }
      }
      break;
    }
  }
};
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      cart[i].quantity = 0;
      cart.splice(i, 1);
      break;
    }
  }
};


/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].quantity * cart[i].price;
  }
  return round(total);
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart.splice(0, cart.length);
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let totalPaid = 0;
function pay(amount) {
  // let totalPaid = cartTotal();
  totalPaid += amount;

  // let change = round(amount - totalPaid);

  // if (change >= 0) {
  //  // Return positive numif amount is greater than or equal to cartTotal
  //   return change;
  // } else {
  //  // Return negative num if amount is less than cartTotal 
  //   return change; 
  // }
  return totalPaid - cartTotal();
};

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}

