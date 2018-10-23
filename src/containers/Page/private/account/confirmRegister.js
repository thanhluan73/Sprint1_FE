// IMPORT REACT
import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// IMPORT COMPONENTs

import ConfirmRegisterForm from './confirmRegister_from';

//IMPORT REDUX
// import IntlMessages from "components/utility/intlMessages";
//IMPORT STYLES
import ConfirmRegisterStyleWrapper from "./confirmRegister.style";

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
      <ConfirmRegisterStyleWrapper className="isoSignUpPage">
        <div className="isoSignUpContentWrapper">
          <div className="isoSignUpContent">
            <div className="isoLogoWrapper">
              <h1>Tạo ID người dùng của bạn</h1>
            </div>
            <ConfirmRegisterForm register={this.props.register} />
          </div>
        </div>
      </ConfirmRegisterStyleWrapper>
    );
  }
}

export default  ConfirmRegister;
// export default connect(
//   state => ({
//     isLoggedIn: state.Auth.idToken !== null ? true : false
//   }),
//   // { register }
//   null
// )(SignUp);
