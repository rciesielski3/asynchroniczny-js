const fs = require("fs");

function readFileCallback(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

// Using the callback
readFileCallback("./example.txt", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
