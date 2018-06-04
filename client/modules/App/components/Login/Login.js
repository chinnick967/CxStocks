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
          <button id="login-btn">Login</button>
          <button id="create-account-btn">Create</button>
      </div>
    );
  };
}

export default Login;
