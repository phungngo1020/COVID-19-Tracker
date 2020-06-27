import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import Compare from './Compare';
import { Cards, Chart, CountryPicker } from './components';

export default (
    <Route path="/" component={App}>
        <Route path="" component={Home} />
        <Route path="/compare" component={Compare} />
    </Route>
)