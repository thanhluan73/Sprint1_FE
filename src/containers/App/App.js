import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout,Icon,Row,Col,Drawer } from 'antd';
import { Debounce } from 'react-throttle';
import WindowResizeListener from 'react-window-size-listener';
import { ThemeProvider } from 'styled-components';
// import authAction from 'redux/auth/actions';
import appActions from 'redux/app/actions';
import Sidebar from '../Sidebar/Sidebar';
import Expandbar from '../Expandbar/Expandbar';
import Topbar from 'containers/Topbar/Topbar';
import AppRouter from './AppRouter';
import { siteConfig } from '../../settings';
import themes from '../../settings/themes';
import { themeConfig } from '../../settings';
import AppHolder from './commonStyle';
import './global.css';
import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import basicStyle from "settings/basicStyle.js";

import LayoutWrapper from "components/utility/layoutWrapper";
const { Header,Content, Footer } = Layout;
// const { logout } = authAction;
const { toggleAll } = appActions;
export class App extends Component {
  render() {
    const { url } = this.props.match;
    const { height } = this.props;
    const appHeight = window.innerHeight;
    const pageStyle = {
      display: "flex",
      flexFlow: "row nowrap",
      flexDirection: 'column',
      alignItems: "flex-start",
      overflow: "hidden",
      width: '100%',
      paddingTop:0
  };
  const { rowStyle, colStyle } = basicStyle;
    return (
      <ThemeProvider theme={themes[themeConfig.theme]}>
        <AppHolder>
          <Layout style={{ height: appHeight }}>
            <Debounce time="1000" handler="onResize">
              <WindowResizeListener
                onResize={windowSize =>
                  this.props.toggleAll(
                    windowSize.windowWidth,
                    windowSize.windowHeight
                  )
                }
              />
            </Debounce>
            <Topbar url={url} />
            <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
              <Sidebar url={url} />
              <Layout
                className="isoContentMainLayout"
                style={{     
                  height: height
                }}
              >
                <Content
                  className="isomorphicContent"
                  style={{
                    paddingTop: '40px',
                    flexShrink: '0',
                    background: '#f1f3f6',
                    position: 'relative',
                    // display:'flex',
                    // flexDirection:'row'
                  }}
                >
                  
                    {/* <LayoutWrapper> */}
                      <div style={{paddingTop:'4%',paddingLeft:'2%'}}>

                        <Breadcrumb/>
                        <AppRouter url={url} />
                      </div>
                      {/* <Drawer
                          title="Basic Drawer"
                          placement="right"
                          closable={true}
                          visible={true}
                        >
                          <p>Some contents...</p>
                          <p>Some contents...</p>
                          <p>Some contents...</p>
                        </Drawer> */}
                    {/* </LayoutWrapper> */}
                </Content>
                {/* <Footer
                  style={{
                    background: '#ffffff',
                    textAlign: 'center',
                    borderTop: '1px solid #ededed'
                  }}
                >
                  {siteConfig.footerText}
                </Footer> */}
              </Layout>
            </Layout>
          </Layout>
        </AppHolder>
      </ThemeProvider>
    );
  }
}

export default connect(
  state => ({
    auth: state.Auth,
    height: state.App.height
  }),
  // { logout, toggleAll }
  {  toggleAll }
)(App);
