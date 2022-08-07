import "./select.scss";

const SelectComponent = ({ value, handleOnChange, options, allowNull }) => {
  return (
    <div className="row">
      <select
        className="form-select select-container"
        value={value}
        onChange={handleOnChange}
      >
        {allowNull && <option></option>}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};
export { SelectComponent };
