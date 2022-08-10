import "./style.scss";
const FormInput = ({ label, value, handleOnChange }) => {
  return (
    <div className="row input-container">
      <div className="col-sm-6 offset-sm-3">
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-4 col-form-label">
            {label} :
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              value={value}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export { FormInput };
