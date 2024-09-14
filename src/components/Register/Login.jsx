import "./register.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HOST } from "../../utils";
import Cookies from "js-cookie";
function Login() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [code, setCode] = useState();
  const navigate = useNavigate();

  const handleSendSMS = () => {
    console.log(phoneNumber);
    axios
      .post(`${HOST}/users/OkCupid`, { phoneNumber: phoneNumber })
      .then(({ data }) => {
        console.log("hii");
      })
      .catch((err) => console.log(err.response.data + "basa"));
  };

  return (
    <>
      <Link to={"/"} className="back-arrow">
        <div className="arrow-img">
          <img
            width="30"
            height="20"
            src="https://img.icons8.com/ios/50/1A1A1A/forward--v1.png"
            alt="forward--v1"
          />
        </div>
        <div className="arrow-text">&nbsp;&nbsp;&nbsp;כניסה</div>
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
        <div dir="ltr">
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="code"
            onChange={(e) => setCode(e.target.value)}
          />
          <button>code</button>
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

export default Login;
