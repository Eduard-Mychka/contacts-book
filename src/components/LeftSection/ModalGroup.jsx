import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';


const ModalGroup = ({handleClose, handleInputChange, onSubmitText, show, groupName}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Modal.Title>Please, enter the name of your group!</Modal.Title>
        <InputGroup>
          <FormControl 
            className="modal-input"
            aria-describedby="basic-addon1" 
            placeholder="Write the group" 
            value={groupName} 
            onChange={handleInputChange}/>
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
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