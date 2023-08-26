import "./delivery-form.css";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import "./../Register/register.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import axios from "axios";
import { HOST } from "../../utils";

function DeliveryForm() {
  const [phoneNumber, setPhoneNumber] = useState();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.phoneNumber = phoneNumber;
    data.paid = false;
    data.delivered = false;
    console.log(data);
    axios
      .post(`${HOST}/deliveries/create`, data)
      .then(({ data }) => {
        alert("המשלוח התקבל! \n בדקות הקרובות תישלח הודעה עם קישור לתשלום");
        // reset();
      })
      .catch((err) => console.log(err.response.data + "basa"));
  };
  return (
    <div className="delivery-form-container">
      <h1 className="delivery-form-title">הזמנה מהירה</h1>
      <a
        href="https://api.whatsapp.com/send?phone=+972543043477&text=%D7%A9%D7%9D%20%D7%9E%D7%9C%D7%90%3A%0A%D7%9B%D7%AA%D7%95%D7%91%D7%AA%3A%0A%D7%9E%D7%A1%D7%A4%D7%A8%20%D7%97%D7%91%D7%99%D7%9C%D7%94%3A%0A%D7%9E%D7%99%D7%A7%D7%95%D7%9D%20%D7%94%D7%97%D7%91%D7%99%D7%9C%D7%94%3A%0A%D7%90%D7%95-%20%D7%94%D7%A2%D7%AA%D7%A7%20%D7%90%D7%AA%20%D7%94%D7%95%D7%93%D7%A2%D7%AA%20%D7%94%D7%92%D7%A2%D7%AA%20%D7%94%D7%9E%D7%A9%D7%9C%D7%95%D7%97"
        target="_blank"
        rel="noopener noreferrer"
      >
        להזמנה מהירה דרך וואטסאפ לחץ/י כאן
      </a>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="phone-input phone-delivery-form">
          <label htmlFor="phoneInput" className="input-label">
            מספר טלפון *
          </label>{" "}
          <PhoneInput
            id="phoneInput"
            className="custom-phone-input"
            placeholder="000 000 0000"
            defaultCountry="IL"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
        </div>
        <br />
        <br />
        <div className="form-inputs address-input">
          <label htmlFor="address" className="input-label">
            שם מלא (באנגלית) *
          </label>
          <input
            {...register("fullName", { required: true, maxLength: 30 })}
            className="styled-input"
            id="address"
            type="text"
            required
            placeholder="הכנס  שם מלא באנגלית"
          />
        </div>
        <div className="form-inputs address-input">
          <label htmlFor="address" className="input-label">
            כתובת למשלוח *
          </label>
          <input
            {...register("address", { required: true })}
            className="styled-input"
            id="address"
            type="text"
            required
            placeholder="הכנס כתובת למשלוח"
          />
        </div>
        <br />
        <div className="form-inputs address-input">
          <label htmlFor="address" className="input-label">
            מספר חבילה *
          </label>
          <input
            {...register("packageNumber", { required: true })}
            className="styled-input"
            id="address"
            type="text"
            required
            placeholder="לדוג': 1413ג"
          />
        </div>
        <div className="form-inputs address-input">
          <label htmlFor="address" className="input-label">
            מיקום החבילה *
          </label>
          <input
            {...register("packageLocation", { required: true })}
            className="styled-input"
            id="address"
            type="text"
            required
            placeholder="סופר בונוס, סוכריית המזל, נויל'ה..."
          />
        </div>
        {/* <div className="delivery-message">
  <label htmlFor="deliveryMessage" className="input-label">
      העתק הודעת משלוח SMS
  </label>
  <TextField
    id="deliveryMessage"
    label="Delivery SMS"
    multiline
    dir="rtl"
    rows={7}
  />
  </div> */}
        <br />
        <div className="checkbox-accept">
          <input
            className="checkbox-style"
            type="checkbox"
            required
            {...register("accept")}
          />
          <div> &nbsp; &nbsp; * אני מאשר/ת שיאספו את החבילה בשמי&nbsp;</div>
        </div>
        <br />
        <div className="register-phone-button">
          <button className="blue-button"> הבא</button>
        </div>
      </form>
    </div>
  );
}

export default DeliveryForm;
