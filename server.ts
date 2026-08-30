import app from "./app.js";
import dotenv from "dotenv";
import { config } from "./constants/core.js";

dotenv.config({ path: "./config.env" });

//

app.listen(config.port, config.host, () => {
  console.log(`App running on port ${config.port}...`);
});
