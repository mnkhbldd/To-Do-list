import { Button } from ".";

export const Task = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-[#cccccc] rounded-md">
      <div className="flex gap-[10px]">
        <input type="checkbox" />
        <p className="text-black font-normal">Create PR</p>
      </div>
      <Button className="bg-[#FEF2F2] text-[#EF4444] px-3 py-[6px]">
        Delete
      </Button>
    </div>
  );
};
