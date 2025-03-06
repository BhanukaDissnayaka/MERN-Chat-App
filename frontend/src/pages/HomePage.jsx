import Sidebar from "../components/Sidebar";
import Menu from "../components/Menu";

const HomePage = () => {
  return (
    <div className="flex h-screen w-full max-w-[1500px] mx-auto ">
      <div>
        <Menu />
      </div>
      <div className="flex-1 basis-1/3 xl:basis-2/7 ">
        <Sidebar />
      </div>
      <div className="flex-1 basis-2/3 xl:basis-5/7 p-10 bg-base-200"></div>
    </div>
  );
};

export default HomePage;
