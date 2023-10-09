const express = require("express");
const app = express();
const db = require("./database/db");
const partnerRoute = require("./routes/partner");
require("dotenv").config();
app.use(express.json());

app.use("/api", partnerRoute);
app.get("/", (req, res) => {
  res.send("server working🔥");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
