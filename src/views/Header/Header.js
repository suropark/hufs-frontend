import React from 'react';

function Header() {
  return (
    <div className="Head">

      <div className="Pagename">페이지 이름</div>
      <img src="#" className="Image" alt="이미지 들어갈 곳" />
      <span className="loginbar">
        <a href="#">회원가입 </a>
        <a href="#">로그인 </a>
        <a href="#">언어선택</a>

      </span>
      <input className="Searchbar" value="검색창" />

      <div className="Menubar" >
        <span>커뮤니티</span>
        <span>학사 관련</span>
        <span>졸업생</span>
        <span>생활</span>
        <span>진로/취업</span>
        <span>정보</span>
      </div>

    </div>
  );
}

export default Header;
