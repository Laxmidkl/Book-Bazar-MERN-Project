const express = require("express");
const app = express();

const mongoose = require("mongoose");

const port = process.env.PORT || 5000;

require('dotenv').config()


async function main() {
  await mongoose.connect(
   process.env.MONGO_URI
  );
  app.get("/", (req, res) => {
    res.send(" Book Bazar server is live and running fine");
  });
}

main()
  .then(() => console.log("Mongodb connect successfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//fqZYpfLNq0FoiYll
