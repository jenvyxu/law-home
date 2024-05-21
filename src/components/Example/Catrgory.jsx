import { useState } from "react";
import { catrgory } from "./constant";

const Category = ({ onClickDemo }) => {
  // console.log("onClickDemo", onClickDemo);

  const [visibleList, setVisibleList] = useState([]);

  const isVisible = (key) => visibleList.includes(key);

  const handleClickItem = (key) => {
    const index = visibleList.findIndex((item) => item === key);
    if (index > -1) {
      const newList = visibleList.reduce(
        (res, cur) => (cur === key ? res : [...res, cur]),
        []
      );
      setVisibleList(newList);
    } else {
      setVisibleList((old) => [...old, key]);
    }
    // setCurrentDemo(null);
  };

  return (
    <div className="text-xl ml-7 flex justify-between ">
      {catrgory.map((item) => {
        const { key, label, children } = item;
        return (
          <div key={key} className="flex flex-col items-center">
            <h1
              className="text-2xl font-bold hover:cursor-pointer"
              onClick={() => handleClickItem(key)}
            >
              {label}
            </h1>
            <img
              src="icon-arrow-down.png"
              className="w-10 h-10 -mb-6 object-contain"
            />
            {isVisible(key) ? (
              <ul>
                {children.map((item2) => (
                  <li
                    key={item2.key}
                    className="text-center my-8 hover:cursor-pointer"
                    onClick={() => onClickDemo(item2)}
                  >
                    {item2.label}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Category;
