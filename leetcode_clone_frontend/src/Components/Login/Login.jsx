import React from "react";
import axios from "axios";
import { useState } from "react";
import { backendUrl } from "../constants.js";
import "./Login.css"; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate(); 
  return (
		<div id="login" className="flex-col">
			<h1>Login</h1>
			<div className="signup-form">
				<div className="subform">
					<label htmlFor="email">Email: </label><br/>
					<input
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						type="email"
						name="email"
						placeholder="Your Email"
					/>
				</div>
        <div className="subform">
					<label htmlFor="password">Password: </label><br/>
					<input
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						name="password"
						placeholder="Your Password"
					/>
				</div>
        <button
					type="submit"
					id="test"
					onClick={async (e) => {
						axios
							.post(`${backendUrl}/login`, {
								email: email,
								password: password,
							})
							.then(function (response) {
								localStorage.setItem(
									"token",
									response.data.token
								);
								navigate("/problems");
							})
							.catch(function (error) {
								console.log(error);
							});
					}}
				>
					Login
				</button>
				<p className="forgot-password text-right">
            New User? <a href="/signup">Signup</a>
          </p>
			</div>
		</div>
	);
};

export default Login;
