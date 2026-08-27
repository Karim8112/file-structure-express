import app from "./app.js";
import { config } from "./constants/core.js";

app.listen(config.port, config.host, () => {
  console.log(`App running on port ${config.port}...`);
});
