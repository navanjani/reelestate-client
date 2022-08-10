import { useEffect, useState } from "react";
import {
  FormDate,
  FormInput,
  SelectComponent,
  SubmitButtonComponent,
} from "../../components";
import axios from "axios";
import { BASE_URL } from "../../config";
import "./viewing.scss";

const ViewingPage = ({ scheduleViewing }) => {
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    selectedAddress: {},
    date: new Date(),
  };
  const [listings, setListings] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [showSuccess, setShowSuccess] = useState(false);

  const getAddresses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/listings`);
      setListings(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getAddresses();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      scheduleViewing(formData);
      setFormData(initialFormState);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    } else {
      alert("invalid data");
    }
  };

  const validateForm = () => {
    const emptyRecord = Object.entries(formData).find((value) => !value[1]);
    return emptyRecord === undefined;
  };

  return (
    <div className="container page-container">
      <h1>Schedule Viewing</h1>
      <div className={showSuccess ? "show-success" : "hide-success"}>
        Scheduled a viewing successfully!
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <SelectComponent
          value={formData.selectedAddress}
          handleOnChange={(e) =>
            setFormData({ ...formData, selectedAddress: e.target.value })
          }
          label="Listing Address"
          options={listings.map((listing) => ({
            key: listing.id,
            value: `${listing.address.street}, ${listing.address.number}, ${listing.address.city}`,
          }))}
          allowNull={false}
        />

        <FormInput
          label="Name"
          value={formData.name}
          handleOnChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        <FormInput
          label="Email"
          value={formData.email}
          handleOnChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <FormInput
          label="Phone"
          value={formData.phone}
          handleOnChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />
        <FormDate
          label="Date"
          value={formData.date}
          handleOnChange={(date) => setFormData({ ...formData, date: date })}
        />
        <SubmitButtonComponent title="Submit" />
      </form>
    </div>
  );
};
export { ViewingPage };
