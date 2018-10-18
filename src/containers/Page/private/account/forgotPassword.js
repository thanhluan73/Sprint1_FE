// IMPORT REACT
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//IMPORT COMPONENTS
import Input from 'components/uielements/input';
import Button from 'components/uielements/button';
import IntlMessages from 'components/utility/intlMessages';
// IMPORT STYLE
import ForgotPasswordStyleWrapper from './forgotPassword.style';

export default class extends Component {

  handleRequest = () => {
    this.props.history.push("/resetpassword");
  }
  render() {
    return (
      <ForgotPasswordStyleWrapper className="isoForgotPassPage">
        <div className="isoFormContentWrapper">
          <div className="isoFormContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.forgetPassTitle" />
              </Link>
            </div>

            <div className="isoFormHeadText">
              <h3>
                <IntlMessages id="page.forgetPassSubTitle" />
              </h3>
              <p>
                <IntlMessages id="page.forgetPassDescription" />
              </p>
            </div>

            <div className="isoForgotPassForm">
              <div className="isoInputWrapper">
                <Input size="large" placeholder="Email" />
              </div>

              <div className="isoInputWrapper">
                <Button type="primary" onClick={this.handleRequest}>
                  <IntlMessages id="page.sendRequest" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ForgotPasswordStyleWrapper>
    );
  }
}
