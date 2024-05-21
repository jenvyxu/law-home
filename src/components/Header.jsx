import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ onClickTab }) => {
  const [list] = useState([
    {
      key: "home",
      label: "首页",
      to: "/",
    },
    {
      key: "example",
      label: "案例库",
      to: "/example",
    },
    {
      key: "guide",
      label: "调解指南",
      to: "/guide",
    },
    {
      key: "team",
      label: "调解团队",
      to: "/team",
    },
    {
      key: "law",
      label: "法律法规",
      to: "/law",
    },
    {
      key: "client",
      label: "客服",
      to: "/client",
    },
  ]);

  return (
    <div
      className="flex items-center py-3  text-white"
      style={{
        background: "linear-gradient(90deg, #1A78DA 29.44%, #e3f1ff 100%)",
      }}
    >
      <img src="balance.png" className="w-20 h-20 object-contain ml-4" />
      <div className="left mr-auto">
        <img src="logo.png" alt="" />
      </div>
      <div className="right flex items-center text-2xl font-bold mr-12">
        {list.map((item) => (
          <NavLink
            to={item.to}
            key={item.key}
            className={({ isActive }) =>
              isActive ? "border-5 border-white" : "border-5 border-transparent"
            }
            onClick={() => onClickTab(item)}
          >
            <div className="px-6 py-2">{item.label}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
