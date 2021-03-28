import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import SignUpModal from './modals/signUPModal';
import SignInModal from './modals/signInModal';


const SignUp = () => {
    
    const [signInModalOn, setSignInModalOn] = useState(false);
    const [signUpModalOn, setSignUpModalOn] = useState(false);
    const [value, setValue] = useState(false);
    const [signInT, setSignIn] = useState(false);

    return (
        <div>
            <SignInModal
            show={signInModalOn}
            onHide={() => setSignInModalOn(false)} />
            <Button variant="primary" onClick={()=>setSignInModalOn(true)}>
                Sign In
            </Button>
        </div>
    )
}
export default SignUp;