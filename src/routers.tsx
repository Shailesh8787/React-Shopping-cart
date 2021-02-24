import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './components/Home';
import CartList from './components/cartList'


export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact  />
                    <Route path="/cart" component={CartList} exact  />
                </Switch>
            </Router>
        )
    }

}
