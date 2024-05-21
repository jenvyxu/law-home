import "./App.css";
import Header from "./components/Header";
import Client from "./components/Client";
import Example from "./components/Example";
import Guide from "./components/Guide";

import dayjs from "dayjs";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

export const MenuContext = createContext();

import Home from "./components/Home";
export default function App() {
  const time = dayjs().format("YYYY年MM月DD日");
  const index = new Date().getDay(); // 0-6
  const weekStr = "日一二三四五六";

  const [currentTab, setCurrentTab] = useState({
    key: "home",
    label: "首页",
    to: "/",
  });

  return (
    <div className="h-full flex flex-col">
      <div className="bg-blue-0 leading-8 px-4 text-sm text-white">
        <span>今天是&nbsp;</span>
        <span className="mx-4">{time}</span>
        <span>星期{weekStr[index]}</span>
      </div>
      <Header onClickTab={setCurrentTab} />
      <MenuContext.Provider value={{ currentTab }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Example />} />
          <Route path="/client" element={<Client />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </MenuContext.Provider>
    </div>
  );
}
