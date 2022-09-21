function BaseCheckbox({ children: label, classes }) {
  return (
    <label className={`flex ${classes}`}>
      <input
        className="scale-[1.2] opacity-70 accent-[#169b45] checked:bg-black"
        type="checkbox"
      />
      <p className={`text-sm pl-3 block `}>{label}</p>
    </label>
  );
}

export default BaseCheckbox;
