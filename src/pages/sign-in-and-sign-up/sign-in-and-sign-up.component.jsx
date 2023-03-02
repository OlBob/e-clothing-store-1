import React from "react";

import "./sign-in-and-sign-up.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";

const SignInAndSignUp = () => {
  return (
    <div>
      <h1>I already have an account</h1>
      <SignIn />
    </div>
  )
}

export default SignInAndSignUp