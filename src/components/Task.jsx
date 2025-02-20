"use client";
import { Button } from ".";
import { useState } from "react";

export const Task = ({ Title, isDone, onClick }) => {
  const [isChecked, setIsChecked] = useState(isDone);

  const HandleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center justify-between w-full p-4 bg-[#cccccc] rounded-md">
      <div className="flex gap-[10px]">
        <input type="checkbox" checked={isChecked} onChange={HandleOnChange} />
        <p
          className={`text-black font-normal ${
            isChecked ? "line-through" : ""
          }`}
        >
          {Title}
        </p>
      </div>
      <Button
        onClick={onClick}
        className="bg-[#FEF2F2] text-[#EF4444] px-3 py-[6px]"
      >
        Delete
      </Button>
    </div>
  );
};
