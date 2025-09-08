// Select all product elements
const products = document.querySelectorAll('.product');

// Loop through each product
products.forEach((product) => {
  // Read data attributes (camelCase via dataset)
  const id = product.dataset.productId;
  const price = product.dataset.price;

  // Log the values
  console.log(`Product ID: ${id}, Price: ${price}`);

  // Display value inside the element
  product.innerText += ` — ID: ${id}, Price: $${price}`;
});
