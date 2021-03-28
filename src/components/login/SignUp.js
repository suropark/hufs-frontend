import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import SignInModal from './modals/SignInModal';
import SignOnModal from './modals/SignUpModal';

const SignUp = () => {
  const [signUpModalOn, setSignUpModalOn] = useState(false);
  //   const [signUpModalOn, setSignUpModalOn] = useState(false);
  //   const [value, setValue] = useState(false);
  //   const [signInT, setSignIn] = useState(false);

  return (
    <>
      <SignInModal />
      {signUpModalOn ? <SignOnModal /> : null}
    </>
  );
};
export default SignUp;
