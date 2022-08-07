import "./slider.scss";
const RangeComponent = ({
  title,
  minValue = "",
  maxValue = "",
  handleOnChange,
  value = "",
}) => {
  return (
    <div className="slider-container">
      <p>
        {title} : {value}
      </p>
      <label htmlFor="minValue">{minValue}</label>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        step="1"
        onChange={handleOnChange}
      />
      <label htmlFor="maxValue">{maxValue}</label>
    </div>
  );
};
export { RangeComponent };
