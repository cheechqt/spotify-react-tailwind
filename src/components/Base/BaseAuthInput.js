function BaseAuthImput({
  label,
  type,
  value,
  onChange,
  onBlur,
  placeholder,
  classes,
  errorMessage,
}) {
  return (
    <>
      <label className="text-sm font-bold block pb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`block text-base p-[14px] w-full rounded-[4px] border-[#878787] border ${classes}`}
      />
      {errorMessage && <div className="mt-1 text-red-500">{errorMessage}</div>}
    </>
  );
}

export default BaseAuthImput;
