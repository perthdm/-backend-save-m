import app from "./app";
import { APP_PORT } from "./utils/secrets";
import logger from "./utils/logger";

app.listen(APP_PORT, () => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${APP_PORT}`);
});
