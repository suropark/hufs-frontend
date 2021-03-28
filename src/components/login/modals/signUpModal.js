import React from "react";
import { Modal, Button, Form, Container } from 'react-bootstrap';
import {GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { useState, useEffect } from 'react';

const SignUpModal = ({show, onHide}) => {
    const [ major, setMajor ] = useState([]);
    const [ doubleMajor, setDoubleMajor] = useState([])
    const [ submit, setSubmit] =useState({nickname: "", webMail: "",  isAggred: false});
    useEffect(async () => {
        const request1 = await axios.get(`http://52.78.2.40:8080/major/main-major`) //1전공
        .then((response) => response.data.data) // 배열 [id, name ]
        setMajor(request1)
        console.log(request1);

        const request2 = await axios.get(`http://52.78.2.40:8080/major/double-major`) //이중전공
        .then((response) => response.data.data) // 배열 [id, name ]
        setDoubleMajor(request2)
        console.log(request2);  
    }, [])
  
useEffect(() => {
    console.log(submit)
}, [submit])

    const onSubmit = async (e) => {
        e.preventDefault();
        const request = await axios.post('http://52.78.2.40:8080/user/sign-up', submit)
        console.log(request.status)

    }
    
    return (
        <Modal
            show={show}

            onHide={onHide}
            
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Container>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">회원가입</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicNickname">
                    <Form.Label>닉네임</Form.Label>
                    <Form.Control value={submit.nickname} onChange={event => setSubmit({...submit, nickname: event.target.value})}   placeholder="닉네임을 입력하세요" />
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>
                
                <Form.Group controlId="formBasicWebMail">
                    <Form.Label>웹메일</Form.Label>
                    <Form.Control value={submit.webMail} onChange={event => setSubmit({...submit, webMail: event.target.value})} placeholder="웹메일/지메일(G-suite) 입력하세요" />
                    <Form.Text className="text-muted">
                    @hufs.ac.kr 앞 부분까지만 입력해주세요.
                    <br/>위 웹메일로 학생 확인 인증 메일이 발송됩니다. 인증까지는 최대 24시간이 소요됩니다.
                    </Form.Text>
                </Form.Group>

                <Form.Control onChange={event => setSubmit({...submit, mainMajorId: +event.target.value})} as="select">
                    <Form.Label>1전공</Form.Label>
                    {doubleMajor ? doubleMajor.map((item) => {
                        return (
                            <option value={item.id}>{item.name}</option>
                        )
                    }) : null }
                 
                </Form.Control>
                <Form.Group controlId="formBasicMinor">
                    <Form.Label>이중전공</Form.Label>
                    <Form.Control onChange={event => setSubmit({...submit, doubleMajorId: +event.target.value})} as="select"  placeholder="이중전공/부전공을 입력하세요" >
                    {major ? major.map((item) => {
                        return (
                            <option value={item.id}>{item.name}</option>
                        )
                    }) : null } 
                    </Form.Control>

                </Form.Group>
                <Form.Text className="text-muted">
                    전공 변경은 한 번만 가능합니다. 정확하게 입력해주세요.
                </Form.Text>
                <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="동의합니다" onClick={event => setSubmit({...submit, isAggred: true})} />
                </Form.Group>
                <Button onClick={onSubmit} variant="primary" type="submit">
                    회원가입
                </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
            </Container>
        </Modal>
    )
} 

export default SignUpModal;