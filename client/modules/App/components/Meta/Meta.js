// import React from 'react';
import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Meta.scss';

import Profile from '../Profile/Profile';

export class Meta extends Component {
  render() {
    return (
      <div className="meta">
        <h1>Current Meta</h1>
        <section>
            <h2>God Tier</h2>
            <div className="profiles"><Profile /><Profile /><Profile /></div>
        </section>
        <section>
            <h2>A Tier</h2>
            <div className="profiles"></div>
        </section>
        <section>
            <h2>B Tier</h2>
            <div classNames="profiles"></div>
        </section>
        <section>
            <h2>C Tier</h2>
            <div className="profiles"></div>
        </section>
        <section>
            <h2>Irrelevant/Unpopular Tier</h2>
            <div className="profiles"></div>
        </section>
        <section>
            <h2>Trash Tier</h2>
            <div className="profiles"></div>
        </section>
      </div>
    );
  };
}

export default Meta;
