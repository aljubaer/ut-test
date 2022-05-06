import App from './app';
import validateEnv from '@utils/validateEnv';
import AuthRoute from './modules/auth/auth.route';
import IndexRoute from './modules/defaults/index.route';

validateEnv();

const app = new App([new IndexRoute(), new AuthRoute()]);

app.listen();
