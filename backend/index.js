// const express = require("express");
// const app = express();
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const port = process.env.PORT || 5000;
// const esewaRoutes = require("./src/routes/esewaRoutes.js");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use("/api/payment", esewaRoutes);

// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });

// //middleware
// app.use(express.json());
// app.use(
//   cors({
//     origin: ["http://localhost:5173"],
//     credentials: true,
//   })
// );


// //route
// const bookRoutes = require("./src/books/book.route.js");
// app.use("/api/books", bookRoutes);

// const orderRoutes= require("./src/orders/order.route.js");
// app.use("/api/orders", orderRoutes);

// const userRoutes =require("./src/users/user.route.js")
// app.use("/api/auth", userRoutes);

// const adminRoutes = require("./src/stats/admin.stats.js")
// app.use("/api/admin", adminRoutes);

// app.get("/", (req, res) => {
//   res.send(" Book Bazar server is live and running fine");
// });

// async function main() {
//   await mongoose.connect(process.env.DB_URL);
//   // await mongoose.connect(process.env.MONGO_URI);
// }

// main()
//   .then(() => console.log("Mongodb connect successfully!"))
//   .catch((err) => console.log(err));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });



const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// ✅ Connect to DB
async function main() {
  await mongoose.connect(process.env.DB_URL);
}
main()
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.log(err));

// ✅ CORS middleware (must come before routes)
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// ✅ Other middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
const esewaRoutes = require("./src/routes/esewaRoutes.js");
app.use("/api/payment", esewaRoutes);

const bookRoutes = require("./src/books/book.route.js");
app.use("/api/books", bookRoutes);

const orderRoutes = require("./src/orders/order.route.js");
app.use("/api/orders", orderRoutes);

const userRoutes = require("./src/users/user.route.js");
app.use("/api/auth", userRoutes);

const adminRoutes = require("./src/stats/admin.stats.js");
app.use("/api/admin", adminRoutes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("Book Bazar server is live and running fine");
});

// ✅ Start server once (only one listen)
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

