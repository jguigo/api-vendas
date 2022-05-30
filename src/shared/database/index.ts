import { Sequelize } from "sequelize";

const DB_NAME = "apivendas";
const DB_USER = "root";
const DB_PASS = "root";

let db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
   dialect: "mysql",
   host: "localhost",
   port: 3306,
});

async function hasConnection() {
   try {
      await db.authenticate();
      console.log("Connection has been established successfully.");
   } catch (error) {
      console.error("Unable to connect to the database:", error);
   }
}

export { db, hasConnection };
