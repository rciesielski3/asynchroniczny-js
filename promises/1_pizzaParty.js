//Concept: Promise constructor and then()

// Example: "Let's throw a JavaScript pizza party! We'll order a pizza
// and use promises to handle the delivery.When our pizza arrives, we'll celebrate!"

function orderPizza(flavor) {
  return new Promise((resolve, reject) => {
    console.log(`Ordering a ${flavor} pizza for the party...`);
    setTimeout(() => {
      resolve(`Delivered ${flavor} pizza!`);
    }, 3000); // Pizza delivery takes 3 seconds
  });
}

// console.log(orderPizza(flavor));
orderPizza("pepperoni").then((message) => {
  console.log(`Hooray! ${message}`);
});
