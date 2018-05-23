import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Home-Nav-Bar.scss';

export function HomeNavBar(props) {
  return (
    <div className="anchor-tabs">
      <a href="#gameplay" className="selecteds"><img className="icon-tab" src={require('../../images/web-pages/Reusable/Icons/gameplay.png')} /><small>Gameplay</small></a>
      <a href="#news"><img className="icon-tab" src={require('../../images/web-pages/Reusable/Icons/news.png')} /><small>Latest News</small></a>
      <a href="#cards"><img className="icon-tab" src={require('../../images/web-pages/Reusable/Icons/cards.png')} /><small>Cards</small></a>
      <a href="#features"><img className="icon-tab" src={require('../../images/web-pages/Reusable/Icons/features.png')} /><small>Features</small></a>
      <a href="#howto"><img className="icon-tab" src={require('../../images/web-pages/Reusable/Icons/howto.png')} /><small>How to Play</small></a>
      <img id="left" className="arrow-btn" src={require('../../images/web-pages/Reusable/Icons/hide_n.png')} />
      <img id="right" className="arrow-btn" src={require('../../images/web-pages/Reusable/Icons/show_n.png')} />
    </div>
  );
}

export default HomeNavBar;
