const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.get("/:name", (req, res) => {
  res.send(`Welcome back ${req.params.name}.`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
