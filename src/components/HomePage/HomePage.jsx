import React, { useEffect, useState } from 'react'
import { fetchAllBooks } from '../../services/apiCalls'
import Card from 'react-bootstrap/Card';

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
            <div>HomePage</div>
            <button onClick={fetchBook}></button>
            <div>
                {books?.map((book) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>{book.title}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                          <Card.Text>
                            {book.price}
                          </Card.Text>
                          {/* <Card.Link href="#">Card Link</Card.Link>
                          <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                      </Card>
                    )
                })}
            </div>
        </>
    )
}

export default HomePage