import React, { Component } from '../../../../../../../../../../home/ntu657/.cache/typescript/2.9/node_modules/@types/react/../../../../../../../../home/ntu657/.cache/typescript/2.9/node_modules/@types/react';
import { Link } from '../../../../../../../../../../home/ntu657/.cache/typescript/2.9/node_modules/@types/react-router-dom./../../../../home/ntu657/.cache/typescript/2.9/node_modules/@types/react-router-dom';
import Image from '../../image/rob.png';
import IntlMessages from '../../../components/utility/intlMessages';
import FiveZeroZeroStyleWrapper from './500.style';

export default class extends Component {
  render() {
    return (
      <FiveZeroZeroStyleWrapper className="iso500Page">
        <div className="iso500Content">
          <h1>
            <IntlMessages id="page500.title" />
          </h1>
          <h3>
            <IntlMessages id="page500.subTitle" />
          </h3>
          <p>
            <IntlMessages id="page500.description" />
          </p>
          <button type="button">
            <Link to="/dashboard">
              <IntlMessages id="page500.backButton" />
            </Link>
          </button>
        </div>

        <div className="iso500Artwork">
          <img alt="#" src={Image} />
        </div>
      </FiveZeroZeroStyleWrapper>
    );
  }
}
