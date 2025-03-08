import Sidebar from "../components/Sidebar";
import Menu from "../components/Menu";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  return (
    <div className="flex h-screen w-full max-w-[1500px] mx-auto ">
      <div>
        <Menu />
      </div>
      <div className="flex-1 basis-1/3 xl:basis-2/7 ">
        <Sidebar />
      </div>
      <div className="flex-1 basis-2/3 xl:basis-5/7  bg-base-200">
        <ChatContainer />
      </div>
    </div>
  );
};

export default HomePage;
