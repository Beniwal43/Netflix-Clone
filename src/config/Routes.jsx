import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Mainpage from '../pages/Mainpage';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                exact
                component={Mainpage}
            />
        </Switch>
    );
}

export default Routes;
