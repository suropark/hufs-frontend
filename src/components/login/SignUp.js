import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import SignInModal from './modals/SignInModal';
import SignUpModal from './modals/SignUpModal';

const SignUp = ({ setLogin }) => {
  const [signUpModalOn, setSignUpModalOn] = useState(false);

  return (
    <>
      <SignInModal setLogin={setLogin} />
      {signUpModalOn ? <SignUpModal /> : null}
    </>
  );
};
export default SignUp;
