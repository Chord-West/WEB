const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const user = require('./api/user');


// 미들웨어 추가하는 부분
if (process.env.NODE_ENV !== 'test'){
    app.use(morgan('dev')); //test 환경이 아닐때는 log가 찍히지 않음
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.use('/users',user);


module.exports = app;