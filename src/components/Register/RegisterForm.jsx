import { useEffect, useState } from "react";
import "./register.css";
import { useForm, Controller } from "react-hook-form";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import axios from "axios";
import { HOST } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;

function RegisterForm() {
  const navigate = useNavigate()
  const [googleAddress, setGoogleAddress] = useState(null);
  const [cookieData, setCookieData] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.phoneNumber = Cookies.get('phoneNumber')
    data.address = googleAddress.label
    console.log(data); // You can handle form submission here
    axios
    .patch(`${HOST}/users/createNewUser`, {
      phoneNumber: data.phoneNumber,
      firstName : data.firstName,
      lastName : data.lastName,
      email : data.email,
      address : data.address,
    })
    .then(({ data }) => {
      Cookies.remove("phoneNumber")
      navigate('/HomePage')      
    })
    .catch((err) => console.log(err.response ));
  };

  return (
    <>
     <Link to={'/ConfirmPhone'} className="back-arrow">
        <div className="arrow-img">
        <img width="30" height="20" src="https://img.icons8.com/ios/50/1A1A1A/forward--v1.png" alt="forward--v1"/>
        </div>
        <div className="arrow-text">&nbsp;&nbsp;&nbsp;פרטים אישיים</div>
      </Link>
    <div >
      <form className="register-form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="all-input-register">
        <div className="form-inputs address-input">
          <label htmlFor="address" className="input-label">
            שם פרטי *
          </label>
          <input
            {...register("firstName", { required: true, maxLength: 30 })}
            className="styled-input"
            id="address"
            type="text"
            required
            defaultValue={cookieData && cookieData.fullName}
            placeholder="הכנס  שם פרטי "
          />
        </div>
        <div className="form-inputs address-input">
          <label htmlFor="address" className="input-label">
             שם משפחה *
          </label>
          <input
            {...register("lastName", { required: true, maxLength: 30 })}
            className="styled-input"
            id="address"
            type="text"
            required
            defaultValue={cookieData && cookieData.fullName}
            placeholder="הכנס  שם משפחה "
          />
        </div>
        <div className="form-inputs address-input">
          <label htmlFor="address" className="input-label">
             אימייל *
          </label>
          <input
            {...register("email", { required: true, maxLength: 30 })}
            className="styled-input"
            id="address"
            type="text"
            required
            defaultValue={cookieData && cookieData.fullName}
            placeholder="  הכנס אימייל  "
          />
        </div>
        <div className="form-inputs address-input">
          <label htmlFor="address" className="input-label">
            כתובת מגורים *
          </label>
          <GooglePlacesAutocomplete
            apiKey={`${googleApiKey}`}
            selectProps={{
              googleAddress,
              onChange: setGoogleAddress,
              styles: {
                control: (provided) => ({
                  ...provided,
                  background: "none",
                  border: "solid #8F9FBE",
                }),
              },
            }}
          />
        </div>
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
        </div>
        <div className="register-phone-button">
          <button className="blue-button">
            {" "}
            הירשם
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default RegisterForm;
