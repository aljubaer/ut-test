import App from './app';
import validateEnv from '@utils/validateEnv';
import AuthRoute from './modules/auth/auth.route';
import IndexRoute from './modules/defaults/index.route';
import HelloRoute from './modules/hello_world/hello.route';

validateEnv();

const app = new App([new IndexRoute(), new AuthRoute(), new HelloRoute()]);

app.listen();
