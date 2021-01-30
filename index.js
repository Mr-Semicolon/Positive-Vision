require("dotenv").config();

const { logger } = require("./config/logger");

const { app, socketServer, server } = require("./config/socket");

const serverStart = (port) => {
  require("./config/appConfiguration")(app, socketServer);
  return server.listen(port, () => {
    logger.info(`Server Up and Running on http://localhost:${port} `);
  });
};

if (process.env.NODE_ENV === "production") {
  serverStart(process.env.PORT);
} else {
  serverStart(process.env.PORT);
}
