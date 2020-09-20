import React, { Component } from "react";
import { validateEmail } from "../utility/validators";

class CoolPage extends Component {
	constructor() {
		super();
		this.state = {
			EMAIL: {
				value: "",
				err: false,
				message: "",
				status: "",
			},
		};
	}

	_onChange = (e) => {
		let { name, value } = e.target;
		let field = this.state[name];
		if (field.err) {
			field = {
				...field,
				...this._validateEmail(name, value),
			};
		}
		this.setState({
			[name]: {
				...field,
				value: value,
			},
		});
	};

	_onBlur = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: {
				...this.state[name],
				...this._validateEmail(name, value),
			},
		});
	};

	_validateEmail = (name, value) => {
		let valid = false,
			message = "";
		valid = validateEmail(value);
		message = valid ? "" : "please use a real email lol";
		return {
			err: !valid,
			message: message,
			status: valid ? "success" : "error",
		};
	};

	render() {
		const { EMAIL } = this.state;
		return (
			<section>
				<h1 className="mb-8 text-3xl">
					hello, please give me your email so i can send u stuff :)
				</h1>
				<div>
					<div id="mc_embed_signup">
						<form
							action="https://lentra.us2.list-manage.com/subscribe/post?u=0bb1dab6a6ce812dacdd5a374&amp;id=bbc53a66bf"
							method="post"
							id="mc-embedded-subscribe-form"
							name="mc-embedded-subscribe-form"
							className="validate"
							target="_blank"
							noValidate
							style={{
								textAlign: "left",
							}}
						>
							<div id="mc_embed_signup_scroll">
								<input
									type="email"
									value={EMAIL.value}
									onChange={this._onChange}
									onBlur={this._onBlur}
									name="EMAIL"
									className={`border ${EMAIL.err ? "border-red-500" : ""} ${
										EMAIL.status === "success" ? "border-green-500" : ""
									}`}
									id="mce-EMAIL"
									placeholder="email address"
									required
								/>
								<div
									style={{
										position: "absolute",
										left: "-5000px",
									}}
									aria-hidden="true"
								>
									<input
										type="text"
										name="b_0bb1dab6a6ce812dacdd5a374_bbc53a66bf"
										tabIndex="-1"
										value=""
										readOnly
									/>
								</div>
								<div className="clear"></div>
								<input
									type="submit"
									value="subscribe"
									readOnly
									name="subscribe"
									id="mc-embedded-subscribe"
									className="btn-primary"
								/>
							</div>
							{EMAIL.err ? (
								<p className="text-red-500">{EMAIL.message}</p>
							) : null}
						</form>
					</div>
				</div>
			</section>
		);
	}
}

export default CoolPage;
