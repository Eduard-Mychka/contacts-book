import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

const EditContact = ({ activeContact, onUpdateContact, groups }) => {
  const [show, setShow] = useState(false)
  const [fullName, setFullName] = useState(activeContact.name)
  const [email, setEmail] = useState(activeContact.email)
  const [phone, setPhone] = useState(activeContact.phone)
  const [group, setGroup] = useState(activeContact.group)
  const [image, setImage] = useState(activeContact.image);
  const [id, setId] = useState(activeContact.id)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true);
  const handleFullName = (e) => setFullName(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)
  const handlePhone = (e) => setPhone(e.target.value)
  const handleGroup = (e) => setGroup(e.target.value)
  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  const onContactUpdate = () => {
    const update = {
      name: fullName,
      email,
      phone,
      group,
      image,
      id,
    }
    onUpdateContact(update);
    setShow(false)
  }

  useEffect(() => {
    setFullName(activeContact.name)
    setEmail(activeContact.email)
    setPhone(activeContact.phone)
    setGroup(activeContact.group)
    setImage(activeContact.image)
    setId(activeContact.id)

  }, [activeContact]);

  return (
    <>
      <Button 
        className="foot_buttons"  
        variant="outline-primary" 
        onClick={handleShow}>
        Edit
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

          <div className="mb-3">
            <label htmlFor="image"><span><i className="fas fa-images"></i></span> Image:</label>
            <input 
              type="file" 
              name="image" 
              className="form-control"  
              onChange={handleImage}
            />
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
            onClick={onContactUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditContact;