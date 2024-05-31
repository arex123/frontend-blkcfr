import React from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
import { sidemenu } from "../../data";
const Menu = () => {
  return (
    <div className="menu">
      {sidemenu && sidemenu.map((menu,index)=><div key={menu.id} className="item">
        <div className="title">{menu.title}</div>
        {menu && menu.listItem.map((item,index)=>
        <Link key={item.id} to="/" className="listItem">
          {item.icon}
          <span>{item.title}</span>
        </Link>
        )}
      </div>)}
    </div>
  );
};

export default Menu;
