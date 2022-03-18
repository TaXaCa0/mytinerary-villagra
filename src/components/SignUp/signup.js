import React from "react";
import { connect } from "react-redux";
import userActions from "../../redux/actions/userActions";
import { Link as LinkRouter } from "react-router-dom";
import NavBar from "../NavBar";

function SignUp(props) {
  console.log(props);
  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      from: "form-Signup",
    };
    props.signUpUser(userData);
  };
  return (
    <div>
      <div className="citiesHeader">
        
      <NavBar />
      </div>
    <form onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            {" "}
            <i className="fa fa-user"></i>{" "}
          </span>
        </div>
        <input
          name="firstName"
          className="form-control"
          placeholder="First name"
          type="text"
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            {" "}
            <i className="fa fa-user"></i>{" "}
          </span>
        </div>
        <input
          name="lastName"
          className="form-control"
          placeholder="Last name"
          type="text"
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            {" "}
            <i className="fa fa-envelope"></i>{" "}
          </span>
        </div>
        <input
          name="email"
          className="form-control"
          placeholder="Email address"
          type="email"
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            {" "}
            <i className="fa fa-lock"></i>{" "}
          </span>
        </div>
        <input
          name="password"
          className="form-control"
          placeholder="Create password"
          type="password"
        />
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block">
          {" "}
          Create Account{" "}
        </button>
      </div>
      <div className="text-center">
        Have an account? <LinkRouter to="/SignIn">SignIn</LinkRouter>{" "}
      </div>
    </form>
    </div>
  );
}
const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,
};

export default connect(null, mapDispatchToProps)(SignUp);