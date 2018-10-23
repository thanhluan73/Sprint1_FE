import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Switcher from '../../components/themeSwitcher/themeSwitcher';
// import LanguageSwitcher from '../LanguageSwitcher';
// import Themes from './config';
// import bucketSVG from 'images/image-cpn/bucket.svg';
import IntlMessages from '../../components/utility/intlMessages';
import ThemeSwitcherStyle from './themeSwitcher.style';

import Image from 'images/image-cpn/user3.png';
import TopbarDropdownWrapper from 'containers/Topbar/topbarDropdown.style';
import Actions from '../../redux/themeSwitcher/actions.js';
const { switchActivation, changeTheme } = Actions;  
const demoMassage = [
  {
    id: 1,
    name: 'David Doe',
    time: '3 minutes ago',
    massage:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
  },
  {
    id: 2,
    name: 'Navis Doe',
    time: '4 minutes ago',
    massage:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
  },
  {
    id: 3,
    name: 'Emanual Doe',
    time: '5 minutes ago',
    massage:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
  },
  {
    id: 4,
    name: 'Dowain Doe',
    time: '6 minutes ago',
    massage:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
  }
];

class ThemeSwitcher extends Component {
  render() {
    // const { customizedTheme } = this.props;
      const content = (
        <TopbarDropdownWrapper className="topbarMessage withImg">
          <div className="isoDropdownHeader">
            <h3>
              <IntlMessages id="sidebar.message" />
            </h3>
          </div>
          <div className="isoDropdownBody">
            {demoMassage.map(massage => (
              <button className="isoDropdownListItem" key={massage.id}>
                <div className="isoImgWrapper">
                  <img alt="#" src={Image} />
                </div>
  
                <div className="isoListContent">
                  <div className="isoListHead">
                    <h5>{massage.name}</h5>
                    <span className="isoDate">{massage.time}</span>
                  </div>
                  <p>{massage.massage}</p>
                </div>
              </button>
            ))}
          </div>
          <button className="isoViewAllBtn">
            <IntlMessages id="topbar.viewAll" />
          </button>
        </TopbarDropdownWrapper>
      );
    const {
      isActivated,
      // changeThemes,
      // topbarTheme,
      sidebarTheme,
      // layoutTheme,
      // switchActivation,
      // changeTheme
    } = this.props;

    const styleButton = { background: sidebarTheme.buttonColor };

    return (
      <ThemeSwitcherStyle
        className={isActivated ? 'isoThemeSwitcher active' : 'isoThemeSwitcher'}
      >
        <div className="componentTitleWrapper" style={styleButton}>
          <h3 className="componentTitle">
            {/* <IntlMessages id="themeSwitcher.settings" /> */}
            Chat với tui đi
          </h3>
        </div>

        <div className="SwitcherBlockWrapper">
         {content}
         </div>

        <div className="purchaseBtnWrapper">
          <a
            href="https://themeforest.net/item/isomorphic-react-redux-admin-dashboard/20262330?ref=redqteam"
            className="purchaseBtn"
            style={styleButton}
          >
            {/* <IntlMessages id="themeSwitcher.purchase" /> */}
            Demo thôi
          </a>
        </div>

      </ThemeSwitcherStyle>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state.ThemeSwitcher,
    customizedTheme: state.ThemeSwitcher.topbarTheme,
    LanguageSwitcher: state.LanguageSwitcher
  };
}
export default connect(mapStateToProps, {
  switchActivation,
  changeTheme
})(ThemeSwitcher);
