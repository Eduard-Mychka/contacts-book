import { useState } from 'react';
import photo from '../../assets/images/02.gif'
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

const ShowContact = ({ activeContact = {} }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="rs_informer">
      <h1 className="rs_title">Contacts Book</h1>
      <div className="rs_interface">
        <div 
          className="rs_photo" 
          onClick={handleShow}>{activeContact.image 
          ? <img src={activeContact.image} alt="logo"/> 
          : <img src={photo} alt="logo"/>}
        </div>

      <Modal 
        dialogClassName={'modal-dialog'}
        contentClassName={'modal-content'}
        show={show} 
        onHide={handleClose}  
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Body className="modal-body">
          <img src={activeContact.image} alt="logo"/>
        </Modal.Body>
      </Modal>
        <div className="rs_designation">
          {/* <button className="rs_designation_icon"><i className="fa fa-pencil-alt"></i></button> */}
          <span className="rs_designation_name">{activeContact.name}</span>
        </div>
      </div>
    <div className="rs_contact_info">
      <p>
        <span className="contact_icon"><i className="fas fa-envelope"></i></span>
        <span className="contact_title">Email:</span>
        <span className="contact_information">{activeContact.email}</span>
      </p>
      <p>
        <span className="contact_icon"><i className="fas fa-phone"></i></span>
        <span className="contact_title">Phone:</span>
        <span className="contact_information">{activeContact.phone}</span>
      </p>
      <p>
        <span className="contact_icon"><i className="fas fa-users"></i></span>
        <span className="contact_title">Group:</span>
        <span className="contact_information">{activeContact.group}</span>
      </p>
    </div>
  </div>
  )
}

ShowContact.propTypes = {
  activeContact:  PropTypes.shape({
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired
  })
}

export default ShowContact;