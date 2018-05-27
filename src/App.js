
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { logger } from 'redux-logger';

// import combined reducers
import reducers from './reducers/index';

// import pages
import { Landing, Register, Login, Profile } from './components/index';

// create store with redux logger
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

class App extends React.Component{
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/" name="Home" component={Landing} />
                        <Route exact path="/login" name="Login" component={Login} />
                        <Route exact path="/register" name="Register" component={Register} />
                        <Route exact path="/profile" name="Profile" component={Profile} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;
