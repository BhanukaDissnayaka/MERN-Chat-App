const Sidebar = () => {
  return (
    <div className="overflow-y-auto h-full  w-full">
      <div>
        <p className="text-3xl font-medium font-sans pl-8 pt-5">EchoChat</p>
      </div>
      <div className="mt-5 px-4 lg:px-8">
        <label className="input rounded-3xl my-3">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            className="rounded-xl"
            type="search"
            required
            placeholder="Search"
          />
        </label>

        <div className="flex my-7 items-center">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 h-10 lg:h-14 lg:w-14 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="flex-1 pl-4 item-center">
            <p className="text-sm md:text-base lg:text-lg  roboto-think">
              Bhanuka Dissanayaka
            </p>
            <p className="text-xs roboto-think">online</p>
          </div>
        </div>

        <div className="flex my-7 items-center">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 h-10 lg:h-14 lg:w-14 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="flex-1 pl-4 item-center">
            <p className="text-sm md:text-base lg:text-lg  roboto-think">
              Bhanuka Dissanayaka
            </p>
            <p className="text-xs roboto-think">online</p>
          </div>
        </div>

        <div className="flex my-7 items-center">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 h-10 lg:h-14 lg:w-14 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="flex-1 pl-4 item-center">
            <p className="text-sm md:text-base lg:text-lg  roboto-think">
              Bhanuka Dissanayaka
            </p>
            <p className="text-xs roboto-think">online</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
