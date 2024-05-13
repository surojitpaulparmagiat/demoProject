require("dotenv").config();

// initialize the database connection
require("./src/Configs/Db.Config");
const express = require("express");
const { api_v1_router } = require("./src/Routes/api_v1_route");

const app = express();

app.use(express.json());
app.use("/api/v1", api_v1_router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
