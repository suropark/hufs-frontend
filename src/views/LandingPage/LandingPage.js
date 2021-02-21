import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function LandingPage(props) {
  return (
    <div>
      Hello hufs
      <Link to="/list">List</Link>
    </div>
  );
}

export default LandingPage;
