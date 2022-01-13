import React, { Component } from "react";
import "../assets/css/App.css";
// import logo from '../assets/logo.png'
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Masukan User Dan Password");
    } else if (!e.target.email.value) {
      alert("Valid User is required");
    } else if (!e.target.password.value) {
      alert("Password Salah");
    } else if (
      e.target.email.value === "admin" &&
      e.target.password.value === "admin123"
    ) {
      this.props.history.push("/Home");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Kombinasi User Dan Password Salah");
    }
  };

  handleClick = (e) => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  render() {
    return (
      <Container>
        <div class="row main-content bg-dark text-center">
          <div class="col-md-4 text-center company__info">
            <span class="company__logo">
              <h2>
                <span>
                  <FontAwesomeIcon icon={faLock} className="faaa" />
                </span>
              </h2>
            </span>
            {/* <h4 class="company_title">Your Company Logo</h4> */}
          </div>
          <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div class="container-fluid">
              <br />
              <div class="row">
                <h2>Log In</h2>
              </div>
              <div class="row">
                <form
                  control=""
                  class="form-group fromm"
                  onSubmit={this.handleSubmit}
                >
                  <div class="row">
                    <input
                      type="text"
                      name="email"
                      id="username"
                      required
                      class="form__input"
                      placeholder="Username"
                    />
                  </div>
                  <div class="row">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required
                      class="form__input"
                      placeholder="Password"
                    />
                  </div>
                  <div class="row">
                    <input type="submit" value="Submit" class="bttn" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
