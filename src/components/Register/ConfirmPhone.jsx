import { Link } from "react-router-dom";
import "./register.css";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { HOST } from "../../utils";

function ConfirmPhone() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();

  useEffect(() => {
    if (Cookies.get("phoneNumber")) {
      const data = Cookies.get("phoneNumber");
      setPhoneNumber(data);
    }
  }, []);

  const inputs = Array(6)
    .fill(null)
    .map(() => useRef(null));

  const handleInputChange = (index, event) => {
    const value = event.target.value;

    // Update the code state
    setCode((prevCode) => {
      const newCode =
        prevCode.slice(0, index) + value + prevCode.slice(index + 1);
      return newCode;
    });

    // Move to the next input if maxLength is reached
    if (value.length >= 1 && index < inputs.length - 1) {
      inputs[index + 1].current.focus();
    }
  };

  const handleSubmitCode = () => {
    axios
    .post(`${HOST}/users/verifyTheCode`, {verifyCode: code , phoneNumber: phoneNumber})
    .then(({ data }) => {
    navigate("/RegisterForm");
    })
    .catch((err) => alert("הקוד שהזנת שגוי"));
  };

  return (
    <>
      <Link to={"/RegisterPhone"} className="back-arrow">
        <div className="arrow-img">
          <img
            width="30"
            height="20"
            src="https://img.icons8.com/ios/50/1A1A1A/forward--v1.png"
            alt="forward--v1"
          />
        </div>
        <div className="arrow-text">&nbsp;&nbsp;&nbsp;אימות</div>
      </Link>
      <div className="register-phone-container">
        <div className="phone-input-and-text">
          <h1 className="register-phone-text">נשלחה הודעת קוד לנייד</h1>
          <div className="phone-number-SMS">+972543043477</div>
          <br />
          <div className="code-input" dir="ltr">
            {inputs.map((inputRef, index) => (
              <input
                key={index}
                className="SMS-input"
                type="text"
                maxLength={1}
                ref={inputRef}
                value={code[index] || ""}
                onChange={(event) => handleInputChange(index, event)}
              />
            ))}
          </div>
        </div>
        <div className="register-phone-button">
          <button onClick={handleSubmitCode} className="blue-button">
            {" "}
            הבא
          </button>
        </div>
      </div>
    </>
  );
}

export default ConfirmPhone;
