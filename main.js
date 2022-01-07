const express = require("express");
const app = express();
const { adduser } = require("./user");
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.post("/add-user", async (req, res) => {
  const data = req.body;
  await adduser(data);
  res.json({ message: "record added" });
});

app.listen(4000, () => console.log("Server Started..."));
