import { createPortal } from "react-dom";
import { Button } from "./ui/button";
import { IoCloseCircle } from "react-icons/io5";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";

type Props = {
  imgs: string[];
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
};
const Popup = ({ imgs, setOpenPopup }: Props) => {
  const [imgIndex, setImgIndex] = useState(0);
  return createPortal(
    <div className="h-screen fixed left-0 bg-[#020817d1] top-0 w-full flex items-center justify-center">
      <Button
        className="text-white text-3xl p-0 rounded-full absolute right-10 top-10 z-10"
        onClick={() => setOpenPopup(false)}
      >
        <IoCloseCircle size={40} />
      </Button>
      <div className="absolute top-[50%] left-[50%] z-10 px-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-between w-full">
        <Button
          className="text-white p-0 rounded-full"
          onClick={() => setImgIndex((prev) => prev - 1)}
          disabled={imgIndex <= 0}
        >
          <IoMdArrowDropleft size={40} />
        </Button>
        <Button
          className="text-white  p-0 rounded-full"
          onClick={() => setImgIndex((prev) => prev + 1)}
          disabled={imgIndex >= imgs.length - 1}
        >
          <IoMdArrowDropright size={40} />
        </Button>
      </div>
      <img
        src={imgs[imgIndex]}
        alt=""
        className="md:max-w-[70%] max-w-[90%] max-h-[90%] rounded-lg"
      />
    </div>,
    document.getElementById("popup")!
  );
};
export default Popup;
