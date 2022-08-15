import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Fragment>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <Link class="navbar-brand" href="#">Developer Funnel</Link>
                    </div>
                    <ul class="nav navbar-nav">
                    <li class="active"><Link to="/">Home</Link></li>
                    <li><Link to="/post">Post</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header;