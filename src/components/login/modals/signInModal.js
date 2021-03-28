import { render } from "@testing-library/react";
import React from "react";
import { Modal, Button, Form, Container } from 'react-bootstrap';
import {GoogleLogin } from 'react-google-login';
import kakaoLogin from "../kakaoSignIn";
import axios from 'axios';
import SignUpModal from './signUpModal';

const SignInModal = ({show, onHide}) => {

    const signInGoogle = async (e) => {
        const requset = await axios.get(`http://52.78.2.40:8080/user/sign-in/google`)
        .then((response) => {
                console.log("Sign in Successfully");
                alert(response);
        })
        .catch((e) => {
            console.log(e)
            if(e.message) {
                alert("Sign in fail")
                // <SignUpModal /> moveToSignUpPage
            }
        })
        // await fetch(`http://localhost:8080/user/sign-in/google`, {
        //         method: "GET",
                
        //     })
        //     .then((res) => res.json())
        //     .then((res) => {
        //         console.log(res);
        //         //localStorage.setItem("Kakao_token", res.access_token);
        //         // if (res.code === 200) {
        //         //     alert("Sign in Successfully!");
        //         //     //history.pushState("/");
        //         // } else {
        //         //     alert("Wrong information, or you're not member");   
        //         // }
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //     });
    }

    const signInKakao = async(e) => {
        const request = await axios.get(`http://52.78.2.40:8080/user/sign-in/kakao`)
        .then((response) => {
            console.log("Sign in Successfully");
            alert(response);
        })
        .catch((e) => {
            if(e.message) {
                alert("Sign in fail")
            }
        })
    }

    return (
        <Modal show={show}

        onHide={onHide}
        
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Container>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <button id="customBtn" className="customG" style={{display:"inline"}} onClick={signInGoogle}>
                        구글로그인
                </button>
                <button id="customBtn" className="customK" style={{display:"inline"}} onClick={signInKakao}>
                        카카오로그인
                </button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
            </Container>
        </Modal>

    )
}

export default SignInModal;

