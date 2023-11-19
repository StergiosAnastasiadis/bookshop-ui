import axios from "axios"

export const fetchAllBooks = async () => {
    const getAllBooksURL = 'http://localhost:3001/api/books'
    return await axios.get(getAllBooksURL)
}