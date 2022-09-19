function BaseAuthImput({ label, type, value, onChange, placeholder, classes }) {
  return (
    <>
      <label className="text-sm font-bold block pb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`block text-base p-[14px] w-full rounded-[4px] border-[#878787] border ${classes}`}
      />
      {/* <div className="mt-4 errorMessage"></div> */}
    </>
  );
}

export default BaseAuthImput;
