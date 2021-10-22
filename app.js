//require all packages
const express = require("express");
require("dotenv").config();
const app = express();

const index = require("./routes/index");

//use this the body-parser feature from express
app.use(express.json());

app.use("/api", index);

//define port on which server will run
const port = process.env.PORT || 5000;

//define start async function to start server
const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

//start server using the start() function
start();
