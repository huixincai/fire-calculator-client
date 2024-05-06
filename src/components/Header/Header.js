import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <Link to="/">
        <h2>FIRE Calculator</h2>
      </Link>
      <div className="header__menu">
        <Button onClick={() => navigate("/tips")}>FIRE TIPS</Button>
      </div>
    </header>
  );
};

export default Header;
