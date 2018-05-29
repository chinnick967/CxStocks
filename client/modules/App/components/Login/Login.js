// import React from 'react';
import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import PostListPage from '../../../Post/pages/PostListPage/PostListPage';

// Import Style
import styles from './Login.scss';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleCreate(event) {
    event.preventDefault();
   const data = new FormData(event.target);

    fetch('/login/create', {
      method: 'POST',
      body: data
    }).then(response => {
        console.log("Created!");
        console.log(response);
    });
  }

  handleLogin(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/login/sign-in', {
      method: 'POST',
      body: data
    }).then(response => {
      console.log("Signed in!");
      console.log(response);
    });
  }

  render() {
    return (
      <div className="login">
          <h1><img className="header-logo" src={require('../../images/web-pages/Reusable/logo.png')} alt="Pixel logo" /></h1>
          <div className="news section">
              <h3>Latest Patch Notes</h3>
              <PostListPage />
          </div>
          <div className="login-panel section">
            <h3>Sign Up / Login</h3>
              <form onSubmit={this.handleLogin}>
                <fieldset className="text"><input type="text" placeholder="Username" name="uname" required /></fieldset>
                <fieldset className="text"><input type="password" placeholder="Password" name="psw" required /></fieldset>
                <input type="submit" id="login" value="Play" onClick={this.handleLogin} />
                <input type="submit" id="create" value="Create" onClick={this.handleCreate} />
                <small>Instantly create an account and get in the game!<br /><br /><strong>No download required, free to play</strong></small>
              </form>
          </div>
      </div>
    );
  };
}

export default Login;
