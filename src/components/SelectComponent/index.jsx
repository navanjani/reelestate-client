import "./select.scss";

const SelectComponent = ({
  value,
  handleOnChange,
  options,
  allowNull,
  label,
}) => {
  return (
    <div className="row ">
      <div className="col-sm-6 offset-sm-3">
        <div className="mb-3 row">
          <label htmlFor="dob" className="col-sm-4 col-form-label">
            {label} :
          </label>
          <div className="col-sm-8">
            <select
              className="form-select select-container "
              value={value}
              onChange={handleOnChange}
            >
              {allowNull && <option></option>}
              {options.map((option, index) => (
                <option key={index} value={option.key}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export { SelectComponent };
