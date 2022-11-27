// @flow
import * as React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function Login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}

export default withAuthenticator(Login);
