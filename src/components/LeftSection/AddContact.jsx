import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

let id = 4

const AddContact = ({ groups, onAddContact }) => {
  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [group, setGroup] = useState(groups[0]);
  
  const handleShow = () => setShow(true);
  const handleFullName = (e) => setFullName(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)
  const handlePhone = (e) => setPhone(e.target.value)
  const handleGroup = (e) => setGroup(e.target.value)
  const handleClose = () => {
    setShow(false)
    setFullName('')
    setEmail('')
    setPhone('')
    setGroup(groups[0])
  } 

  const addContact = () => {
    const contact = {
      name: fullName,
      email,
      phone,
      group,
      id: id++,
    }
    
    if (fullName.trim().length === 0) return
    if (email.trim().length === 0) return
    if (phone.trim().length === 0) return
    onAddContact(contact)
    setShow(false)
    setFullName('')
    setEmail('')
    setPhone('')
    setGroup(groups[0])
  }    
  return (
    <>
      <Button 
        className="foot_buttons"  
        variant="outline-success" 
        onClick={handleShow}>
        Add Contact
      </Button>
      <Modal 
        contentClassName={'modal-content-contact'} 
        dialogClassName={'modal-dialog-contact'} 
        show={show} 
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className="mb-3">
            <label><span><i className="fa fa-pencil-alt"></i></span> Full Name:</label>
            <input 
              type="text" 
              className="form-control"  
              placeholder="Full Name" 
              onChange={handleFullName} 
              value={fullName}/>
          </div>

          <div className="mb-3">
            <label><span><i className="fas fa-envelope"></i></span> Email:</label>
            <input 
              type="email" 
              className="form-control"  
              placeholder="Email"
              onChange={handleEmail}
              value={email}/>
          </div>

          <div className="mb-3">
            <label htmlFor="phone"><span><i className="fas fa-phone"></i></span> Phone:</label>
            <input 
              type="tel" 
              name="phone" 
              className="form-control"  
              placeholder="+380" 
              onChange={handlePhone}
              value={phone}/>
          </div>

          <div className="">
            <label><span><i className="fas fa-users"></i></span> Group:</label>
            <select value={group} onChange={handleGroup}>
              {groups.map(group => <option value={group} key={group}>{group}</option>)}
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            className="add-group add-group-btn" 
            variant="primary" 
            onClick={addContact}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddContact;