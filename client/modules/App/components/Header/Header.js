import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.scss';

import Login from '../Login/Login';

export function Header() {
  return (
    <div className="header">
      <img id="logo" src={require('../../images/icon2.png')} alt="logo" /><span id="logo-title">CxStocks</span>
      <Login />
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
