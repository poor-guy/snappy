const Koa = require('koa');
const app = new Koa();
const getEnv = require("getenv");

const mongoURL = `mongodb://mongo-service/logs`
var mongoose = require('mongoose');
mongoose.connect(mongoURL);

const Log = require('./log.model');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're in");
});

app.use(async (ctx, next) => {
  const createdAt = Date.now();
  await new Log({ message: `${ctx.method} ${ctx.url}`, createdAt}).save();
  await next();
});

app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);