const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const methodOverride = require('method-override')
const router = express.Router();
const port = 3000;
const route = require('./routes/index');
const db = require('./config/db')
//login gg




//? conect db
db.connect()

app.use(express.static(path.join(__dirname, 'public'))); // !nhu nay la http:localhost = __dirname,'public'
// http loger

app.use(express.urlencoded()); //middleware
app.use(express.json()); //middlewaresss
app.use(methodOverride('_method'))

//  // TEMPLATE ENGINE
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      // Function to do basic mathematical operation in handlebar
      math: function(lvalue, operator, rvalue) {
          lvalue = parseFloat(lvalue);
          rvalue = parseFloat(rvalue);
          return {
              "+": lvalue + rvalue,
              "-": lvalue - rvalue,
              "*": lvalue * rvalue,
              "/": lvalue / rvalue,
              "%": lvalue % rvalue
          }[operator];
      }}
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views')); // !render ra file nam o thu muc view
// !huong duong dan toi thu muc view de co the xuat ra man hinh

// route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
