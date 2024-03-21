// Concept: Difference between Callbacks and Promises

// Example: "Let's revisit our adventure game, but this time escape
// the dreaded callback hell using promises."

// Callback Hell Version
function findTreasure(callback) {
  setTimeout(() => {
    console.log("Found the treasure!");
    callback();
  }, 2000);
}

function startAdventure() {
  console.log("Starting adventure...");
  setTimeout(() => {
    console.log("Encountered a dragon!");
    findTreasure(() => {
      console.log("Escaped with the treasure!");
    });
  }, 2000);
}

// Promisified Version
function findTreasure() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Found the treasure!");
      resolve();
    }, 2000);
  });
}

function startAdventure() {
  console.log("Starting adventure...");
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("Encountered a dragon!");
      resolve();
    }, 2000);
  })
    .then(() => findTreasure())
    .then(() => anotherDragon())
    .then(() => console.log("Escaped with the treasure!"));
}

startAdventure(); // Use the promisified version
