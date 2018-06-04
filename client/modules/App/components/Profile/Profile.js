// import React from 'react';
import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Profile.scss';

export class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="desc">
            <h3>Bjorn</h3>
            <div>Stocks: <span>567</span></div>
            <div>Stock value: <span>$2.35</span></div>
        </div>
        <button className="">Trade Stocks</button>
      </div>
    );
  };
}

export default Profile;
