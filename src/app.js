
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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
                    <Switch>
                        <Route exact path="/" name="Home" component={LandingPage} />
                        <Route exact path="/login" name="Login" component={LoginPage} />
                        <Route exact path="/register" name="Register" component={RegisterPage} />
                        <Route exact path="/profile" name="Profile" component={ProfilePage} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;
