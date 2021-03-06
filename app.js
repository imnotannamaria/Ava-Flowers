var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');

var indexRouter = require('./routes/index');
var ClienteRoutes = require('./routes/ClientesRoutes');
var ProdutoRoutes = require('./routes/ProdutosRoutes');
var CategoriaRoutes = require('./routes/CategoriasRoutes');
var PagamentoRoutes = require('./routes/PagamentoRoutes');
var StatusRoutes = require('./routes/StatusRoutes');
var PedidosRoutes = require('./routes/PedidosRoutes');
var VendasRoutes = require('./routes/VendasRoutes');
var ErroRoutes = require('./routes/ErrosRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(
  session({
    secret: 'Avaflowers',
    saveUninitialized: true,
    resave: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/clientes', ClienteRoutes);
app.use('/produtos', ProdutoRoutes);
app.use('/categorias', CategoriaRoutes);
app.use('/pagamentos', PagamentoRoutes);
app.use('/status', StatusRoutes);
app.use('/pedidos', PedidosRoutes);
app.use('/vendas', VendasRoutes);
app.use('/warning', ErroRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
