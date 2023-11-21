import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { deleteABook, fetchAllBooks } from '../../services/apiCalls'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { globalSliceSelector, setBookToDelete, setBooks, setShowDeleteModal } from './globalSlice';
import DeleteJobModal from '../modals/DeleteJobModal';

function HomePage() {
    const dispatch = useDispatch()
    const { books } = useSelector(globalSliceSelector)

    const fetchBook = async () => {
        const res = await fetchAllBooks()
        if (res.error) {
            alert('Error')
        }
        if (!res.error) {
            dispatch(setBooks(res.data))
        }
    }

    const handleDelete = async (book) => {
        dispatch(setBookToDelete(book))
        dispatch(setShowDeleteModal(true))
    }

    useEffect(() => {
        fetchBook()
    }, [])

    return (
        <>
            <DeleteJobModal />
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
                                <div>
                                    <Button variant="warning">
                                        <Link to={`/edit-book/${book._id}`} relative="path" style={{ textDecoration: 'inherit', color: 'inherit' }}>
                                            Edit
                                        </Link>
                                    </Button>
                                    <Button variant="danger" onClick={() => handleDelete(book)}>
                                        Delete
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}

export default HomePage