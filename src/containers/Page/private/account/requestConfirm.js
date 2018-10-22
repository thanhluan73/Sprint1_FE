// IMPORT REACT
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from 'components/uielements/input';
import Button from 'components/uielements/button';
import { connect } from "react-redux";
// IMPORT COMPONENTs

//IMPORT REDUX
import IntlMessages from "components/utility/intlMessages";
//IMPORT STYLES
import RequestConfirmStyleWrapper from "./requestConfirm.style";

// import authAction from "redux/auth/actions";
// const { register } = authAction;

class ConfirmRegister extends Component {
  componentWillMount() {
    if (this.props.isLoggedIn) {
      this.props.history.push("/dashboard");
    }
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  render() {
    return (
        <RequestConfirmStyleWrapper className="isoResetPassPage">
        <div className="isoFormContentWrapper">
          <div className="isoFormContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.resetPassTitle" />
              </Link>
            </div>
            <b><p>Yêu cầu đã được ghi nhận!</p></b>
            Quý khách vui lòng chờ đợi và kiểm tra mail trong vòng 20 phút.
            <br/>
            <br/>
            <br/>
            <br/>
            <Link to="/">
                <h3 align="center">Back to sign in</h3>
            </Link>
          </div>
        </div>
      </RequestConfirmStyleWrapper>
    );
  }
}

export default  ConfirmRegister;