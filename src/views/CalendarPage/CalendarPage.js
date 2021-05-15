import { message } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import CalendarComponent from '../../components/calendar/CalendarComponent';
import { getScholar } from '../../_actions/calender_action';
import Header from '../Header/Header';
import Quick from '../Quick/Quick';
function CalendarPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getScholar())
      .then((response) => {})
      .catch((error) => {
        switch (error.response?.status) {
          case 401:
            message.error('로그인하지 않은 사용자');
            props.history.push('/');
            break;
          case 403:
            message.error('접근 권한 오류');
            break;
          default:
            break;
        }
      });
  }, []);
  return (
    <div>
      <Header />
      <Quick />

      <CalendarComponent match={props.match} />
    </div>
  );
}

export default withRouter(CalendarPage);
