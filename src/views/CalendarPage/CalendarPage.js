import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CalendarComponent from '../../components/calendar/CalendarComponent';
import { getScholar } from '../../_actions/calender_action';
function CalendarPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getScholar());
  }, []);
  return (
    <div>
      <CalendarComponent />
    </div>
  );
}

export default CalendarPage;
