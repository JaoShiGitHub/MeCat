export function LongButton({ btnName, type = "button" }) {
  return (
    <button
      type={type}
      className="bg-black01 w-full text-white h-[5vh] rounded-md"
    >
      {btnName}
    </button>
  );
}
