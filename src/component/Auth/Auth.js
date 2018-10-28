import React, { Component } from 'react'
import axios from 'axios';

export default class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
}

handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
}

registerUser = () => {
    const {username, password} = this.state;
    axios.post('/api/users/new', {username, password})
        .then( response => {
            const {username, password} = response.data;
            console.log('register user response', username, password);
            alert(`register user success: Username: ${username} Password:${password}`);
            window.location.assign('/dashboard')})
        .catch( err => {console.log('Error registering user', err)}
        );  
};
loginUser = () => {
    const {username, password} = this.state;
    axios.post('/api/users', {username, password})
        .then( response => {
            // console.log('auth, loginUser, response.data', response.data)
            // const {username, password} = response.data;
            // console.log('login user response', response.data);
            if (!response.data[0]) { 
                alert(`That username/password combo does not exist`);
                this.resetState() 
            } else {
            window.location.assign('/dashboard')}


        })
        .catch( err => {console.log('Error logging in user', err)}
        );  
};
resetState = () => {
    this.setState({
        username:'',
        password:''
    })
}


  render() {
      console.log(this.state)
      const {handleInput, registerUser, loginUser} = this;
      const {username, password} = this.state;
    return (
      <div>
        Auth
        <div>
            <div>Username</div>
            <input type="text" name={'username'} value={username} onChange={handleInput}/>
            <div>Password</div>
            <input type="text" name={'password'} value={password} onChange={handleInput}/>
            <button onClick={loginUser}>Login</button>
            <button onClick={registerUser} >Register</button>
        </div>
      </div>
    )
  }
}
