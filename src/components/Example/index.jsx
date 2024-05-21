import Layout from "../Layout";
import { useState } from "react";
import Category from "./Catrgory";

const Client = () => {
  const [currentDemo, setCurrentDemo] = useState(null);

  const chooseDemo = (demo) => {
    setCurrentDemo(demo);
  };

  const menu = [
    {
      key: "introduce",
      label: "基本介绍",
      child:
        "云解天平——线上规范化调解平台案例库主要包含侵权责任纠纷、知识产权与竞争纠纷、劳动人事纠纷、海商海事纠纷、婚姻家庭纠纷与合同纠纷等六大纠纷板块，二十余个细分板块的真实案例，包括案例的基本案情，法院的诉讼结果，案件的调解式分析结果，以及部分案件的类案真实调解结果。",
    },
    {
      key: "purpose",
      label: "使用方式与目的",
      child:
        "首先案例库根据纠纷类型分为六大板块，二十余个细分板块。当事人结合自身纠纷的实际情况，可以在案例库中通过纠纷板块进行搜寻与检阅，寻找与自身案件较为相似的真实案情，通过案例库中具体案件的“基本案情”“法院诉讼结果”以及“调解式分析”横向对比案件事实并且纵向对比诉讼与调解结果，使当事人对自身案例是否适合使用调解，使用调解解决争端的优势与好处进行全面综合了解。云解天平——线上规范化调解平台案例库也结合“类案类判”的基本原理，将案例库中的部分案例配备了“类案调解”即相似案件的真实调解结果，在此版块能够使当事人在明晰相关真实案件的调解结果的基础上进一步帮助当事人厘清自身案件特性，帮助当事人更理智的选择最适合自己的争端解决方式，通过非对抗性的纠纷解决机制争取自身利益和诉求满足的最大化。",
    },
    {
      key: "characteristic",
      label: "特点",
      child: `(1) 板块分类详尽，细分明确。案例库分为六大主版块，二十余个细分板块，尽可能涵盖民事纠纷涉及领域，方便当事人快速搜索到自身所需案件。
(2) 案情真实详细。案例库案件均取自于北大法宝、裁判文书网、人民法院案例库，能够确保当事人所查案件均为实际案情，为案例库可信度提供保障。
(3) 规范式的调解分析。能让当事人在寻找到与自身案件相似度较高的案件后，对案件采取诉讼和调解两种不同纠纷解决方式的结果有一定的把握，给当事人在纠纷解决方式上有较为清晰的选择依据，让当事人了解调解方式解决案件的优势与特点。
(4) 真实类案调解结果。案例库结合“类案类判”原理，在部分案例后跟进相关真实案例调解结果，提高案例库调解解决方式可信度，并对调解方式的可操作性提供实例支撑。
      `,
    },
    {
      key: "example",
      label: "案例",
      child: () => <Category onClickDemo={chooseDemo} />,
    },
  ];

  const handleClickSideMenu = () => {
    setCurrentDemo(null);
  };

  const renderContent = (data) => (
    <div className="p-4">
      <h1 className="bg-grey-0 text-2xl flex items-end align-middle">
        <img
          src="icon-quote.png"
          className="w-7 h-7 mx-6 object-contain mb-1"
        />
        <span className="py-1">{data.label}</span>
      </h1>
      <div className="py-6 px-7">
        <img src="icon-edit2.png" className="w-7 h-7  object-contain" />
      </div>
      {currentDemo ? (
        <div className="text-2xl ml-24 leading-10 whitespace-pre-wrap">
          {currentDemo.example}
        </div>
      ) : typeof data.child === "function" ? (
        data.child()
      ) : (
        <div className="text-2xl ml-24 leading-10 whitespace-pre-wrap">
          {data.child}
        </div>
      )}
    </div>
  );

  return (
    <Layout
      menu={menu}
      onClickSideMenu={handleClickSideMenu}
      renderContent={renderContent}
      title={currentDemo ? currentDemo.label : ""}
    />
  );
};

export default Client;
