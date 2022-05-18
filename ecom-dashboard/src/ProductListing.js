import Header from "./Header"
import React, { useState, useEffect } from "react";
import { Table, Alert } from 'react-bootstrap';
function ProductListing() {
    const [showAlert, setShowAlert] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
        //     // let result = await fetch("http://localhost:8000/api/listProduct");
        //     // result = await result.json();
        //     // setData(result);
        // }
    }, []);
    console.warn("result", data)

    async function deleteOperation(id) {
        if (window.confirm("Are you sure want to delete product ?")) {
            let result = await fetch("http://localhost:8000/api/deleteProduct/" + id, {
                method: 'DELETE',
            });
            result = await result.json;
            console.warn(result);
            getData();
            setShowAlert(true)
        } else {
            getData();
        }
    }

    async function getData() {
        let result = await fetch("http://localhost:8000/api/listProduct");
        result = await result.json();
        setData(result);
    }

    return (
        <div>
            <Header />
            <h1>Product List</h1>
            <Alert variant="danger" show={showAlert}>
                Product has been deleted!
            </Alert>
            <div className="col-sm-8 offset-sm-2">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            {/* <td>ID</td> */}
                            <td>Name</td>
                            <td>Price</td>
                            <td>Description</td>
                            <td>Image</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    {data.map((item) => (
                        <tbody key={item.name}>
                            <tr>
                                {/* <td>{item.id}</td> */}
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>
                                    <img style={{ width: 100 }} src={"http://localhost:8000/" + item.file_path}></img>
                                </td>
                                <td>
                                    <span className="btn btn-primary" onClick={() => deleteOperation(item.id)}>Delete</span>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
}

export default ProductListing;