import React, { Component } from 'react';
import { connect } from 'react-redux';
import clone from 'clone';
import { Link } from 'react-router-dom';
import { Layout,Icon, Button } from 'antd';
import options from 'containers/Expandbar/options';
import Scrollbars from 'components/utility/customScrollBar.js';
import Menu from 'components/uielements/menu';
import IntlMessages from 'components/utility/intlMessages';
import ExpandbarWrapper from 'containers/Expandbar/Expandbar.style';
import appActions from 'redux/app/actions';
import Logo from 'components/utility/logo';
import themes from 'settings/themes';
import { themeConfig } from 'settings';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout; 
 
const {
  toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed
} = appActions;
const stripTrailingSlash = str => {
  if (str.substr(-1) === '/') {
    return str.substr(0, str.length - 1);
  }
  return str;
};

class Expandbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
  }
  handleClick(e) {
    this.props.changeCurrent([e.key]);
    if (this.props.app.view === 'MobileView') {
      setTimeout(() => {
        this.props.toggleCollapsed();
        this.props.toggleOpenDrawer();
      }, 100);
    }
  }
  onOpenChange(newOpenKeys) {
    const { app, changeOpenKeys } = this.props;
    const latestOpenKey = newOpenKeys.find(
      key => !(app.openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = app.openKeys.find(
      key => !(newOpenKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    changeOpenKeys(nextOpenKeys);
  }
  getAncestorKeys = key => {
    const map = {
      sub3: ['sub2']
    };
    return map[key] || [];
  };
  getMenuItem = ({ singleOption, submenuStyle, submenuColor }) => {
    const { key, label, leftIcon, children } = singleOption;
    const url = stripTrailingSlash(this.props.url);
    if (children) {
      return (
        <SubMenu
          key={key}
          title={
            <span className="isoMenuHolder" style={submenuColor}>
              <i className={leftIcon} />
              <span className="nav-text">
                <IntlMessages id={label} />
              </span>
            </span>
          }
        >
          {children.map(child => {
            const linkTo = child.withoutDashboard
              ? `/${child.key}`
              : `${url}/${child.key}`;
            return (
              <Menu.Item style={submenuStyle} key={child.key}>
                <Link style={submenuColor} to={linkTo}>
                  <IntlMessages id={child.label} />
                </Link>
              </Menu.Item>
            );
          })}
        </SubMenu>
      );
    }
    return (
      <Menu.Item key={key}>
        <Link to={`${url}/${key}`}>
          <span className="isoMenuHolder" style={submenuColor}>
            <i className={leftIcon} />
            <span className="nav-text">
              <IntlMessages id={label} />
            </span>
          </span>
        </Link>
      </Menu.Item>
    );
  };
  render() {
    const { app, toggleOpenDrawer, height } = this.props;
    const collapsed = clone(app.collapsed) && !clone(app.openDrawer);
    const { openDrawer } = app;
    const mode = collapsed === true ? 'vertical' : 'inline';
    const onMouseEnter = event => {
      if (openDrawer === false) {
        toggleOpenDrawer();
      }
      return;
    };
    const onConlapseMenu = event => {
      if (openDrawer === false) {
        this.props.toggleCollapsed();
        this.props.toggleOpenDrawer();
      }
      if (openDrawer === true) {
        this.props.toggleCollapsed();
        this.props.toggleOpenDrawer();
      }
      return;
    };
    const onMouseLeave = () => {
      if (openDrawer === true) {
        toggleOpenDrawer();
      }
      return;
    };
    const customizedTheme = themes[themeConfig.theme];
    const styling = {
      backgroundColor: customizedTheme.backgroundColor,
      // backgroundColor: '#fafafa',
      
    };
    const submenuStyle = {
      backgroundColor: 'rgba(0,0,0,0.3)',
      // backgroundColor: '#fafafa',
      color: customizedTheme.textColor,
    };
    const submenuColor = {
      color: customizedTheme.textColor
    };
    const { toggleCollapsed } = this.props;
    
    const collapsedClassName = this.props.collapsed && !this.props.openDrawer;
    return (
      <ExpandbarWrapper>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={collapsed}
          width={240}
          className="isomorphicExpandbar"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={styling}
        >
          <Logo collapsed={collapsed} />
          <Scrollbars style={{ height: height - 70 }}>
          <p style={{textAlign:'center'}}>
            <button
              className={
                collapsedClassName ? "triggerBtn menuCollapsed" : "triggerBtn menuOpen"
              }
              style={{border:'none', backgroundColor: '#fafafa', color: customizedTheme.textColor,}}
              onClick={onConlapseMenu}
            >
            {
              (collapsed)?
              <Icon type="right-circle" theme="twoTone" />
              :<Icon type="left-circle" theme="twoTone" />
            }
            </button>
          </p>
            <Menu
              onClick={this.handleClick}
              theme="dark"
              className="isoDashboardMenu"
              mode={mode}
              openKeys={collapsed ? [] : app.openKeys}
              selectedKeys={app.current}
              onOpenChange={this.onOpenChange}
              style={{padding:0}}
            >
              {options.map(singleOption =>
                this.getMenuItem({ submenuStyle, submenuColor, singleOption })
              )}
            </Menu>
          </Scrollbars>
        </Sider>
      </ExpandbarWrapper>
    );
  }
}

export default connect(
  state => ({
    app: state.App,
    height: state.App.height
  }),
  { toggleOpenDrawer, changeOpenKeys, changeCurrent, toggleCollapsed, }
)(Expandbar);
