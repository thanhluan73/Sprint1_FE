import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout,Input } from "antd";
import appActions from "redux/app/actions";
import TopbarWrapper from "./topbar.style";
import themes from "settings/themes";
import { themeConfig } from "settings";

import TopbarUser from "./topbarUser";
import TopbarMessage from './topbarMessage';
import TopbarSearch from './topbarSearch';
import TopbarNotification from './topbarNotification';

import Logo from 'components/utility/logo';

const { Header } = Layout;
const { toggleCollapsed } = appActions;
const customizedTheme = themes[themeConfig.theme];

class Topbar extends Component {
  searchHandle=e=>{
    console.log(e);
   
}
  render() {
    const { toggleCollapsed } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: "fixed",
      width: "100%",
      height: 70
    };
    const Search = Input.Search;
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? "isomorphicTopbar collapsed" : "isomorphicTopbar"
          }
        >
          <div className="isoLeft">
          {
            (collapsed)?
            <Logo/>
            :<div></div>
          }
            {/* <button
              className={
                collapsed ? "triggerBtn menuCollapsed" : "triggerBtn menuOpen"
              }
              style={{ color: customizedTheme.textColor }}
              onClick={toggleCollapsed}
            /> */}
            <Search
                placeholder="Input search text"
                onSearch={val=>this.searchHandle(val)}
                style={{ width: 280 }}
            />
          </div>

          <ul className="isoRight">
            
            <li
              onClick={() => this.setState({ selectedItem: "user" })}
              className="isoUser"
            >
              <TopbarMessage />
            </li>
            <li
              onClick={() => this.setState({ selectedItem: "user" })}
              className="isoUser"
            >
              <TopbarNotification />
            </li>
            <li
              onClick={() => this.setState({ selectedItem: "user" })}
              className="isoUser"
            >
              <TopbarUser />
            </li>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default connect(
  state => ({
    ...state.App
  }),
  { toggleCollapsed }
)(Topbar);
