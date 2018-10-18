import * as React from 'react';
import 'babel-polyfill';
import { BrowserRouter as Router, Route, Link, Switch,withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon,Row,Col,Button } from 'antd';
import { connect } from 'react-redux';

import {adminRoutes} from 'routes';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class MyMenu extends React.Component{
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
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
  render(){
    return(
    <Layout>
      <Header className="header" style={{backgroundColor:'white'}}>
        <Row type="flex" justify="space-between">
          <Col span={4} >Proptech plus  </Col>
          <Col span={2}>
            <Button shape="circle" type="primary"> <Icon type="user" /> </Button>
            Admin
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '0 10px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Updating...</Breadcrumb.Item>
          <Breadcrumb.Item>Updating...</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0',overflow:'auto', background: '#fff',  }}>
          <Sider 
            width={200} 
            style={{ background: '#fff' }}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}

            >
              <SubMenu key="sub1" title={<div><Icon type="user" /><span>Quản lý</span></div>}>
                <Menu.Item key="1">
                  <Link to="/companys">
                    <Icon type="pie-chart" />
                    <span>Công ty</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/users">
                    <Icon type="pie-chart" />
                    <span>Users</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/list-role">
                    <Icon type="pie-chart" />
                    <span>List role</span>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<div><Icon type="user" /><span>I am updating ...</span></div>}>
                <Menu.Item key="5">
                  <Link to="/list-role">
                    <Icon type="pie-chart" />
                    <span>I am updating...</span>
                  </Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={
            { 
              padding: '0 5px',
              minHeight: 280,
              flexDirection: 'row', 
              overflowX: 'hidden'
              // overflowX:'auto'
            }
            }>
            {this.showContentMenus(adminRoutes)}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
         Design ©2018 by Nguyen Le Phong
      </Footer>
    </Layout>
  );
}
}
const mapStateToProps = state => {
  return {
      scopeOfUser : state.scopeOfUser,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
      setScopeOfUser: (scope) => {
      },
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyMenu));
