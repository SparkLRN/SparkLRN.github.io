
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { logger } from 'redux-logger';

// import combined reducers
import reducers from './reducers/index';

// create store with redux logger
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// import pages
import {LoginPage, RegisterPage, LandingPage, ProfilePage } from './components/pages/index';

class App extends React.Component{
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route exact path="/" name="Home" component={LandingPage} />
                </Router>
            </Provider>
        )
    }
}

export default App;
