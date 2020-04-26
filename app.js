const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const rememberMe = require("./middleware/rememberMe");
const router = require("./routes/");
const db = require("./db_data/base");
const cors = require("./middleware/cors");
const app = express();

app.all("*", cors);

app.use(cookieParser()); // cookies
app.use(express.json()); // application/json
app.use(
  express.urlencoded({
    // application/x-www-form-urlencoded
    extended: true,
  })
);

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);
// token过滤
app.use(rememberMe);

// 路由
router(app);

app.listen(3001, "0.0.0.0", () => {
  console.log("127.0.0.1:3001");
});
