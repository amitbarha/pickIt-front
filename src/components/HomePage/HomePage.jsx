import { Link } from "react-router-dom";
import "./home-page.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="ex-buttons-div">
        <Link to={'/Test'} className="ex-btn">
          
          <div className="ex-btn-context">
          <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/test--v1.png"
              alt="test--v1"
            />
            <h3>מבחן מלא</h3>
          </div>
          
        </Link>
        <Link to={'/Exercise'} className="ex-btn">
          <div className="ex-btn-context">
          <img
              width="64"
              height="64"
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-homework-university-flaticons-flat-flat-icons-2.png"
              alt="external-homework-university-flaticons-flat-flat-icons-2"
            />{" "}
            <h3>תרגול שאלות</h3>
           
          </div>
        </Link>
      </div>
     
      
    </div>
  );
}

export default HomePage;
