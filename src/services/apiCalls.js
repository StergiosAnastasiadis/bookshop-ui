import axios from "axios"

export const fetchAllBooks = async () => {
    const getAllBooksURL = 'http://localhost:3'
    return await axios.get(getAllBooksURL)
}

export const deleteABook = async (bookId) => {
    return await axios.delete(`http://localhost:30d`)
}