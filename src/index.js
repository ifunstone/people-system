import dva from 'dva';
import createLoading from 'dva-loading';
import * as serviceWorker from "./serviceWorker";
// 1. Initialize
const app = dva({
  initialState: {
    
  }
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/separate').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
