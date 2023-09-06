import "./register.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { HOST } from "../../utils";
import Cookies from "js-cookie";

function RegisterPhone() {
  const [phoneNumber, setPhoneNumber] = useState();
  const navigate = useNavigate()

  const handleSendSMS = () => {
    console.log(phoneNumber);
    axios
    .post(`${HOST}/users/createUserPhone`, {phoneNumber: phoneNumber})
    .then(({ data }) => {
      Cookies.set("phoneNumber", phoneNumber);
      navigate('/ConfirmPhone')      
    })
    .catch((err) => console.log(err.response.data + "basa"));
  };

  return (
    <>
      <Link to={'/'} className="back-arrow">
        <div className="arrow-img">
        <img width="30" height="20" src="https://img.icons8.com/ios/50/1A1A1A/forward--v1.png" alt="forward--v1"/>
        </div>
        <div className="arrow-text">&nbsp;&nbsp;&nbsp;הרשמה</div>
      </Link>
      <div className="register-phone-container">
        <div className="phone-input-and-text">
          <h1 className="register-phone-text">הכנס מספר טלפון נייד</h1>
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
          <button onClick={handleSendSMS} className="blue-button">
            {" "}
            הבא
          </button>
        </div>
      </div>
    </>
  );
}

export default RegisterPhone;
