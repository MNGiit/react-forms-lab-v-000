import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      // new code
      username: "",
      password: ""
      // end of new code
    };
  }
  
  // new code
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = event => {
    event.preventDefault()
    
    if (this.state.username != "" && this.state.password != "") {
      this.props.handleLogin(event)
    }
  }
  // end of new code
  
  render() {
    // new code in form, before it was <form>
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
