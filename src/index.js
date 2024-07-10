const express = require("express");

const { ServerConfig, Logger } = require("./config/index");
const apiRouter = require("./routes/index");

const app = express();

app.use("/api", apiRouter);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server Runs at PORT ${ServerConfig.PORT}`);
  Logger.info("Successfully Started The Server", "root", {msg : "Something"});
});
