import { Link } from 'react-router-dom'
import './splash.css'

function Splash() {
  return (
    <div className='splash-container'>
        <div className="logo-splash"><img className='logo-splash' src="https://res.cloudinary.com/deiofeueo/image/upload/v1693387711/si6zadyjhanxrbc8zlvs-removebg-preview_owqa8g.png" height={150} alt="" /></div>
        <div className="splash-buttons">
            <Link className='blue-button'>
                <div>כניסה</div>
            </Link>
            <br />
            <Link to={'/RegisterPhone'} className='white-button'>
                <div>הרשמה</div>
            </Link>
            <br />
            <Link to={'/FastOrder'} id='fast-order-link' className='white-button'>
                <div>הזמנה מהירה</div>
            </Link>
        </div>
    </div>
  )
}

export default Splash