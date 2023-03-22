import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Home } from '../pages'
import { RouterHelper } from './route'

const DynamicRouter = ({component : component, ...rest}) => {
    return (
        <>
        <Route
        {...rest}
        render={props => (
            <Component {...props} />
        )}
        />
        </>
    )
}


export default () => (
    <BrowserRouter>
        <Switch>
            <DynamicRouter exact path={RouterHelper.Home.path} component={Home} />
        </Switch>
    </BrowserRouter>
)