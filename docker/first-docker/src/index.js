const express = require('express');
const app = express();
app.get('/', (_, res) => {
  res.send("hell0");
});

app.listen(5000, () => {
  console.log("hello from " + 5000);
})