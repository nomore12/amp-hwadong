// @flow
import * as React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(Login);
