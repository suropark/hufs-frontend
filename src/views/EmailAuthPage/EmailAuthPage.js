import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authEmail } from '../../_actions/user_action';
import AuthSuccess from '../../components/webmail/AuthSuccess';
import AuthAlready from '../../components/webmail/AuthAlready';
import { Skeleton } from 'antd';
import AuthExpired from '../../components/webmail/AuthExpired';
import Page404 from '../Page404/Page404';
function EmailAuthPage(props) {
  const [loading, setloading] = useState(true);
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authEmail(props))
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
      default:
        return <Page404 />;
        break;
    }
  }
  return <div>{loading ? <Skeleton></Skeleton> : stautsRender()}</div>;
}

export default EmailAuthPage;
