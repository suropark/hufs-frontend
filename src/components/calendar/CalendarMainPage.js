import React, { useEffect, useState } from 'react';
import { Calendar, Badge, message } from 'antd';
import { useDispatch } from 'react-redux';
import { Button, List, Typography } from 'antd';
import { getScholar } from '../../_actions/calender_action';
import { withRouter } from 'react-router';
import { dDayCheck } from './CalendarComponent';
import moment from 'moment';
function CalendarMainPage(props) {
  const dispatch = useDispatch();
  const [dataList, setDataList] = useState([]);
  const [scholar, setscholar] = useState([]);
  useEffect(() => {
    dispatch(getScholar())
      .then((response) => {
        setscholar(response.payload.data);
        const selectedMatchedData = response.payload.data.filter((e) => {
          if (e.ScholarshipDate === null) {
            return null;
          } else {
            let x = moment(e.ScholarshipDate.date);
            let today = moment();
            return (
              x.date() === today.day() &&
              x.month() + 1 === today.date() &&
              x.year() === today.year()
            );
          }
        });
        setDataList(selectedMatchedData);
      })
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

  function getListData(value) {
    let day = value._d.getUTCDate();
    let month = value._d.getUTCMonth() + 1; //months from 1-12
    let year = value._d.getUTCFullYear();
    const matchedData = scholar.filter((e) => {
      if (e.ScholarshipDate === null) {
        return null;
      } else {
        let x = new Date(e.ScholarshipDate.date);
        return (
          x.getDate() === day &&
          x.getMonth() + 1 === month &&
          x.getFullYear() === year
        );
      }
    });

    return (
      matchedData.map((e) => {
        return { type: 'success', content: e.title.slice(0, 4) };
      }) || []
    );
  }

  function dateCellRender(value) {
    const listData = getListData(value); // getlistdata에서 날짜 별로 데이터를 줘야함
    return (
      <ul className="events">
        {/* {listData.map((item, index) => (
          <li key={index}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))} */}
        {listData.length === 0 ? null : (
          <Badge status={'success'} text={listData.length} />
        )}
      </ul>
    );
  }
  const onSelect = (value) => {
    let selectedDay = value._d.getUTCDate();
    let selectedMonth = value._d.getUTCMonth() + 1; //months from 1-12
    let selectedYear = value._d.getUTCFullYear();
    const selectedMatchedData = scholar.filter((e) => {
      if (e.ScholarshipDate === null) {
        return null;
      } else {
        let x = new Date(e.ScholarshipDate.date);
        return (
          x.getDate() === selectedDay &&
          x.getMonth() + 1 === selectedMonth &&
          x.getFullYear() === selectedYear
        );
      }
    });
    setDataList(selectedMatchedData);
  };

  return (
    <div>
      <div className="site-calendar-demo-card">
        <Calendar
          dateCellRender={scholar ? dateCellRender : null}
          // monthCellRender={monthCellRender}
          fullscreen={false}
          onSelect={onSelect}
        />
      </div>
      <div>
        <List
          style={{ height: '354px' }}
          header={
            <div className="main-Calendar-head">
              <span>장학금</span>
              <Button
                style={{ float: 'right' }}
                type="text"
                onClick={(e) => setDataList(scholar)}
              >
                전체 보기
              </Button>
            </div>
          }
          bordered
          dataSource={dataList}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text>[{item.Campus.name}]</Typography.Text>{' '}
              <Typography.Text>[{item.ScholarshipOption.name}]</Typography.Text>{' '}
              <span
                style={{ cursor: 'pointer' }}
                onClick={(e) => window.open(item.link)}
              >
                {item.title}
              </span>{' '}
              <span style={{ display: 'inline-block', fontWeight: 'bold' }}>
                {item.ScholarshipDate === null
                  ? null
                  : `D ${dDayCheck(item.ScholarshipDate.date)}`}
              </span>
              {/* <h4
                onClick={(e) => window.open(item.link)}
                style={{
                  display: 'inline-block',
                  float: 'right',
                  cursor: 'pointer',
                }}
              >
                링크
              </h4> */}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
export default withRouter(CalendarMainPage);
