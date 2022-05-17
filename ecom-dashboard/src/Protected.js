import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
function Protected(props) {
    const navigate = useNavigate();
    let Cmp = props.Cmp;
    useEffect(() => {
        if (!localStorage.getItem("user-info")) {
            navigate("register");
        }
    }, []);
    return (
        <div>
            {Cmp}
        </div>
    )
}

// const Protected = () => {
//     const auth = null;

//     return auth ? <Outlet/> : <Navigate to="/register"/>
// }

export default Protected