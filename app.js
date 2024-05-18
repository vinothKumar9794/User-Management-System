const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const methodOverride = require("method-override");
const router = require("./server/routes/router");
const app = express();

app.use(express.static("./public"));
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(methodOverride('X-HTTP-Method-Override'));


app.use("/ums/v1",router.pageRouter);
app.use("/ums/v1",router.usersRouter)



let port = process.env.PORT;
app.listen(port,() => console.log("Express server is running ...."));

