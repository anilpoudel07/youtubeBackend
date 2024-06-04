import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});
import express from "express";
const app = express();
/*
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (e) => {
      console.log("Err", e);
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening in on port ${process.env.PORT}`);
    });
  } catch (e) {
    console.log("Error", e);
    throw e;
  }
})();
*/
connectDB()
  .then(() => {
    try {
      app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is listening on port ${process.env.PORT}`);
      });
    } catch (e) {
      console.log("Express Failed", e);
    }
  })
  .catch((e) => {
    console.log(`MongoDb Failed !!! ${e}`);
  });
