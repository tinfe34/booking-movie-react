import { AppDispatch, RootState } from "configStore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

//img

import avatar from "./../../assets/images/avatar.png";
import button from "./../../assets/images/icons/menu-options.png";
import next from "./../../assets/images/icons/next-session.png";

// scss
import "./Header.scss";

//utill
import { STICKETINFO, TOKEN, TYPE_USER, USERLOGIN } from "ultis/setting";

//component
import HeaderLogo from "components/Header/HeaderLogo/HeaderLogo";
import HeaderNav from "components/Header/HeaderNav/HeaderNav";
import HeaderLogin from "components/Header/HeaderLogin/HeaderLogin";
import HeaderLocation from "components/Header/HeaderLocation/HeaderLocation";

// bootstrap
import Offcanvas from "react-bootstrap/Offcanvas";

import { AlignLeftOutlined } from "@ant-design/icons";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="header">
      <div className="header__inner">
        <HeaderLogo />
        <div className="d-none d-lg-block">
          <HeaderNav />
        </div>
        <div className="header__ultil d-none d-lg-flex">
          <HeaderLogin />
          <HeaderLocation />
        </div>
        <div className="d-lg-none">
          <AlignLeftOutlined className="heder__toggle" onClick={handleShow} />
          <Offcanvas show={show} onHide={handleClose} responsive="lg" className="header__canvas">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <HeaderLogin />
              <HeaderNav />
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </header>
  );
};

export default Header;
