import React, { Component } from 'react';
import Image from 'images/image-cpn/rob.png';
import IntlMessages from 'components/utility/intlMessages';
import FourZeroFourStyleWrapper from './404.style';

export default class extends Component {
  handleGoToHome = () => {
    this.props.history.push("/dashboard");
  }
  render() {
    return (
      <FourZeroFourStyleWrapper className="iso404Page">
        <div className="iso404Content">
          <h1>
            <IntlMessages id="page404.title" />
          </h1>
          <h3>
            <IntlMessages id="page404.subTitle" />
          </h3>
          <p>
            <IntlMessages id="page404.description" />
          </p>
          <button type="button" onClick={this.handleGoToHome}>
              <IntlMessages id="page404.backButton" />
          </button>
        </div>

        <div className="iso404Artwork">
          <img alt="#" src={Image} />
        </div>
      </FourZeroFourStyleWrapper>
    );
  }
}
