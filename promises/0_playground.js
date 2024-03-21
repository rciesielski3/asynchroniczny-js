const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(false);
  }, 6000);
});

promise
  .then((response) => {
    console.log("promise resolved with data", response);
  })
  .catch((err) => console.log("wystapil blad", err));
