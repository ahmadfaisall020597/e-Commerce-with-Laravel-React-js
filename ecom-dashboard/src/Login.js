import Header from "./Header";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
function Login() {
    const [showAlert, setShowAlert] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/add");
        }
    }, []);

    function login() {
        console.warn(email, password)
        let item = { email, password };
        fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "aplication/json"
            },
            body: JSON.stringify(item)
        }).then((response) => {
            if (response.status === 401) setShowAlert(true)
            else return response.json()
        }).then((data) => {
            localStorage.setItem("user-info", JSON.stringify(data))
            navigate("/add");
        })
    }

    return (
        <div>
            <Header />
            <h1>Login</h1>
            <br />
            <Alert variant="warning" show={showAlert}>
                Sorry, Email or Password doesn't match
            </Alert>
            <div className="col-sm-6 offset-sm-3">
                <input
                    type="text"
                    value={email}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <br />
                <input
                    type="password"
                    value={password}
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <br />
                <button
                    onClick={login}
                    className="btn btn-primary">
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login