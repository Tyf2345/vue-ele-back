const login = require("./login");
const home = require("./home");
const icon = require("./icon");
const table = require("./table");
module.exports = (app) => {
  app.use(login);
  app.use(home);
  app.use(icon);
  app.use(table);
};
