import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import './forgotpassword.style.css';
import { Input, Button } from 'antd';

class ForgotPassword extends Component {
  state = {
    redirectToReferrer: false,
    btnLoadding:false,
  };
  handleSubmit = (e,props) => {
    e.preventDefault();
    this.props.history.push("/company");
    // this.setState({btnLoadding:true});
    // props.form.validateFields((err, values) => {
    //   if (!err) {
    //     var user={
    //         email:values.username,
    //         password:values.password
    //     }
    //     this.props.handleLogin(user);
    //   }
    // });
  }
  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }
  handleLogin = () => {
    // const { login, clearMenu } = this.props;
    // login();
    // clearMenu();
    this.props.history.push("/company");
  };
  render() {
    const from = { pathname: "/dashboard" };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    } 
    return (
        
      <div className="SignInForgotWrapper">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
                <h2>PROPTECH PLUS</h2> 
            </div>
            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <b><p className="fontsize">Forgot Password?</p></b>
                <p className="fontsize1">Enter your email and we send you a reset link.</p>
                <Input placeholder="Your email" class="input"/>
                <Button type="primary" block style={{marginTop: '15px'}}>Send request</Button>
                <hr className="hrline" />
              </div>
              <div>
                <Link to="/login" className="back">
                    <b><p>Back to sign in</p></b>
                </Link>
                <Button type="danger" block style={{marginTop: '35px'}}>Register new account</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (ForgotPassword);
