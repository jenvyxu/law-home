import Layout from "../Layout";
import { dailog } from "./constant";
console.log(dailog);

const Client = () => {
  const renderItem = () => (
    <div>
      <div
        className="p-16"
        style={{
          height: "calc(100vh - 320px)",
          overflowY: "scroll",
        }}
      >
        {dailog.map(({ type, content }, i) =>
          type === "ask" ? (
            <div className="flex justify-end mb-8 mx-4" key={i}>
              <div className="w-50px flex items-center shrink-0 mr-8">
                {/* <img src="icon-client.png" className="w-full object-contain" /> */}
              </div>
              <div className="border-2 border-bc rounded-xl p-2 ml-auto">
                {content}
              </div>
              <div className="w-50px flex items-center shrink-0 ml-8">
                <img src="icon-user-1.png" className="w-full object-contain" />
              </div>
            </div>
          ) : (
            <div className="flex justify-start mb-8 mx-4" key={i}>
              <div className="w-50px flex items-center shrink-0 mr-8">
                <img src="icon-client.png" className="w-full object-contain" />
              </div>
              <div className="border-2 border-bc rounded-xl p-2 mr-auto">
                {content}
              </div>
              <div className="w-50px flex items-center shrink-0 ml-8"></div>
            </div>
          )
        )}
      </div>
      <footer className="flex items-center justify-center text-2xl my-8">
        <input
          type="text"
          placeholder="请输入你的问题"
          className="h-full bg-white p-3 border-2 border-home w-2/3 focus:outline-none"
        />
        <div className="px-16 py-3 bg-blue-1 text-white">提问</div>
      </footer>
    </div>
  );

  return <Layout renderContent={renderItem} />;
};

export default Client;
