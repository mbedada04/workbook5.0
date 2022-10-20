
let products = [
 {product: "Gummy Worms", price: 5.79},
 {product: "Plain M&Ms", price: 2.89},
 {product: "Peanut M&Ms", price: 2.89},
 {product: "Swedish Fish", price: 3.79},
 {product: "Snickers", price: 2.79},
 {product: "Kit Kat", price: 1.79},
 {product: "Skittles", price: 3.79},
 {product: "Cow Tail", price: 2.67},
];

let cheaperProducts = products.filter((product) => product.price < 4.0);

console.log(cheaperProducts);

let mmCandies = products.filter((p) => {

if (product.product.includes("M&Ms")){
    return true;
}
return false;
});

