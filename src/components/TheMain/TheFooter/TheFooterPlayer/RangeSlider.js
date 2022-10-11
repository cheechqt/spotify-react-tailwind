import { useEffect, useState, useRef } from "react";

function RangeSlider({
  value,
  minvalue,
  maxvalue,
  handleChange,
  inputClasses = "",
}) {
  const inputRef = useRef(null);
  const inputRefWidth = useRef(null);
  const [decimalValue, setDecimalValue] = useState();

  useEffect(() => {
    const inputWidth = window.getComputedStyle(inputRef.current).width;
    inputRefWidth.current = parseInt(inputWidth.replace("px", ""));
  });

  useEffect(() => {
    if (maxvalue > 1) {
      setDecimalValue((value * 1) / maxvalue);
    } else {
      setDecimalValue(value);
    }
  });

  const handleInputChange = (e) => {
    handleChange(parseFloat(e.target.value));
  };

  return (
    <div className="flex items-center relative">
      <input
        ref={inputRef}
        type="range"
        onChange={handleInputChange}
        className={`bg-[#535353] h-1 overflow-hidden w-auto rounded-sm`}
        min={minvalue}
        max={maxvalue}
        step="0.01"
        value={value}
      />
      <span
        className="w-[10px] h-[10px] absolute rounded-[50px] z-10 opacity-0 pointer-events-none"
        style={{ left: `${decimalValue * inputRefWidth.current - 3}px` }}
      ></span>
    </div>
  );
}

export default RangeSlider;
