import dva from 'dva';
import { history } from 'src/utils/history';
import appModel from './models/app';
import router from './router';

// 1. Initialize
const app = dva({
  history,
  onError() {
    // xhr错误将在request中统一处理
    return null;
  },
});

// 2. Model
app.model(appModel);

// 3. Router
app.router(router);

// 4. Start
app.start('#root');

if (__DEV__) {
  (window as any)._store = (app as any)._store;
}
