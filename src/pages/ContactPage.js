import React, { Component } from "react";
import crybaby1 from "../img/crybaby1.png";
import { emailRegex } from "../utility/regex";
import { nameRegex } from "../utility/regex";

class ContactPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      inquiry: "",
      valid: false
    };
  }

  _onInputChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        console.log(
          this._validateEmail(),
          this._validateName(),
          this._validateInquiry()
        );
        this.setState({
          valid:
            this._validateEmail() &&
            this._validateName() &&
            this._validateInquiry()
        });
      }
    );
  };

  _validateEmail() {
    let regex = RegExp(emailRegex);
    return regex.test(this.state.email);
  }

  _validateName() {
    let regex = RegExp(nameRegex);
    return regex.test(this.state.name);
  }
  _validateInquiry() {
    return this.state.inquiry.length > 0;
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="six columns">
            <h1>contact</h1>
            <form
              action="https://formspree.io/lentraofficial@gmail.com"
              method="POST"
            >
              <label htmlFor="email">your email</label>
              <input
                className="u-full-width"
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={this.state.email}
                onChange={this._onInputChange}
                required
              />
              <label htmlFor="name">your name</label>
              <input
                className="u-full-width"
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={this.state.name}
                onChange={this._onInputChange}
                required
              />
              <label htmlFor="inquiry">
                your message or comment or whatever
              </label>
              <textarea
                className="u-full-width"
                id="inquiry"
                name="inquiry"
                value={this.state.inquiry}
                onChange={this._onInputChange}
                required
              />
              <button
                disabled={!this.state.valid}
                className="button-primary u-pull-right"
                type="submit"
                value="Submit"
              >
                Submit!
              </button>
            </form>
          </div>
          <div className="six columns">
            <img src={crybaby1} alt="lentra" />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
