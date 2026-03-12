import app from "./app";
dotenv.config();
import dotenv from "dotenv";
import { envVars } from "./app/config/env";

const bootstrap = () => {
  try {
    app.listen(envVars.PORT, () => {
      console.log(`Server is running on http://localhost:${envVars.PORT}`);
    });
  } catch (error) {
    console.error("Failed to load server", error);
  }
};

bootstrap();
