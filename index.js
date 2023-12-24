require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

app.get("/api", (req, res) => {
  res.send({ express: "Hello From Nft marketplace" });
});

app.listen(port, () => console.log(`Server running on port ${port} !`));
