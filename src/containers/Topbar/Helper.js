// IMPORT REACT
import React, { Component } from 'react';
import { connect } from 'react-redux';
// COMPONENTS
import Popover from 'components/uielements/popover';
import IntlMessages from 'components/utility/intlMessages';
// REDUX
// import authAction from 'redux/auth/actions';
// actions
// import authActions from '../../redux/auth/actions';
// STYLES
import TopbarDropdownWrapper from './topbarDropdown.style';
// IMAGES
import userpic from 'images/image-cpn/user1.png';

// const { logout } = authAction;
// const { checkAuthorization } = authActions
class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false
    };
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const content = (
      <TopbarDropdownWrapper className="isoUserDropdown">
        <a className="isoDropdownLink"
          onClick={() => {
            this.props.checkAuthorization();
          }}
        >
          <IntlMessages id="themeSwitcher.settings" />
        </a>
        <a className="isoDropdownLink">
          <IntlMessages id="sidebar.feedback" />
        </a>
        <a className="isoDropdownLink">
          <IntlMessages id="topbar.help" />
        </a>
        <a
          className="isoDropdownLink"
          onClick={() => {
            this.props.logout();
          }}
        >
          <IntlMessages id="topbar.logout" />
        </a>
      </TopbarDropdownWrapper>
    );

    return (
    //   <Popover
    //     content={content}
    //     trigger="click"
    //     visible={this.state.visible}
    //     onVisibleChange={this.handleVisibleChange}
    //     arrowPointAtCenter={true}
    //     placement="bottomLeft"
    //   >
        <div className="isoImgWrapper"> 
          <img alt="user" src={userpic} />
          <span className="userActivity online" />
        </div>
    //   </Popover>
    );
  }
}
// export default connect(null, { logout, checkAuthorization })(TopbarUser);
export default connect(null, null)(TopbarUser);
