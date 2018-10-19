import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../settings';

export default ({ collapsed }) => {
  return (
    <div className="isoLogoHome" style={{marginRight:'27px',marginTop:'12px'}}>
      {collapsed ? (
        <div>
          <h3 >
            <Link to="/dashboard" >
              <i className={siteConfig.siteIcon} />
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/dashboard">{siteConfig.siteName}</Link>
        </h3>
      )}
    </div>
  );
};
