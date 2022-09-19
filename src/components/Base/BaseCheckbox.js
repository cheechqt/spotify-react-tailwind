function BaseCheckbox({ children: label }) {
  return (
    <label for="login-remember" className="flex">
      <input
        className="scale-[1.2] opacity-70 accent-[#169b45] checked:bg-black"
        type="checkbox"
        id="login-remember"
      />
      <p className="text-sm pl-3 block">{label}</p>
    </label>
  );
}

export default BaseCheckbox;
