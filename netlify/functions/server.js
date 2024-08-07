const { createRequestHandler } = require("@netlify/remix-adapter");
const build = require("@remix-run/dev/server-build");
const process = require("node:process");

exports.handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});