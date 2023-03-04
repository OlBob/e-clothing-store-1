import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import "./sign-in.styles.scss"

import { signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' })
    console.table(this.state)
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in'>
        <span className='title'>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            label="email"
            value={email}
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            label="password"
            value={password}
          />
          <div className='buttons'>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
