import React from 'react';
import {Link} from 'react-router-dom';
const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";
class Profile extends React.Component{

    constructor(){
        super();
        this.state={
            user:''
        }
    }

    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token': sessionStorage.getItem('ltk')
            }
        })
        .then(res=> res.json())
        .then(data=> {
            this.setState({user:data});
        })
    }
    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('rtk');
        this.props.history.push('/');
    }
    conditionalRender = () => {
        if(this.state.user.role){
            if(this.state.user.role === 'Admin'){
                return (
                <Link to='/users' className="btn btn-success">Users</Link>
                )
            }
        }
    }
    render(){
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/');
        }
        sessionStorage.setItem('rtk', this.state.user.role);
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Profile</h3>
                    </div>
                    <div className="panel-body">
                        <h1>Hi {this.state.user.name},</h1>
                        <h3>Your Email is {this.state.user.email}</h3>
                        <h3>Your Phone is {this.state.user.phone}</h3>
                        <h3>Your Role is {this.state.user.role}</h3>
                        {this.conditionalRender()}&nbsp;
                        <button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;