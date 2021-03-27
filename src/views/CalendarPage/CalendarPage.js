import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import CalendarComponent from '../../components/calendar/CalendarComponent';
import { getScholar } from '../../_actions/calender_action';
function CalendarPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getScholar()).then((response) => {
      switch (response.status) {
        case 401:
          alert('로그인하지 않은 사용자');
          props.history.push('/');
          break;
        case 403:
          alert('접근 권한 오류');
          break;
        case 200:
        default:
          break;
      }
    });
  }, []);
  return (
    <div>
      <CalendarComponent />
    </div>
  );
}

export default withRouter(CalendarPage);
