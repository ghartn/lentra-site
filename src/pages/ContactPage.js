import React, { Component } from "react";
import crybaby1 from "../img/crybaby1.png";
import {
	validateEmail,
	validateName,
	validateMessage
} from "../utility/validators";

class ContactPage extends Component {
	constructor() {
		super();
		this.state = {
			name: {
				value: "",
				err: false,
				message: "",
				touched: false,
				status: ""
			},
			email: {
				value: "",
				err: false,
				message: "",
				touched: false,
				status: ""
			},
			message: {
				value: "",
				err: false,
				message: "",
				touched: false,
				status: ""
			}
		};
	}

	_onChange = e => {
		let { name, value } = e.target;
		let field = this.state[name];
		if (field.err) {
			field = {
				...field,
				...this._validateField(name, value)
			};
		}
		this.setState({
			[name]: {
				...field,
				value: value,
				touched: true
			}
		});
	};

	_onBlur = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: {
				...this.state[name],
				...this._validateField(name, value)
			}
		});
	};

	_validateField = (name, value) => {
		let err = false,
			message = "";
		switch (name) {
			case "email":
				err = validateEmail(value);
				message = err ? "please use a real email lol" : "";
				break;
			case "name":
				err = validateName(value);
				message = err ? "please enter a real name lol" : "";
				break;

			case "message":
				err = validateMessage(value);
				message = err ? "u gotta write somethin man!!" : "";
				break;
			default:
				break;
		}
		return {
			err: err,
			message: message,
			status: err ? "error" : "success"
		};
	};

	render() {
		return (
			<section>
				<h1 className="mb-6">contact</h1>
				<div className="flex flex-row">
					<div className="w-full md:w-1/2">
						<form
							action="https://formspree.io/lentraofficial@gmail.com"
							method="POST"
						>
							<label htmlFor="email">your email</label>
							<input
								className="w-full mb-4"
								type="email"
								id="email"
								name="email"
								autoComplete="email"
								value={this.state.email.value}
								onChange={this._onChange}
								onBlur={this._onBlur}
								required
							/>
							<label htmlFor="name">your name</label>
							<input
								className="w-full mb-4"
								type="text"
								id="name"
								name="name"
								autoComplete="name"
								value={this.state.name.value}
								onChange={this._onChange}
								onBlur={this._onBlur}
								required
							/>
							<label htmlFor="message">
								your message or comment or whatever
							</label>
							<textarea
								className="w-full mb-4"
								id="message"
								name="message"
								value={this.state.message.value}
								onChange={this._onChange}
								onBlur={this._onBlur}
								required
							/>
							<button className="btn-primary" type="submit" value="Submit">
								Submit!
							</button>
						</form>
					</div>
					<div className="w-full md:w-1/2">
						<img src={crybaby1} alt="lentra" />
					</div>
				</div>
			</section>
		);
	}
}

export default ContactPage;
