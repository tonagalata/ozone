import { Link } from 'react-router-dom'
import './component.css'



const Navbar = (props) => {
    return ( 
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false">
                    <img className='logo' src={props.logo} alt='logo'/>
                </Link>
                <div className="dropdown-menu">
                        <Link className="dropdown-item" to="#">Zoom In</Link>
                        <Link className="dropdown-item" to="#">Zoom Out</Link>
                        <Link className="dropdown-item" to="#">Fit Screen</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">Logout</Link>
                </div>
                </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                    <img className='editTool' src={props.gradient} alt='gradient'/>
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/">
                    <img className='editTool' src={props.autocorrect} alt='auto corect'/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                    <img className='editTool' src={props.text} alt='edit text'/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                    <img className='editTool' src={props.crop} alt='edit text'/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                    <img className='editTool' src={props.comment} alt='edit text'/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                    <img className='editTool' src={props.folder} alt='edit text'/>
                </Link>
              </li>
              <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="" role="button" aria-haspopup="true" aria-expanded="false">
                    Ozone / Promo Video
                </Link>
                <div className="dropdown-menu">
                        <Link className="dropdown-item" to="#">Save</Link>
                        <Link className="dropdown-item" to="#">History</Link>
                        <Link className="dropdown-item" to="#">Albums</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">Deleted</Link>
                </div>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/login">
                    <img className='profileImage' src={props.profileImage} alt='profile'/>
                </Link>
              </li>
              <li className="nav-item">
                <button className='share btn btn-primary' type="button">SHARE</button>
              </li>
              <li className="nav-item">
                <button className='export btn btn-secondary' type="button">EXPORT</button>
              </li>
            </ul>

          </div>
        </div>
      </div>
     );
}
 
export default Navbar;