export const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`bg-[#3C82F6] px-4 py-2 rounded-md ` + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
