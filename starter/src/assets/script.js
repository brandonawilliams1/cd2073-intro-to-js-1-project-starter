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
  quantity: 10,
  productId: 1,
  image: 'images/cherry.jpg'
};

let inventory2 = {
  name: 'orange',
  price: 3.99,
  quantity: 20,
  productId: 2,
  image: 'images/orange.jpg'

  
};

let inventory3 = {
  name: 'strawberry',
  price: 7.99,
  quantity: 30,
  productId: 'stwB3',
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

function addProductToCart(productId) {
  //store find method in variable
  let product = products.find(products >= products.productId === productId);
  // a for loop thagt loops over the products array
  for (let i = 0; i < products.length; i++){
    // create a condition to find the product by its id
    if(product === productId){
      productId.push(cart)
    };
  };

  console.log(addProductToCart(products.productId))
  console.log(cart)
  // let productFound = false;
  // for (let i = 0; i < products.length; i++) {
  //   if (products[i].productId === products) {
  //     for (let j = 0; j < cart.length; j++) {
  //       if (cart[j].productId === products) {
  //         cart[j].quantity++;
  //         productFound = true;
  //         break;
  //       }
  //     }
  //   }
  // }
};
console.log(addProductToCart(stwB3))
console.log(cart)
//helper function
// function helpAddProductToCart(){
// let productId = products.productId
// let cart = productId.push(cart)
  
// return addProductToCart()
// };

// helpAddProductToCart();    

// /* Create a function named increaseQuantity that takes in the productId as an argument
//   - increaseQuantity should get the correct product based on the productId
//   - increaseQuantity should then increase the product's quantity
// */
// function increaseQuantity(productId) {
//   for (let i = 0; i < cart.length; i++) {
//     if (cart[i].productId === productId) {
//       cart[i].quantity++;
//       break;
//     }
//   }
// };
// //helper function
// function helpIncreaseQuantity(){
// let product = product.quantity +1;
// return increaseQuantity();
// };

// helpIncreaseQuantity();

// /* Create a function named decreaseQuantity that takes in the productId as an argument
//   - decreaseQuantity should get the correct product based on the productId
//   - decreaseQuantity should decrease the quantity of the product
//   - if the function decreases the quantity to 0, the product is removed from the cart
// */
// function decreaseQuantity(productId) {
//   for (let i = 0; i < cart.length; i++) {
//     if (cart[i].productId === productId) {
//       if (cart[i].quantity > 0) {
//         cart[i].quantity--;
//         if (cart[i].quantity === 0) {
//           cart.splice(i, 1);
//         }
//       }
//       break;
//     }
//   }
// };
// //helper function 
// function helpDecreaseQuantity(){
//   if (product.quantity === 0){
//     removeProductFromCart(product.productId)
//   };
// return decreaseQuantity();
// };

// helpDecreaseQuantity();
// /* Create a function named removeProductFromCart that takes in the productId as an argument
//   - removeProductFromCart should get the correct product based on the productId
//   - removeProductFromCart should update the product quantity to 0
//   - removeProductFromCart should remove the product from the cart
// */
// function removeProductFromCart(productId) {
//   for (let i = 0; i < cart.length; i++) {
//     if (cart[i].productId === productId) {
//       cart[i].quantity = 0;
//       cart.splice(i, 1);
//       break;
//     }
//   }
// };
// //helper fuction
// function helpRemoveProductFromCart (productId){
//   let product = productId;
//   product.quantity = 0;

//   cart.splice(cart.indexOf(product), 1);

//   return removeProductFromCart
// };

// helpRemoveProductFromCart();

// /* Create a function named cartTotal that has no parameters
//   - cartTotal should iterate through the cart to get the total of all products
//   - cartTotal should return the sum of the products in the cart
// */
// function cartTotal() {
//   let total = 0;
//   for (let i = 0; i < cart.length; i++) {
//     total += cart[i].quantity * cart[i].price;
//   }
//   return total;
// }

// /* Create a function called emptyCart that empties the products from the cart */
// function emptyCart() {
//   cart.splice(0, cart.length);
// }

// /* Create a function named pay that takes in an amount as an argument
//   - pay will return a negative number if there is a remaining balance
//   - pay will return a positive number if money should be returned to customer
// */
// let totalCost = 100;
// let totalPaid = 0;

// function pay(amount) {
//   let remainingBalance = totalCost - amount;

//   return remainingBalance;
// }

// /* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


// /* The following is for running unit tests. 
//    To fully complete this project, it is expected that all tests pass.
//    Run the following command in terminal to run tests
//    npm run test
// */

// module.exports = {
//    products,
//    cart,
//    addProductToCart,
//    increaseQuantity,
//    decreaseQuantity,
//    removeProductFromCart,
//    cartTotal,
//    pay, 
//    emptyCart,
//    /* Uncomment the following line if completing the currency converter bonus */
//    // currency
// }

