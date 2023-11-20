import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function AddBookPage() {
    const initialState = {
        title: '',
        author: '',
        price: 0
    }
    const [bookForm, setBookForm] = useState(initialState)

    const handleFormChanges = (e) => {
        const key = e.target.name
        const value = e.target.value

        setBookForm({ ...bookForm, [key]: value })
    }

    const handleSubmit = async () => {
        const url = 'http://localhost:3001/api/books'
        const res = await axios.post(url, bookForm)
        if (res.error) {
            return alert('Error')
        }
        return alert('Success')
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Title</Form.Label>
                <Form.Control placeholder="Title" name='title' value={bookForm.title} onChange={handleFormChanges} />
                <Form.Text className="text-muted">
                    Text
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Author</Form.Label>
                <Form.Control placeholder="Author" name='author' value={bookForm.author} onChange={handleFormChanges} />
                <Form.Text className="text-muted">
                    Author
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Price</Form.Label>
                <Form.Control placeholder="Price" name='price' value={bookForm.price} onChange={handleFormChanges} />
                <Form.Text className="text-muted">
                    Book Price
                </Form.Text>
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
                Add Book
            </Button>
        </Form>
    );
}

export default AddBookPage