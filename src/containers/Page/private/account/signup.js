// IMPORT REACT
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// IMPORT COMPONENTs

import SignupForm from './signup_from';

//IMPORT REDUX
import IntlMessages from "components/utility/intlMessages";
//IMPORT STYLES
import SignUpStyleWrapper from "./signup.style";

// import authAction from "redux/auth/actions";
// const { register } = authAction;

class SignUp extends Component {
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
      <SignUpStyleWrapper className="isoSignUpPage">
        <div className="isoSignUpContentWrapper">
          <div className="isoSignUpContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signUpTitle" />
              </Link>
            </div>
            <SignupForm register={this.props.register} />
          </div>
        </div>
      </SignUpStyleWrapper>
    );
  }
}

export default  SignUp;
// export default connect(
//   state => ({
//     isLoggedIn: state.Auth.idToken !== null ? true : false
//   }),
//   // { register }
//   null
// )(SignUp);
