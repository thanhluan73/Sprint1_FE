import React, { Component } from 'react';
import './App.css';
import {publicRoutes} from 'routes';
import Menu from './components/menu/Menu';
import { BrowserRouter as Router, Route, Link, Switch,withRouter } from "react-router-dom";

class App extends Component {
    state={
        login:true
    }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
        var that =this;
        result = routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    history={that.props.history}
                    component={route.main}
                />
            );
        });
        
    }
    return <Switch>{result}</Switch>;
  }
  render() {
    return (<div>
      {
          (!this.state.login)?  this.showContentMenus(publicRoutes): <Menu/>
      }
    </div>
    );
  } 
}

export default App;
