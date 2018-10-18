import asyncComponent from 'helpers/AsyncFunc';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default class extends React.Component {
    state = {
        url: this.props.url
    }
    render() {
        return (
            <Switch>
                <Route
                    path={this.state.url + '/home'}
                    component={asyncComponent(() => import('./body/Home'))}
                />
                <Route
                    path={this.state.url + '/course'}
                    component={asyncComponent(() => import('./body/Course'))}
                />
                <Route
                    path={this.state.url + '/about'}
                    component={asyncComponent(() => import('./body/About'))}
                />
                <Route
                    path={this.state.url + '/blog/:cate/:id'}
                    component={asyncComponent(() => import('./blog'))}
                />
                <Route
                    path={this.state.url + '/blog/:cate'}
                    component={asyncComponent(() => import('./blog'))}
                />
                <Route
                    path={this.state.url + '/profile'}
                    component={asyncComponent(() => import('./profile'))}
                />
                <Route
                    component={asyncComponent(() => import('containers/Page/404'))}
                />
            </Switch>
        );
    }
}