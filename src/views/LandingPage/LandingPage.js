import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
function LandingPage(props) {
  return (
    <div>
      <div
        style={{
          border: '1px solid violet',
          position: 'fixed',
          width: '160px',
          height: '300px',
          marginLeft: '1250px',
          marginTop: '180px',
        }}
      >
        <div>
          <ul>
            <li style={{ textAlign: 'center' }}>퀵 링크</li>

            <a
              href="https://wis.hufs.ac.kr/src08/jsp/index.jsp"
              target="_blank"
            >
              <li> 종합정보시스템</li>
            </a>
            <li>시간표</li>
            <li>장학 게시판</li>
            <li>과 게시판</li>
          </ul>
        </div>
      </div>
      <div style={{ width: '800px', margin: '0 auto' }}>
        <div
          className="logo"
          style={{ display: 'inline-block', height: '70px' }}
        >
          <img src="#" alt="이미지 들어갈 곳" />
        </div>
        <span style={{ float: 'right' }}>
          <a href="#">회원가입 </a>
          <a href="#">로그인 </a>
          <a href="#">언어선택</a>
          <div>
            <input value="검색창" />
          </div>
        </span>

        <div
          style={{
            marginLeft: '150px',
            display: 'flex',
            justifyContent: 'space-around',
            paddingBottom: '40px',
          }}
        >
          <span>커뮤니티</span>
          <span>학사 관련</span>
          <span>졸업생</span>
          <span>생활</span>
          <span>진로/취업</span>
          <span>정보</span>
        </div>
        <div
          style={{
            position: 'relative',
            border: '1px solid violet',
            width: '700px',
            height: '300px',
            marginLeft: '100px',
          }}
        ></div>
      </div>
    </div>
  );
}

export default LandingPage;
