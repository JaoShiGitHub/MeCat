export function LongButton({ btnName, type = "button" }) {
  return (
    <button
      type={type}
      className="bg-black01 w-full text-white font-medium shadow-md h-[5vh] rounded-md mt-4 hover:bg-babyCorn hover:text-black"
    >
      {btnName}
    </button>
  );
}
