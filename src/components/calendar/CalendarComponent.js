import React from 'react';
import { Calendar, Badge } from 'antd';

function CalendarComponent() {
  function getListData(value) {
    let listData;
    var day = value._d.getUTCDate();
    var month = value._d.getUTCMonth() + 1; //months from 1-12
    var year = value._d.getUTCFullYear();
    console.log(day, month, year);
    switch (
      value.date() // function(day month year) -> 맞는 걸 찾아서 return해주는 함수 작성하면 될 것 같은데? selector쓰면 될듯
    ) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
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
      <Calendar
        dateCellRender={dateCellRender}
        // monthCellRender={monthCellRender}
        fullscreen={false}
        onSelect={onSelect}
      />
    </div>
  );
}
export default CalendarComponent;
