import React, { Component } from "react";
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
				status: ""
			},
			email: {
				value: "",
				err: false,
				message: "",
				status: ""
			},
			message: {
				value: "",
				err: false,
				message: "",
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
				value: value
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
		let valid = false,
			message = "";
		switch (name) {
			case "email":
				valid = validateEmail(value);
				message = valid ? "" : "please use a real email lol";
				break;
			case "name":
				valid = validateName(value);
				message = valid ? "" : "please enter a real name lol";
				break;

			case "message":
				valid = validateMessage(value);
				message = valid ? "" : "u gotta write somethin man!!";
				break;
			default:
				break;
		}
		return {
			err: !valid,
			message: message,
			status: valid ? "success" : "error"
		};
	};

	render() {
		const { email, name, message } = this.state;
		return (
			<section>
				<h1 className="text-3xl mb-6">contact me</h1>
				<div className="flex flex-row">
					<div className="w-full md:w-1/2">
						<form
							action="https://getform.io/f/aa769b00-58e4-4473-bc84-5e3353583352"
							method="POST"
						>
							<div className="mb-4">
								<label htmlFor="email">your email</label>
								<input
									className={`w-full border ${
										email.err ? "border-red-500" : ""
									} ${email.status === "success" ? "border-green-500" : ""}`}
									type="email"
									id="email"
									name="email"
									autoComplete="email"
									value={email.value}
									onChange={this._onChange}
									onBlur={this._onBlur}
									required
								/>
								{email.err ? (
									<p className="text-red-500">{email.message}</p>
								) : null}
							</div>
							<div className="mb-4">
								<label htmlFor="name">your name</label>
								<input
									className={`w-full border ${
										name.err ? "border-red-500" : ""
									} ${name.status === "success" ? "border-green-500" : ""}`}
									type="text"
									id="name"
									name="name"
									autoComplete="name"
									value={name.value}
									onChange={this._onChange}
									onBlur={this._onBlur}
									required
								/>
								{name.err ? (
									<p className="text-red-500">{name.message}</p>
								) : null}
							</div>
							<div className="mb-4">
								<label htmlFor="message">
									your message or comment or whatever
								</label>
								<textarea
									className={`w-full border ${
										message.err ? "border-red-500" : ""
									} ${message.status === "success" ? "border-green-500" : ""}`}
									id="message"
									name="message"
									value={message.value}
									onChange={this._onChange}
									onBlur={this._onBlur}
									required
								/>
								{message.err ? (
									<p className="text-red-500">{message.message}</p>
								) : null}
							</div>
							<button className="btn-primary" type="submit" value="Submit">
								submit
							</button>
						</form>
					</div>
				</div>
			</section>
		);
	}
}

export default ContactPage;
