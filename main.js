const dotenv = require("dotenv");

dotenv.config();

const http = require("http");
const app = require("./config/express")();
const db = require("./config/database");

http.createServer(app).listen(app.get("port"), function () {
  console.log("funciona na porta" + app.get("port"));
});

db(process.env.MONGODB_URL);
