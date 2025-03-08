const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const mainRouter = require("./routes/index.routes");

const PORT = config.get("port") || 3030;

const app = express();
app.use(express.json());

app.use("/api", mainRouter);

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server started at: http://localhost:${PORT}`);
    });
    await mongoose.connect(config.get("dbUri"));
  } catch (error) {
    console.log(error);
    console.log("Ma'lumotlar bazasiga ulanishda xatolik");
  }
}

start();
