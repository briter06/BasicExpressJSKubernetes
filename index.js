const express = require("express");
const app = express();
const port = 3000;
let c = 1;

app.get("/divideByCounter", (req, res) => {
  try {
    const r = BigInt(req.query.numberA) / BigInt(c++);
    if (c === 3) c = 0;
    res.send(`Answer: ${r}`);
  } catch (error) {
    process.exit(1);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
