const express = require("express");
const app = express();

app.use(express.json());
app.use("/weakness", require("./routes/weakness"));
app.use("/pokemon", require("./routes/pokemon"));
app.use("/resistance", require("./routes/resistance"));

app.listen(5000, () => {
  console.log(`Express App Listenning on port ${5000}`);
});
