// Concept: async/await

// Example: "Imagine we're ordering coffee at our favorite JavaScript coffee shop.
// Each step, from placing the order to receiving our coffee, is asynchronous.
// Let's use async/await to handle this smoothly."

async function orderCoffee(type) {
  console.log(`Ordering a ${type} coffee...`);
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate the time it takes to make the coffee
  console.log(`${type} coffee is ready!`);
}

orderCoffee("latte");
