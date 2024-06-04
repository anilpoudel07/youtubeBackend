import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});

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

connectDB();
