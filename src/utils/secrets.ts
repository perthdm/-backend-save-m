import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: ".env" });

export const APP_PORT = process.env.APP_PORT;
export const LOG_DIRECTORY = process.env.LOG_DIRECTORY || path.resolve("logs");
export const JWT_SECRET = process.env.JWT_SECRET;
export const DB = {
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PWD,
  HOST: process.env.DB_HOST,
  NAME: process.env.DB_NAME,
  PORT: process.env.DB_PORT,
};
