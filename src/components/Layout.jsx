import { useState, useContext } from "react";
import { MenuContext } from "../App";

const Layout = ({ menu = [], renderContent, title, onClickSideMenu }) => {
  const [activeItem, setActiveItem] = useState(menu[0]);

  const handleClickSideMenu = (item) => {
    onClickSideMenu && onClickSideMenu();
    setActiveItem(item);
  };

  const { currentTab } = useContext(MenuContext);

  return (
    <div className="flex flex-col grow">
      <header className="px-4 py-2 border-b-2 border-bc flex items-center text-lg">
        <span>首页</span>
        <img src="right.png" className="w-4 h-4 object-contain mx-4" />
        <span>{currentTab.label}</span>
        {title ? (
          <>
            <img src="right.png" className="w-4 h-4 object-contain mx-4" />
            <span>{title}</span>
          </>
        ) : null}
      </header>
      <main className="flex grow">
        <ul className="w-1/6 border-r-2 border-bc h-full">
          {menu.map((item) => (
            <li
              key={item.key}
              className="text-center p-3 border-b border-bc hover:cursor-pointer text-xl"
              onClick={() => handleClickSideMenu(item)}
            >
              <span
                className={
                  item.key === activeItem.key
                    ? "border-4 border-blue-1 px-1"
                    : "border-4 border-transparent px-1"
                }
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
        <div className="w-5/6 h-full">{renderContent(activeItem)}</div>
      </main>
    </div>
  );
};

export default Layout;
