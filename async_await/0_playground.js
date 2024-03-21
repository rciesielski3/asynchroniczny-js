async function getData() {
  try {
    const promiseData = await new Promise((resolve, reject) => {
      setTimeout(() => reject({ name: "unknown" }), 3000);
    });

    console.log("promiseData", promiseData);
  } catch (err) {
    console.log("err", err);
  }
}

getData();
