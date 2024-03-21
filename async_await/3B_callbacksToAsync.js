const fs = require("fs");

async function readFile(filePath) {
  try {
    const data = await fs.readFileSync(filePath, "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFile("./example.txt");
