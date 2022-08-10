import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./date.scss";

const FormDate = ({ label, value, handleOnChange }) => {
  return (
    <div className="row date-container">
      <div className="col-sm-6 offset-sm-3">
        <div className="mb-3 row">
          <label htmlFor="dob" className="col-sm-4 col-form-label">
            {label} :
          </label>
          <div className="col-sm-8">
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={value}
              onChange={handleOnChange}
              showYearDropdown
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export { FormDate };
