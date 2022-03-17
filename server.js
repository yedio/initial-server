const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/test", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
