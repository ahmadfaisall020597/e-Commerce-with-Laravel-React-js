import Header from "./Header";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/add");
        }
    }, []);

    async function login() {
        console.warn(email, password)
        let item = { email, password };
        let result = await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "aplication/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/add")
    }

    return (
        <div>
            <Header />
            <h1>Login</h1>
            <br />
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