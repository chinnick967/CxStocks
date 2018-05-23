import React from 'react';
import { FormattedMessage } from 'react-intl';
import PostListPage from '../../../Post/pages/PostListPage/PostListPage';

// Import Style
import styles from './Login.scss';

export function Login(props) {
  return (
    <div className="login">
        <h1><img className="header-logo" src={require('../../images/web-pages/Reusable/logo.png')} alt="Pixel logo" /></h1>
        <div className="news section">
            <h3>Latest Patch Notes</h3>
            <PostListPage />
        </div>
        <div className="login-panel section">
          <h3>Sign Up / Login</h3>
            <form>
              <fieldset class="text"><input type="text" placeholder="Username" name="uname" required /></fieldset>
              <fieldset class="text"><input type="password" placeholder="Password" name="psw" required /></fieldset>
              <input type="submit" id="login" value="Play" />
              <input type="submit" id="create" value="Create" />
              <small>Instantly create an account and get in the game!<br /><br /><strong>No download required, free to play</strong></small>
            </form>
        </div>
    </div>
  );
}

export default Login;
