import Header from "./Header";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
function Login() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/add");
        }
    }, [])
    return (
        <div>
            <Header />
            <h1>Halaman Login</h1>
        </div>
    )
}
export default Login