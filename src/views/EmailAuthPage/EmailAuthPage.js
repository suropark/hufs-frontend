import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authEmail } from '../../_actions/user_action';
import AuthSuccess from '../../components/webmail/AuthSuccess';
import AuthAlready from '../../components/webmail/AuthAlready';
import { Skeleton } from 'antd';
import AuthExpired from '../../components/webmail/AuthExpired';
import Page404 from '../Page404/Page404';
import AuthUnauthorized from '../../components/webmail/AuthUnauthorized';
function EmailAuthPage(props) {
  // console.log(props);
  const [loading, setloading] = useState(true);
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const token = props.location.search.substring(7);
  useEffect(() => {
    console.log(token);
    dispatch(authEmail(token))
      .then((response) => {
        setStatus(response.status);
        setloading(false);
      })
      .catch((error) => {
        setStatus(error.response?.status);
        setloading(false);
      });
  }, []);
  function stautsRender() {
    switch (status) {
      case 200:
        return <AuthSuccess />;
      case 419:
        return <AuthExpired />;
      case 409:
        return <AuthAlready />;
      case 401:
        return <AuthUnauthorized />;
      default:
        return <Page404 />;
        break;
    }
  }
  return <div>{loading ? <Skeleton></Skeleton> : stautsRender()}</div>;
}

export default EmailAuthPage;
