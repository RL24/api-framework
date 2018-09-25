import * as express from 'express';
import * as src from './src';

const app = express();

src.__routes.forEach((route) => {
    app[route.type](route.route, route.controller.handler);
});

app.listen(3000);