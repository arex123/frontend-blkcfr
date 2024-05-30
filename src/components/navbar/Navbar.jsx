import "./navbar.scss";
import {
  SearchOutlined,
  AppstoreOutlined,
  ExpandOutlined,
  BellOutlined,
  SettingOutlined,
  UserOutlined
} from "@ant-design/icons";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="vite.svg" alt="" />
        <span>Dashboard</span>
      </div>
      <div className="icons">
        <SearchOutlined />
        <AppstoreOutlined />
        <ExpandOutlined />
        <div className="notifications">
          <BellOutlined />
          <span className="notifications-number">1</span>
        </div>
        <div className="user">
          <UserOutlined />
          <span>Admin</span>
        </div>
        <SettingOutlined />
      </div>
    </div>
  );
};

export default Navbar;
