import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//import KakaoBtn from 'react-kakao-login';
import axios from 'axios';
import { PUBLIC_IP } from '../../../config';
import { message } from 'antd';

function KakaoSignIn() {
    const history = useHistory();
    const { Kakao } = window;

    console.log("DONE?")
    Kakao.init('690082dcedf6efeca17e320160913cb3');
    console.log(Kakao.isInitialized());

    console.log("what is this?", Kakao.Auth.getAccessToken())

    Kakao.Auth.login({
        scope: 'profile',
        success: (response) => {
            Kakao.API.request({
                url: `/v2/user/me`,
                success: function (response) {
                    console.log("suc", response, "re-email", response.kakao_account.email)
                    axios
                        .post(`${PUBLIC_IP}/user/sign-in`, {
                            // Authorization: response.access_token,
                            email: response.kakao_account.email,
                            provider: 'kakao',
                        })
                        .then((response) => {
                            if (response.status === 200) {
                                console.log('well', response);
                                message.success('로그인이 정상 완료 되었습니다.');
                                history.push(`/`);
                                //setModalVisible(false);
                            }
                        })
                        .catch((error) => {
                            console.log('error?', error.response.request.status);
                            switch (error.response?.request.status) {
                                case 404:
                                    message.error('회원가입이 되지 않은 사용자입니다. 회원가입 페이지로 넘어갑니다.');
                                    history.push(`/register`, {
                                    email: response.kakao_account.email,
                                    provider: 'kakao',
                                    });
                                    break;
                                case 499:
                                    console.log('body가 비어있는 상태입니다.');
                                    break;
                            }
                        })
                }
            })
        },
        fail: function (error) {
            console.log("fail", error);
        }
    })

    return (
        <>
        </>
    )
}

export default KakaoSignIn;