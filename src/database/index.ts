import mongoose from "mongoose";
import { DB } from "../utils/secrets";
import logger from "../utils/logger";

const dbURI = `mongodb+srv://${DB.USER}:${DB.PASSWORD}@${DB.HOST}${
  DB.PORT ? ":" + DB.PORT : ""
}/${DB.NAME}`;

const options = {
  useNewUrlParser: true,
  //   useCreateIndex: true,
  useUnifiedTopology: true,
  //   useFindAndModify: false,
  autoIndex: true,
  connectTimeoutMS: 10000,
};

mongoose
  .connect(dbURI, options)
  .then(() => {
    logger.info("Mongoose connection done!");
  })
  .catch((e) => {
    logger.info("MONGO URI ", dbURI);
    logger.info("Mongoose connection error!");
    logger.error(e);
  });

mongoose.connection.on("connected", () => {
  logger.info("Mongoose default connection open to " + dbURI);
});

mongoose.connection.on("error", (err) => {
  logger.error("Mongoose default connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
  logger.info("Mongoose default connection disconnected");
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    logger.info(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});
