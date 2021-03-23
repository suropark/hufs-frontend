import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';

function ShowButton() {
  const [loggedIn, setLoggedIn] = useState(false);
  const success = () => {
    setLoggedIn(true);
    console.log(loggedIn);
  };

  return (
    <div>
      {loggedIn ? (
        <Link to="/">
          <button type="button">Welcome, !</button>
        </Link>
      ) : (
        <Link to="/login">
          <button type="button">로그인</button>
        </Link>
      )}
      <Link to="signOut">
        <button type="button">회원가입</button>
      </Link>
    </div>
  );
}

export default ShowButton;
