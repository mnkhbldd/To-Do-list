export const Input = ({ handleOnChange }) => {
  return (
    <input
      onChange={(event) => handleOnChange(event)}
      className="text-black outline-none border border-grey-200 focus-visible:border-[#3C82F6] rounded-md px-4 py-2 min-w-[248px]"
    />
  );
};
