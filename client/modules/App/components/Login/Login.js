import React from 'react';
import { FormattedMessage } from 'react-intl';
import PostListPage from '../../../Post/pages/PostListPage/PostListPage';

// Import Style
import styles from './Login.scss';

export function Login(props) {
  return (
    <div className="login">
        <h1>Pixel</h1>
        <div className="news section">
            <h3>News</h3>
            <PostListPage />
        </div>
        <div className="login-panel section">

        </div>
    </div>
  );
}

export default Login;
