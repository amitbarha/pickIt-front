import "./register.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
function RegisterPhone() {
  const [phoneNumber, setPhoneNumber] = useState();

  const handleSendSMS = () =>{
    console.log(phoneNumber);
  }

  return (
    <div className="register-phone-container">
      <div className="phone-input-and-text">
        <h1 className="register-phone-text">
          Provide your register phone number
        </h1>
        <br />
        <div className="phone-input">
          {" "}
          <PhoneInput
            className="custom-phone-input"
            placeholder="000 000 0000"
            defaultCountry="IL"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
        </div>
      </div>
      <div className="register-phone-button">
        <button onClick={handleSendSMS} className="blue-button"> Next</button>
      </div>
    </div>
  );
}

export default RegisterPhone;
