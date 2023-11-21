import axios from "axios"
const baseURL = process.env.REACT_APP_BASE_URL

export const fetchAllBooks = async () => {
    const getAllBooksURL = `${baseURL}/api/books`
    return await axios.get(getAllBooksURL)
}

export const deleteABook = async (bookId) => {
    return await axios.delete(`${baseURL}/api/books/:id`)
}