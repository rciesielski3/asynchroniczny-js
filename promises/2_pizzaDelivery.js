// Concept: catch and finally

// Example: "What if something goes wrong with our pizza order?
// Let's handle unexpected issues and make sure we clean up afterwards, no matter what happens."

function orderPizza(flavor) {
  return new Promise((resolve, reject) => {
    console.log(`Ordering a ${flavor} pizza for the party...`);
    setTimeout(() => {
      const problem = Math.random() > 0.5;
      if (problem) {
        reject(`Problem with the ${flavor} pizza order!`);
      } else {
        resolve(`Delivered ${flavor} pizza!`);
      }
    }, 3000);
  });
}

orderPizza("mushroom")
  .then((message) => {
    console.log(`Hooray! ${message}`);
  })
  .catch((error) => {
    console.error(`Oh no! ${error}`);
  })
  .finally(() => {
    console.log("Party cleanup in progress...");
  });
