import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { globalSliceSelector, setShowDeleteModal } from '../HomePage/globalSlice';
import { useSelector } from 'react-redux';

function DeleteJobModal() {
    const { bookToDelete, showDeleteModal } = useSelector(globalSliceSelector)

    const handleClose = () => setShowDeleteModal(false);
    const handleShow = () => setShowDeleteModal(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={showDeleteModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete {bookToDelete?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{bookToDelete?.author}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteJobModal;