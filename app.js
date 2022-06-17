var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const multer = require('multer')
const bodyParser = require("body-parser");
const fs = require('fs')
var indexRouter = require('./routes/index');
const adminRoute = require('./routes/admin')
const homeBannerRouter = require('./routes/homeBanner')
const homeAbout = require("./routes/homeAbout")
const homeWeDo = require("./routes/homeWeDo")
const newsRouter = require("./routes/news")
const workRouter = require("./routes/work")
const contactsRouter = require('./routes/contacts')
const contactUsRouter = require('./routes/contactUs')
const aboutUsRouter = require('./routes/aboutUs')
const partnerRouter = require('./routes/partners')
const projectRouter = require('./routes/projects')
const aboutBanner = require("./routes/aboutUsBanner")
//
const staticController = require("./controllers/staticConroller")
require('dotenv').config()
var app = express();
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/admin', adminRoute) //+
app.use('/api/v1/homeBanner', homeBannerRouter) //+
app.use('/api/v1/homeAbout', homeAbout)//+
app.use('/api/v1/homeWeDo', homeWeDo) //+
app.use('/api/v1/news', newsRouter) //+
app.use('/api/v1/work', workRouter) //+
app.use('/api/v1/contacts', contactsRouter) //+
app.use('/api/v1/contactUs', contactUsRouter) //+
app.use('/api/v1/aboutUs', aboutUsRouter)//-
app.use('/api/v1/partner', partnerRouter) //+
app.use('/api/v1/project', projectRouter) //+
app.use('/api/v1/aboutUsBanner', aboutBanner) //+

const upload = multer({});
app.post('/upload', upload.any(),async (req, res) => {
    try {
        const {file} = req.body;
        console.log(file, "name")
        name="test"
        const filePath = path.resolve(__dirname, '..', 'static')
        const fileName = String(name) + '.pdf';
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, {recursive: true})
        }
        const tmp = await fs.writeFileSync(
            path.join(filePath, fileName),
            file,
        );
        return res.json(tmp)
    } catch (e) {
        console.log("something went wrong", e)
    }
});

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
