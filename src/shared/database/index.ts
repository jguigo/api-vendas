import "dotenv/config"
import { Sequelize } from "sequelize";

let db = new Sequelize(
   process.env.DB_NAME as string,
   process.env.DB_USER as string,
   process.env.DB_PWD as string,
   {
      dialect: "mysql",
      host: process.env.DB_HOST as string,
      port: parseInt(process.env.DB_PORT as string),
   }
);

async function hasConnection() {
   try {
      await db.authenticate();
      console.log("Connection has been established successfully.");
   } catch (error) {
      console.error("Unable to connect to the database:", error);
   }
}

export { db, hasConnection };
