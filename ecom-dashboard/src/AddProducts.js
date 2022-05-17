import Header from "./Header";
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
function AddProducts() {
    const [showAlert, setShowAlert] = useState(false);
    const [name, setName] = useState("")
    const [file, setFile] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    async function addProduct() {
        console.warn(name, file, price, description);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('price', price);
        formData.append('name', name);
        formData.append('description', description);

        let result = await fetch("http://localhost:8000/api/addProduct",
            {
                method: 'POST',
                body: formData
            });
        setShowAlert(true)
    }

    return (
        <div>
            <Header />
            <h1>Add Product</h1>
            <Alert variant="success" show={showAlert}>
                Product Added!
            </Alert>
            <div className="col-sm-6 offset-sm-3">
                <br />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}>
                </input>
                <br />

                <input
                    type="file"
                    className="form-control"
                    placeholder="File"
                    onChange={(e) => setFile(e.target.files[0])}>
                </input>
                <br />

                <input
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}>
                </input>
                <br />
                <textarea
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}>
                </textarea>
                <br />
                <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
            </div>
        </div>
    )
}
export default AddProducts