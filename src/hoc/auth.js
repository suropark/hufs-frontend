import { message } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {
  //specificComponent = 안에 넣을 컴포넌트

  // option  null = 아무나
  //         true = 로그인한 유저,  false = 로그인 안한 유저

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    console.log(props);
    useEffect(() => {
      dispatch(auth())
        .then((response) => {
          console.log(response);

          // 로그인 하지 않은 상태 isAuth : false?
          // if (!response.payload.isAuth) {
          //   alert('로그인이 필요한 게시판입니다.');
          //   props.history.push('/');
          // } else {
          //   // 로그인 된 상태
          //   // admin이 아닌데 admin전용으로 가려할 때
          //   if (adminRoute && !response.payload.admin) {
          //     alert('관리자가 아닙니다');
          //     props.history.push('/');
          //   }
          // }
        })
        .catch((error) => {
          message.error('웹메일 인증이 필요합니다.');
          return;
        });
    }, []);

    return <SpecificComponent props={props} />;
  }

  return AuthenticationCheck;
}
