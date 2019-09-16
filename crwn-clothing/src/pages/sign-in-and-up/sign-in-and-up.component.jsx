import React from "react";
import "./sign-in-and-up.styles.scss";
import SingIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <div className="signInAndUp">
    <SingIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
