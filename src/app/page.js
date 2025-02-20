"use client";
import { Button, Input, Task } from "@/components";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const [inputData, setInputData] = useState("");

  const addData = () => {
    let newTasks = [...tasks, { title: inputData, isChecked: false }];
    setTasks(newTasks);
  };

  const handleOnChange = (event) => {
    setInputData(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="flex flex-col w-[345px] h-fit bg-white  items-center gap-5 px-[16px] py-6">
      <p className="text-black font-semibold text-[20px]">To-Do List</p>
      <div className="flex gap-[6px]">
        <Input handleOnChange={handleOnChange} />
        <Button className={""} onClick={addData}>
          Add
        </Button>
      </div>
      <div className="flex gap-[6px] w-full">
        <Button className={"px-3 py-1 bg-[#cacaca] text-black"}>All</Button>
        <Button className={"px-3 py-1 bg-[#cacaca] text-black"}>Active</Button>
        <Button className={"px-3 py-1 "}>Completed</Button>
      </div>
      {tasks.map((value, index) => {
        return (
          <Task
            key={index}
            Title={value.title}
            isDone={value.isChecked}
            onClick={() => {
              const newTasks = tasks.filter(
                (el, taskIndex) => taskIndex !== index
              );
              setTasks(newTasks);
            }}
          ></Task>
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
            <a className="text-[#3B73ED]" href="https://www.google.com">
              Pinecone academy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
