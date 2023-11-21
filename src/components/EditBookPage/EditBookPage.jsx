import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { globalSliceSelector, setBooks } from '../HomePage/globalSlice';
import axios from 'axios';

function EditBookPage() {
    const dispatch = useDispatch()
    const { books } = useSelector(globalSliceSelector)
    const bookId = useParams().id
    const [bookForm, setBookForm] = useState({
        title: '',
        author: '',
        price: 0
    })

    const handleFormChanges = (e) => {
        const key = e.target.name
        const value = e.target.value
        setBookForm({ ...bookForm, [key]: value })
    }

    const handleSubmit = async () => {
        const url = `http://localhost:3001/api/books/${bookForm._id}`
        const res = await axios.put(url, bookForm)
        if (res.error) {
            return alert('Error')
        }

        const indexToUpdate = books.findIndex(book => book._id === bookId)
        const newBooksArray = books.map((book, i) => i !== indexToUpdate ? book : res.data)
        dispatch(setBooks(newBooksArray))
        return alert('Success')
    }

    useEffect(() => {
        if (books) {
            const foundBook = books.find(book => book._id === bookId)
            if(foundBook) {

                setBookForm(foundBook)
            }
        }
    }, [])

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
                Update Book
            </Button>
        </Form>
    );
}

export default EditBookPage;