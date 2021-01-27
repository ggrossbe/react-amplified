import React, { Component } from 'react';

import { AmplifyAuthenticator } from '@aws-amplify/ui-react'

export default class Login extends Component {
    render() {
        return <AmplifyAuthenticator />
    }
}
