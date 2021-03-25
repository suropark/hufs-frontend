import React from 'react';
import { Calendar, Badge } from 'antd';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function CalendarComponent() {
  const { scholar } = useSelector((state) => state.calendar);
  useEffect(() => {}, []);
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
        return { type: 'success', content: e.title };
      }) || []
    );
  }

  function dateCellRender(value) {
    const listData = getListData(value); // getlistdata에서 날짜 별로 데이터를 줘야함
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  const onSelect = (e) => {
    console.log(e);
  };

  // function getMonthData(value) {
  //   if (value.month() === 8) {
  //     return 1394;
  //   }
  // }

  // function monthCellRender(value) {
  //   const num = getMonthData(value);
  //   return num ? (
  //     <div className="notes-month">
  //       <section>{num}</section>
  //       <span>Backlog number</span>
  //     </div>
  //   ) : null;
  // }
  return (
    <div>
      {scholar ? (
        <Calendar
          dateCellRender={dateCellRender}
          // monthCellRender={monthCellRender}
          fullscreen={false}
          onSelect={onSelect}
        />
      ) : null}
    </div>
  );
}
export default CalendarComponent;
