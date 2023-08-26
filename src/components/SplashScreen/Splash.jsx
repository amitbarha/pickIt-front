import { Link } from 'react-router-dom'
import './splash.css'

function Splash() {
  return (
    <div className='splash-container'>
        <div className="logo-splash">PickIt</div>
        <div className="splash-buttons">
            <Link className='blue-button'>
                <div>Login</div>
            </Link>
            <br />
            <Link to={'/RegisterPhone'} className='white-button'>
                <div>Register</div>
            </Link>
        </div>
    </div>
  )
}

export default Splash