//Packages
const express = require("express");
const app = express();
const cors = require('cors');

const bodyParser = require("body-parser");

//milddlewears
const whitelist= ['https://appfrontendcompras.herokuapp.com']
app.use(cors({origin:whitelist}))





///origen header/////
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');
// other app.use() options ...
app.use(expressCspHeader({ 
  policies: { 
      'default-src': [expressCspHeader.NONE], 
      'img-src': [expressCspHeader.SELF], 
  } 
})); 







app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//routes

app.use(require("../routers/index"));

//execution server web
app.get("/", (req, res) => {
  res.status(200).send("Bienvenidos al módulo de Facturación").end();
});

app.listen(process.env.PORT || 4000);
console.log("server running in http://localhost:4000");
