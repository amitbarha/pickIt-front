import { Link } from 'react-router-dom'
import './splash.css'
import { useEffect, useState } from 'react';

function Splash() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const checkIfMobile = () => {
      // This is a simple check based on the screen width. Adjust as needed.
      const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    checkIfMobile();

    // Optionally, add a resize event listener to handle window resizing
    window.addEventListener('resize', checkIfMobile);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);


   return (
    <div>
      {isMobile ? (
        // Render your app's splash content here if it's a mobile device
        <div className='splash-container'>
          <div className="logo-splash">
            <img 
              className='logo-splash' 
              src="https://res.cloudinary.com/deiofeueo/image/upload/v1726339208/prodrone-removebg-preview_smwek0.png" 
              height={150} 
              alt="Logo" 
            />
          </div>
          <div className="splash-buttons">
            <Link to={'/HomePage'} className='blue-button'>
              <div>כניסה</div>
            </Link>
            <br />
            {/* Uncomment the below Link if needed */}
            {/* <Link to={'/RegisterPhone'} className='white-button'>
              <div>הרשמה</div>
            </Link> */}
            <br />
          </div>
        </div>
      ) : (
        // Display this message if not on a mobile device
        <div>Please open this app with a phone</div>
      )}
    </div>
  );
}

export default Splash