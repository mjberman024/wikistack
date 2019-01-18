const express = require('express');
const app = express();
const morgan = require('morgan');

const { Page, User } = require('./models');
const layout = require('./views/layout');
const wikiRouter = require('./routes/wiki');
// const userRouter = require('./routes/user');

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use('/wiki', wikiRouter);
// app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send(layout(' '));
});

const PORT = 3000;

const init = async () => {
  await Page.sync();
  await User.sync();
  app.listen(PORT);
};
init();
