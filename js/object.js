// 1. Create an object named book using object literal syntax
// 2. Add a title property to the book object and assign it a string value
// 3. Add an author property to the book object and assign it a string value
// 4. Add a publish_year to the book object and assign it a number to represent the year the book was published

let book = {
  title: "1984",
  author: "George Orwell",
  publish_year: "1949"
};

/* 5. Use a for-in loop to print the book object to the console so the final output looks something like this:
title: Harry Potter and the Sorcerer's Stone
author: J.K. Rowling
publish_year: 1997
*/

for (prop in book) {
  console.log(prop, ": ", book[prop]);
}

// 1. Create an object named product, with the following 3 properties.
// Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
// -- name
// -- inventory
// -- unit_price
// before moving to the next step, make sure you've created the object correctly by logging it to the console like this: console.log(product)

let product = {
  name: "Banana",
  inventory: 456,
  unit_price: 0.67
};

console.log(product);

// 2. Create a function named addInventory(). The function should accept 2 parameters -- the product object, and the number to add to the inventory. The function adjusts the product object's inventory property by adding the number passed into the function.
// For example, if the inventory of the product is currently 2, calling addInventory(product, 3) will set the value of inventory to 5
/* Add a console.log() message to the function that includes a message that looks something like this:
"3 chairs added to the inventory"
In this example, "chair" is the name of the product.
*/

function addInventory(item, qunt) {
  item.inventory += qunt;
  console.log(`${qunt} ${item.name}s added to the inventory`);
  console.log(`${item.inventory} ${item.name}s left in stock`);
}

// 3. Call the addInventory() function

addInventory(product, 9);

// 4. Create a function named processSale(). The function should accept 2 parameters -- the product object, and the number to of products that were sold. The function adjusts the product object's inventory property by subtracting the number passed into the function. The function also returns the total sale which is the unit_price multiplied by the number passed into the function
// For example, if the inventory of the product is currently 5 and the unit_price is 10, calling processSale(product, 2) will set the value of inventory to 3 and return the value of 20.
/* Add a console.log() message to the function that includes a message that looks something like this:
"2 chairs sold"
In this example, "chair" is the name of the product.
*/

function processSale(item, qunt) {
  item.inventory -= qunt;
  console.log(`${qunt} ${item.name}s sold`);
  return qunt * item.unit_price;
}

console.log("Total Sale: $" + processSale(product, 78).toFixed(2));
/* 5. Call the processSale() function. When you call the processSale() function log the return value to the console so the message looks something like this:
"Total sale: $20"
*/

// 1. Create an array named products.
// 2. Add objects to the array. Each object should be a single product, with the following 3 properties.
// Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
// -- name
// -- inventory
// -- unit_price

let products = [
  { name: "Apple", inventory: 345, unit_price: 2.59 },
  { name: "Peach", inventory: 45, unit_price: 1.99 },
  { name: "Plum", inventory: 34, unit_price: 1.59 }
];

// 3. Create a function named listProducts(). The function should accept 1 parameter -- the array of products. It should return an array of just the names of the products.

function listProducts(array) {
  let prodNames = [];
  for (let i = 0; i < array.length; i++) {
    prodNames.push(array[i].name);
  }
  return prodNames;
}
// 4. Call the listProducts() function and log the returned value to the console.

console.log(listProducts(products));

// 5. Create a function names totalValue(). The function should accept 1 parameter -- the array of products. It should return the total value of all of the products in the array. You calculate the value of one product by multiplying the inventory value by the unit_price value

function totalValue(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i].inventory * array[i].unit_price;
  }
  return total;
}

// 6. Call the totalValue() function and log the returned value to the console.

console.log(
  "The total value of all products is $" + totalValue(products).toFixed(2)
);
