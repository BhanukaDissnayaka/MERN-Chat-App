import Menu from "../components/Menu";

const HomePage = () => {
  return (
    <div class="flex h-screen w-full">
      <div class=" bg-red-200 ">
        <Menu />
      </div>
      <div class="flex-1 basis-1/3 bg-blue-300 ">Middle</div>
      <div class="flex-1 basis-2/3 bg-green-300">Right</div>
    </div>
  );
};

export default HomePage;
