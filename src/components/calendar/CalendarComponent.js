import React, { useEffect, useState } from 'react';
import { Calendar, Badge, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { List, Typography, PageHeader, Tag } from 'antd';
import PostSub from '../post/PostSub';
import axios from 'axios';
import { PUBLIC_IP } from '../../config';
import { getScholar } from '../../_actions/calender_action';
import moment from 'moment';
function CalendarComponent({ match }) {
  const { CheckableTag } = Tag;
  const dispatch = useDispatch();
  const { scholar } = useSelector((state) => state.calendar);
  const [selectedOptionTag, setSelectedOptionTag] = useState({ optionId: [] });
  const [selectedCampusTag, setSelectedCampusTag] = useState({ campusId: [] });
  const [dataList, setDataList] = useState([]);
  const [optionTagDatas, setOptionTagDatas] = useState([]);
  const [campusTagDatas, setCampusTagDatas] = useState([]);
  // useEffect(() => {
  //   setDataList(scholar);
  // }, [scholar]);
  useEffect(() => {
    const a =
      selectedCampusTag.campusId.length !== 0 ? selectedCampusTag : null;
    const b =
      selectedOptionTag.optionId.length !== 0 ? selectedOptionTag : null;
    const selectedTags = { ...a, ...b };
    dispatch(getScholar(selectedTags)).then((response) => {
      setDataList(response.payload.data);
      if (Object.keys(selectedTags).length === 0) {
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
      }
    });
  }, [selectedCampusTag, selectedOptionTag]);
  useEffect(async () => {
    await axios.get(`${PUBLIC_IP}/scholarship/option`).then((response) => {
      setOptionTagDatas(response.data.data);
    });
    await axios.get(`${PUBLIC_IP}/scholarship/campus`).then((response) => {
      setCampusTagDatas(response.data.data);
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
  const onOptionTag = (event, tag) => {
    if (event) {
      setSelectedOptionTag({
        optionId: [...selectedOptionTag.optionId, tag],
      });
    } else {
      setSelectedOptionTag({
        optionId: [...selectedOptionTag.optionId.filter((t) => t !== tag)],
      });
    }
  };
  const onCampusTag = (event, tag) => {
    if (event) {
      setSelectedCampusTag({
        campusId: [...selectedCampusTag.campusId, tag],
      });
    } else {
      setSelectedCampusTag({
        campusId: [...selectedCampusTag.campusId.filter((t) => t !== tag)],
      });
    }
  };

  const onViewAll = () => {
    // setSelectedOptionTag({ optionId: [] });
    // setSelectedCampusTag({ campusId: [] });
    dispatch(getScholar()).then((response) => {
      setDataList(response.payload.data);
    });
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
      <div className="scholar-search">
        <div className="scholar-search-type">

          <div
            className="scholar-search-head">
            캠퍼스
            {campusTagDatas.map((tag) => (
              <CheckableTag
                key={tag.id}
                checked={selectedCampusTag.campusId.indexOf(tag.id) > -1}
                // onChange={(event) => onOptionTag(event, tag)}
                onChange={(event) => onCampusTag(event, tag.id)}
              >
                {tag.name}
              </CheckableTag>
            ))}
          </div>
          <div
            className="scholar-search-head">
            유형
            {optionTagDatas.map((tag) => (
              <CheckableTag
                style={{
                  marginLeft: '12px',
                  marginRight: '0px'
                }}
                key={tag.id}
                checked={selectedOptionTag.optionId.indexOf(tag.id) > -1}
                // onChange={(event) => onOptionTag(event, tag)}
                onChange={(event) => onOptionTag(event, tag.id)}
              >
                {tag.name}
              </CheckableTag>
            ))}
          </div>
        </div>
        <span
          className="scholar-search-all"

          onClick={onViewAll}
        >
          전체 보기
      </span>
      </div>

      <List
        header={
          <div className="scholarhead">
            <div className="s1">디데이</div>
            <div className="s2">주관</div>
            <div className="s3">캠퍼스</div>
            <div className="s4">제목</div>
            <div className="s5">링크</div>
          </div>
        }
        bordered
        dataSource={dataList}
        renderItem={(item) => (
          <List.Item>
            <span style={{ display: 'inline-block', fontWeight: 'bold' }}>
              {item.ScholarshipDate === null
                ? null
                : `D ${dDayCheck(item.ScholarshipDate.date)} `}
            </span>{' '}
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

export function dDayCheck(date) {
  const today = moment();
  const dDay =
    today.diff(date, 'days') > 0
      ? `+ ${today.diff(date, 'days')}`
      : `- ${-today.diff(date, 'days')}`;
  return dDay;
}
