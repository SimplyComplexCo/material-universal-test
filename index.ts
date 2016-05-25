import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';

// Angular 2 Universal
import 'angular2-universal/polyfills';
import {
    provide,
    enableProdMode,
    expressEngine,
    REQUEST_URL,
    ORIGIN_URL,
    BASE_URL,
    NODE_ROUTER_PROVIDERS,
    NODE_HTTP_PROVIDERS,
    ExpressEngineConfig
} from 'angular2-universal';

// replace this line with your Angular 2 root component
import {App} from './app/app';

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));
const port = 6565;

enableProdMode();

// Express View
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

app.use(bodyParser.json());

function ngApp(req: any, res: any) {
    let baseUrl = '/';
    let url = req.originalUrl || '/';

    let config: ExpressEngineConfig = {
        directives: [App],

        platformProviders: [
            provide(ORIGIN_URL, { useValue: `http://localhost:${port}` }),
            provide(BASE_URL, { useValue: baseUrl }),
        ],
        providers: [
            provide(REQUEST_URL, { useValue: url }),
            NODE_ROUTER_PROVIDERS,
            NODE_HTTP_PROVIDERS,
        ],
        async: true,
        preboot: { appRoot: 'app' }
    };

    console.log('render index');

    res.render('index', config);
}

app.use(express.static(ROOT, { index: false }));

app.use('*', ngApp);

app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});
