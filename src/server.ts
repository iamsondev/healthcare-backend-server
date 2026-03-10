import app from "./app";
dotenv.config();
import dotenv from "dotenv";

const bootstrap = () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to load server", error);
  }
};

bootstrap();
