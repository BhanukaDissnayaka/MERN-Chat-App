import { Image, SendHorizontal } from "lucide-react";

const MessageInput = () => {
  return (
    <div>
      <form>
        <div className="py-2 md:py-5 px-2 md:px-10 flex items-center space-x-2 md:space-x-3">
          <input
            type="text"
            placeholder="Type here"
            className="input w-full lg:h-11"
          />
          <input
            id="img-input"
            type="file"
            accept="image/*"
            className="hidden"
          />
          <label htmlFor="img-input" className="cursor-pointer">
            <Image size={25} />
          </label>
          <button type="submit" className="cursor-pointer">
            <SendHorizontal size={25} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
