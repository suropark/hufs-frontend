import React from 'react';
import logo from "../../banner/logo.png";

function Header() {
  return (
    <div className="Head">

      <div className="Pagename"><img src={logo} /></div>
      <img src="#" className="Image" alt="이미지 들어갈 곳" />
      <span className="loginbar">
        <a href="#">회원가입 </a>
        <a href="#">로그인 </a>
        <a href="#">언어선택</a>

      </span>
      <input className="Searchbar" value="검색창" />

      <div className="Menubar" >
        <span>떠들어 Boo</span>
        <span>학교 해 Boo</span>
        <span>학교 간 Boo</span>
        <span>학교 떠난 Boo</span>
        <span>정면승 Boo</span>
        <span>이거 모르면 바 Boo</span>
      </div>

    </div>
  );
}

export default Header;
