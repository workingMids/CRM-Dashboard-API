import http from 'http';
import express from 'express';
import indexRouter from './routes/indexRouter';
import bodyParser from 'body-parser';
import compression from 'compression';



const port = 8000;
const app = express();

app.use(compression({
  "level": 9
}));

app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({
  extended: true
}));

let allowCrossDomain = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-type, authorization');
  next();
};
//to escape SSL verification
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(allowCrossDomain);

//routes
app.all('/*', indexRouter);

http.createServer(app).listen(port, () => {
  console.log(`server listening on port ${port}`);
});



export default app;