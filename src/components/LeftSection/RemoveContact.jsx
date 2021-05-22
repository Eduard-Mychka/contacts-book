import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const RemoveContact = ({ onDeleted, activeContact }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onRemove = () => {
    setShow(false)
    onDeleted(activeContact.id)
  }

  return (
    <>
      <Button 
        className="foot_buttons" 
        variant="outline-danger" 
        onClick={handleShow}>
        Remove
      </Button>
  
      <Modal 
        contentClassName="modal-content-remove" 
        dialogClassName="modal-dialog-remove"
        show={show} 
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure that you are wanted to delete {activeContact.name}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onRemove}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RemoveContact;