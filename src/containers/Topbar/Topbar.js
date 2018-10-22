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
import Helper from './Helper';
import LogoHome from 'components/utility/logoHome';
import Actions from '../../redux/themeSwitcher/actions.js';
const { switchActivation, changeTheme } = Actions;  
const { Header } = Layout;
const { toggleCollapsed } = appActions;
const customizedTheme = themes[themeConfig.theme];

class Topbar extends Component {
  searchHandle=e=>{
    console.log(e);
   
}
  render() {
    const { toggleCollapsed ,switchActivation} = this.props;
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
            // collapsed ? "isomorphicTopbar collapsed" : "isomorphicTopbar"
            'isomorphicTopbar'
          }
        >
          <div className="isoLeft">
          {/* {
            (collapsed)?
            <LogoHome />
            :<div></div>
          } */}
<<<<<<< HEAD
          <h3 style={{position:'absolute', left:'50px'}}>PROPTECH PLUS</h3>
=======
          <h3 style={{position: 'absolute', left: '30px'}}>PROPTECH PLUS</h3>
>>>>>>> 1f2f64bc45adf577e4014efbe23201ac534fe788
            <Search
                placeholder="Input search text"
                onSearch={val=>this.searchHandle(val)}
                style={{ width: 400, marginLeft: '0px'}}
                
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
            {/* <li
              onClick={() => this.setState({ selectedItem: "user" })}
              className="isoUser"
            >
              <TopbarUser />
            </li> */}
            <li
              onClick={() => switchActivation()}
              className="isoUser"
              // className="switcherToggleBtn"
            >
                <Helper/>
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
  { toggleCollapsed, switchActivation }
)(Topbar);
