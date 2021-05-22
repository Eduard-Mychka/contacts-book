import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';


const ModalGroup = ({handleClose, handleInputChange, onSubmitText, show, groupName}) => {
  return (
      <Modal 
        dialogClassName={'modal-dialog-group'}  
        contentClassName={'modal-content-group'}
        show={show} 
        onHide={handleClose}>
      <Modal.Header className="modal-group-header" closeButton></Modal.Header>
      <Modal.Body className="modal-group-body"> 
        <Modal.Title className="modal-group-title">Please, enter the name of your group!</Modal.Title>
        <InputGroup>
          <FormControl 
            className="modal-input"
            aria-describedby="basic-addon1" 
            placeholder="Write the group" 
            value={groupName} 
            onChange={handleInputChange}/>
        </InputGroup>
      </Modal.Body>
      <Modal.Footer className="modal-group-footer">
        <Button className="modal-footer-btn" variant="outline-success" onClick={handleClose}>
          Close
        </Button>
        <Button className="modal-footer-btn" variant="outline-success" onClick={onSubmitText}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalGroup;