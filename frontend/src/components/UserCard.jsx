const UserCard = () => {
  return (
    <div className="w-full h-20 flex items-center py-2 px-4 space-x-2 justify-center border-1 border-base-300 bg-base-100">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2 ">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="text-lg">Bhanuka Dissanayaka</div>
    </div>
  );
};

export default UserCard;
