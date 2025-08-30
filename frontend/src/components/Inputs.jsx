function InputFormUA({ value, onChange, name, type = "text", placeholder }) {
  return (
    <label className="w-full">
      <input
        className="h-[5vh] bg-white shadow-md w-full rounded-md px-4"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
export { InputFormUA };
