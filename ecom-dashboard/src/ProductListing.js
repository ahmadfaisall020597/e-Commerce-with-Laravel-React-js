import Header from "./Header"
import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap'
function ProductListing() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function ProductList() {
            let result = await fetch("http://localhost:8000/api/listProduct");
            result = await result.json();
            setData(result);
        }
        ProductList();
    }, []);
    console.warn("result", data)
    return (
        <div>
            <Header />
            <h1>Product List</h1>
            <div className="col-sm-8 offset-sm-2">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Description</td>
                            <td>Image</td>
                        </tr>
                    </thead>
                    {data.map((item) => (
                        <tbody key={item.id}>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>
                                    <img style={{ width: 100 }} src={"http://localhost:8000/" + item.file_path}></img>
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