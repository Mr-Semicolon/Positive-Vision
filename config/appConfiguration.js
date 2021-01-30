const compression = require("compression");
const express = require("express");
const multer = require("multer");
const session = require("express-session");
const lusca = require("lusca");
const upload = multer();
const { SERVER_ROOT_URL } = require("./serverConfig");
const { notFoundHandler } = require("../middlewares/notFoundHandler");
const { healthcheck } = require("../middlewares/healthcheck");
const { trimer } = require("../middlewares/trimer");
const { appRouter } = require("../api/router");
const errorHandler = require("../middlewares/errorHandler");
const logHandler = require("../middlewares/logHandler");
const corsMiddleware = require("../middlewares/cors");

const helmetMiddleware = require("../middlewares/helmet");
// const { valiateMobile } = require('../middelwares/validateMobileNumber');
/* const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 100 requests per windowMs
}); */
const expiryDate = new Date(Date.now() + 60 * 60 * 1000);
module.exports = (app, io) => {
/*   app.use(limiter); */
  app.use(
    session({
      secret: process.env.APP_SECRET,
      resave: true,
      saveUninitialized: true,
      cookie: {
        secure: true,
        httpOnly: true,
        path: "/",
        expires: expiryDate,
      },
    })
  );

  app.use(
    lusca({
      xframe: "SAMEORIGIN",
      p3p: "ABCDEF",
      hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
      xssProtection: true,
      nosniff: true,
      referrerPolicy: "same-origin",
    })
  );

  app.use(express.json({ limit: "300kb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(upload.any());
  app.use(compression());
  app.use(helmetMiddleware);
  app.disable("x-powered-by");
  app.use(logHandler);
  app.use(corsMiddleware);
  app.use((req, res, next) => {
    res.locals.io = io;
    next();
  });
  app.get("/", healthcheck);
  app.use(trimer);
  // app.use(valiateMobile);
  app.use(SERVER_ROOT_URL, appRouter);
  app.use("*", notFoundHandler);
  app.use(errorHandler);
};
