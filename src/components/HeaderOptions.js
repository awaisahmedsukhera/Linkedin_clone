import React from "react";
import "../assets/styles/Header.css";

const HeaderOptions = ({ title, Icon, Avatar, SignOut }) => {
  return (
    <>
      <div className="HeaderItem">
        {Icon && <Icon />}
        {title && <div>{title}</div>}
        {Avatar && <img src={Avatar} onClick={SignOut}/>}
      </div>
    </>
  );
};

export default HeaderOptions;