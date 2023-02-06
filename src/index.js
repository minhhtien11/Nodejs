const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db')

//connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
); // cài đặt cho body nhận được dữ liệu
app.use(express.json());

app.use(methodOverride('_method'));

//http logger
app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a ,b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
