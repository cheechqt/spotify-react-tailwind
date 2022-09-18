function BaseAuthImput({ label, type, value, onChange, placeholder, classes }) {
  return (
    <>
      <label className="text-sm font-bold block pt-4 pb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`block text-base p-[14px] w-full rounded-[4px] border-[#878787] border ${classes}`}
      />
    </>
  );
}

export default BaseAuthImput;
