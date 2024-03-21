// Concept: Promise.all

// Example: "Let's plan the ultimate JavaScript party! We need to handle several
// tasks at once, so we'll use Promise.all to make sure everything is ready at the same time."

const orderPizza = new Promise((resolve, reject) =>
  setTimeout(() => reject("Pizza is ready!"), 6000)
);
const decorateRoom = new Promise((resolve, reject) =>
  setTimeout(() => resolve("Room is decorated!"), 1500)
);
const preparePlaylist = new Promise((resolve) =>
  setTimeout(() => resolve("Playlist is set!"), 2000)
);

Promise.all([orderPizza, decorateRoom, preparePlaylist])
  .then((results) => {
    console.log("(faster) Party setup complete:");
    results.forEach((result) => console.log(result));
  })
  .catch((err) => console.log("err", err));
