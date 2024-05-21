import { Fragment } from "react";

const Flow = () => {
  const list = [
    {
      label: "提交纠纷",
      key: "edit",
      url: "icon-edit.png",
    },
    {
      label: "咨询",
      key: "consult",
      url: "icon-user.png",
    },
    {
      label: "评估",
      key: "evaluate",
      url: "icon-paper.png",
    },
    {
      label: "选择解纷团队",
      key: "select",
      url: "icon-pc.png",
    },
    {
      label: "调解成功",
      key: "success",
      url: "icon-paper-checked.png",
    },
  ];
  return (
    <div className="p-4 flex flex-col justify-between border-2 border-home rounded-4xl ">
      <header className="relative w-full flex justify-center items-center before:w-full before:h-1 before:bg-blue-1 -mt-5"></header>
      <h1 className="text-2xl text-blue-1 font-semibold mx-4 mt-2">解纷流程</h1>
      <main className="flex justify-center items-center mt-10">
        {list.map(({ label, url, key }, i) => (
          <Fragment key={key}>
            <div className="mx-8 flex flex-col items-center">
              <img src={url} className="w-14 h-14 object-contain" />
              <p className="text-xl mt-4 text-center">{label}</p>
            </div>
            {i !== list.length - 1 && (
              <div className="mx-4 flex flex-col items-center">
                <img
                  src="icon-arrow.png"
                  className="w-10 h-14 object-contain"
                />
                <p className="text-xl mt-4 text-center">&nbsp;</p>
              </div>
            )}
          </Fragment>
        ))}
      </main>
    </div>
  );
};

export default Flow;
