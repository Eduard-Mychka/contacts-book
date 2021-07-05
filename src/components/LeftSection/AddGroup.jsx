import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ModalGroup from './ModalGroup';

const AddGroup = ({ onAddGroup }) => {
  const [show, setShow] = useState(false);
  const [groupName, setGroupName] = useState('');

  const handleShow = () => setShow(true);
  const handleInputChange = (e) => setGroupName(e.target.value);
  const handleClose = () => {
    setShow(false)
    setGroupName('')
  }
  const onSubmitText = () => {
    if (groupName.trim().length === 0) return
    onAddGroup(groupName)
    setShow(false)
    setGroupName('')
  }
  
    return (
      <>
        <div className="add-group">
          <Button 
            className="add-group-btn" 
            variant="outline-success" 
            onClick={handleShow}>
            Add Group
          </Button>
        </div>
        <ModalGroup 
          onSubmitText={onSubmitText}
          handleClose={handleClose}
          handleInputChange={handleInputChange}
          show={show}
          groupName={groupName}/>
      </>
    );
  
}

export default AddGroup;