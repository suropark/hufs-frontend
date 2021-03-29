import React, { useState } from 'react';
import SignInModal from './modals/SignInModal';
import SignOnModal from './modals/SignUpModal';

const SignUp = () => {
  const [signUpModalOn, setSignUpModalOn] = useState(false);

  return (
    <>
      <SignInModal />
      {signUpModalOn ? <SignOnModal /> : null}
    </>
  );
};
export default SignUp;
