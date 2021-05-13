import React, { useEffect, useState } from 'react';
import { Calendar, Badge, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { List, Typography, PageHeader, Tag } from 'antd';
import PostSub from '../post/PostSub';
import axios from 'axios';
import { PUBLIC_IP } from '../../config';

function CalendarComponent({ match }) {
  const { CheckableTag } = Tag;
  const dispatch = useDispatch();
  const { scholar } = useSelector((state) => state.calendar);
  const [selectedTag, setSelectedTag] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [tagsData, setTagsData] = useState(['1']);
  // const tagsData = ['기금', '대출', '공통', 'Sports'];
  useEffect(() => {
    setDataList(scholar);
  }, [scholar]);
  useEffect(() => {
    axios.get(`${PUBLIC_IP}/scholarship/option`).then((response) => {
      const optionArray = new Set(
        response.data.data.map((options) => options.name),
      );
      setTagsData(Array.from(optionArray));
    });
    axios
      .get(`${PUBLIC_IP}/scholarship/date`)
      .then((response) => console.log(response.data));
    axios
      .get(`${PUBLIC_IP}/scholarship/campus`)
      .then((response) => console.log(response.data));
    console.log(selectedTag);
  }, [selectedTag]);
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
  const onTag = (event, tag) => {
    if (event) {
      setSelectedTag([...selectedTag, tag]);
    } else {
      setSelectedTag(selectedTag.filter((t) => t !== tag));
    }
  };
  return (
    <div className="community-main">
      <PostSub match={match} />
      <Alert message={`장학금 달력`} />
      <Calendar
        dateCellRender={scholar ? dateCellRender : null}
        // monthCellRender={monthCellRender}
        fullscreen={false}
        onSelect={scholar ? onSelect : null}
      />
      {tagsData.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTag.indexOf(tag) > -1}
          onChange={(event) => onTag(event, tag)}
        >
          {tag}
        </CheckableTag>
      ))}
      <List
        header={
          <div className="scholarhead">
            <div className="s1">주관</div>
            <div className="s2">캠퍼스</div>
            <div className="s3">제목</div>
            <div className="s4">링크</div>
          </div>
        }
        bordered
        dataSource={dataList}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>[{item.Campus.name}]</Typography.Text>{' '}
            <Typography.Text>[{item.ScholarshipOption.name}]</Typography.Text>{' '}
            {item.title}{' '}
            <h4
              onClick={(e) => window.open(item.link)}
              style={{
                display: 'inline-block',
                float: 'right',
                cursor: 'pointer',
              }}
            >
              링크
            </h4>
          </List.Item>
        )}
      />
    </div>
  );
}
export default CalendarComponent;
