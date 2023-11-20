import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { fetchAllBooks } from '../../services/apiCalls'
import Button from 'react-bootstrap/Button';

function HomePage() {
    const [books, setBooks] = useState([])


    const fetchBook = async () => {
        const res = await fetchAllBooks()
        if (res.error) {
            alert('Error')
        }
        if (!res.error) {
            setBooks(res.data)
        }
    }

    useEffect(() => {
        fetchBook()
    }, [])

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 15 }}>
                {books?.map((book) => {
                    return (
                        <Card style={{ width: '18rem' }} key={book._id}>
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                                <Card.Text>
                                    {book.price}
                                </Card.Text>
                                <Button variant="warning" onClick={() => alert(book._id)}>Edit</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}

export default HomePage