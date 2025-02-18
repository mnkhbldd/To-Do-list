"use client";
import { Button, Container, Task } from "@/components";
import { useState } from "react";

export default function Home() {
  const mockData = [
    {
      title: "Bla blabla",
      isChecked: false,
    },
    {
      title: "Bla blabla",
      isChecked: false,
    },
  ];

  const [test, setTest] = useState(mockData);

  const addData = () => {
    const newData = [...test, { title: "test", isChecked: false }];
    setTest(newData);
    console.log(newData);
  };

  return (
    <div className="flex flex-col w-[345px] h-fit bg-white  items-center gap-5 px-[16px] py-6">
      <p className="text-black font-semibold text-[20px]">To-Do List</p>
      <div className="flex gap-[6px]">
        <Container />
        <Button className={""} onClick={addData}>
          Add
        </Button>
      </div>
      <div className="flex gap-[6px] w-full">
        <Button className={"px-3 py-1 bg-[#cacaca] text-black"}>All</Button>
        <Button className={"px-3 py-1 bg-[#cacaca] text-black"}>Active</Button>
        <Button className={"px-3 py-1 "}>Completed</Button>
      </div>
      {test.map((value, index) => {
        return (
          <Task key={index} Title={value.title} isDone={value.isChecked}></Task>
        );
      })}
      <div className="flex flex-col gap-10 w-full items-center">
        {" "}
        <div className="flex items-center justify-between w-full pt-4 pb-1 border-t ">
          <p className="text-[#6B7280] text-[14px]">1 of 2 tasks completed</p>
          <Button className={"px-3 py-1 bg-transparent text-[#EF4444]"}>
            Clear completed
          </Button>
        </div>
        <div>
          <p className="text-[#6B7280] text-[12px]">
            Powered by{" "}
            <a className="text-[#3B73ED]" href="www.google.com">
              Pinecone academy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
