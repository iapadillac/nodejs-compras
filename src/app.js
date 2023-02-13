app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://appfrontendcompras.herokuapp.com/');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');
const app = express();
// other app.use() options ...
app.use(expressCspHeader({ 
    policies: { 
        'default-src': [expressCspHeader.NONE], 
        'img-src': [expressCspHeader.SELF], 
    } 
})); 