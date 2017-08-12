const Koa = require('koa');
const app = new Koa();

var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're in");
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);