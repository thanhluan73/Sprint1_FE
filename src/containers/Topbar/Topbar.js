import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout,Input } from "antd";
import appActions from "redux/app/actions";
import TopbarWrapper from "./topbar.style";
import themes from "settings/themes";
import { themeConfig } from "settings";

import TopbarMessage from './topbarMessage';
import TopbarNotification from './topbarNotification';
import Helper from './Helper';
import Actions from '../../redux/themeSwitcher/actions.js';
const { switchActivation,  } = Actions;  
const { Header } = Layout;
const { toggleCollapsed } = appActions;
const customizedTheme = themes[themeConfig.theme];

class Topbar extends Component {
  searchHandle=e=>{
    console.log(e);
   
}
  render() {
    const { switchActivation} = this.props;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: "fixed",
      width: "100%",
      height: 50,
    };
    const Search = Input.Search;
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={'isomorphicTopbar'}
        >
          <div style={{position: 'absolute', marginLeft: '-210px', marginTop: '-5px', }}>
              <h3 style={{Height: '80px'}}>PROPTECH PLUS</h3>
          </div>
          <div className="isoLeft">
          
            <Search
                placeholder="Input search text"
                onSearch={val=>this.searchHandle(val)}
                style={{ width: 400, marginLeft: '-25px'}}
            />
          </div>

          <ul className="isoRight" >
            
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
              onClick={() => switchActivation()}
              className="isoUser"
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
