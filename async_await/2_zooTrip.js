// Concept: error handling in an async/await

// Example: "Let's plan a trip to the JavaScript Zoo!
// We'll try to see our favorite animals, but sometimes they might be resting.
// Let's handle such situations gracefully."

async function visitAnimal(animal) {
  console.log(`Let's visit the ${animal}...`);
  await new Promise((resolve, reject) => {
    const isAvailable = Math.random() < 0.5;
    setTimeout(() => {
      if (isAvailable) {
        console.log(`Saw the ${animal}!`);
        resolve();
      } else {
        reject(`The ${animal} is resting. Maybe next time!`);
      }
    }, 1000);
  });
}

async function zooTrip() {
  try {
    await visitAnimal("lion");
  } catch (error) {
    console.error(error);
  }

  try {
    await visitAnimal("penguin");
  } catch (error) {
    console.error(error);
  }
}

zooTrip();
