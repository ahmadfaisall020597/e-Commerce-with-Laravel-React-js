import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Register() {
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/add");
        }
    }, [])
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    async function signUp() {
        let item = { name, password, email }
        console.warn(item);

        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "content-type": "application/json",
                "Accept": "application/json"

            }
        })
        result = await result.json();
        console.warn("result", result);
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/add")
    }

    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Halaman Register</h1>
                <input
                    type="text"
                    value={name}
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
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
                <input
                    type="text"
                    value={email}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <br />
                <button
                    onClick={signUp}
                    className="btn-primary">
                    Sign-Up
                </button>
            </div>
        </>
    );
}
export default Register