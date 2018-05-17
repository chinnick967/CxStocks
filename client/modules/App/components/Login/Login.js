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
            <h3>Latest Patch Notes</h3>
            <PostListPage />
        </div>
        <div className="login-panel section">
          <h3>Sign Up / Login</h3>
            <form>
              <input type="text" placeholder="Username" name="uname" required />
              <input type="password" placeholder="Password" name="psw" required />
              <input type="submit" id="create" value="Create" />
              <input type="submit" id="login" value="Play" />
            </form>
        </div>
    </div>
  );
}

export default Login;
