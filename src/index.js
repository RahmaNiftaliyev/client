// @ts-nocheck
import React, {useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './app/store';
import App from './root/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';
import {productsApi} from './redux/productsSlice';

const container = document.getElementById('root');
const root = createRoot(container);

const RootApp = () => {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }

        store.dispatch(productsApi.endpoints.getProducts.initiate());
    }, []);

    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    );
};

root.render(<RootApp/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// to register() or unregister() your service worker.
// serviceWorkerRegistration.register();
