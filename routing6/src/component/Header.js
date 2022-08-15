import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Developer Funnel</Link>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/post">Post</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header;