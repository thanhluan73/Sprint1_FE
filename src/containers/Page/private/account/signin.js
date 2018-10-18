// IMPORT REACT
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// IMPORT COMPONENTS
import Input from "components/uielements/input";
import Checkbox from "components/uielements/checkbox";
import Button from "components/uielements/button";
//IMPORT REDUX
// import authAction from "redux/auth/actions";
// import appAction from "redux/app/actions";
import IntlMessages from "components/utility/intlMessages";
// IMPORT STYLE
import SignInStyleWrapper from "./signin.style";

// const { login } = authAction;
// const { clearMenu } = appAction;

class SignIn extends Component {
  componentWillMount() {
    if (this.props.isLoggedIn) {
      this.props.history.push("/dashboard");
    }
  }

  handleLogin = () => {
    const { login, clearMenu } = this.props;
    const userInfo = {
      username: document.getElementById('inputUserName').value || '',
      password: document.getElementById('inpuPassword').value || ''
    };

    login({ userInfo });
    clearMenu();
  };

  handleRegister = () => {
    this.props.history.push("/signup");
  }

  render() {
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>

            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <Input size="large" placeholder="Username" id="inputUserName" />
              </div>

              <div className="isoInputWrapper">
                <Input size="large" type="password" placeholder="Password" id="inpuPassword" />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button type="primary" onClick={this.handleLogin}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>

              <div className="isoCenterComponent isoHelperWrapper">
                <Link to="/forgotpassword" className="isoForgotPass">
                  <IntlMessages id="page.signInForgotPass" />
                </Link>
                <Button type="primary" onClick={this.handleRegister} className='button__hl'>
                  <IntlMessages id="page.signInCreateAccount" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default connect(
  // state => ({
  //   isLoggedIn: state.Auth.idToken !== null ? true : false
  // }),
  // { login, clearMenu }
  null,
  null
)(SignIn);
