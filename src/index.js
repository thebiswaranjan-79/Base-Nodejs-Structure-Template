const express = require("express");

const { PORT } = require("./config");
const apiRouter = require("./routes/index");

const app = express();

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server Runs at PORT ${PORT}`);
});
