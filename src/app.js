
import React from 'react';
import { render } from 'react-dom';

import LandingPage from './components/pages/landingPage';

// import combined reducers
import reducers from './reducers/index';

render (
    <LandingPage />, document.getElementById('app')
);
