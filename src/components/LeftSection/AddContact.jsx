import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

let id = 4

class AddContact extends Component {

  state = {
    show: false,
    fullName: '',
    email: '',
    phone: '',
    group: this.props.groups[0],
  }

  handleClose = () => {
    this.setState({fullName: '', email: '', show: false, phone: '', group: this.props.groups[0]})
  } 
  handleShow = () => this.setState({show: true});
  handleFullName = (e) => this.setState({fullName: e.target.value})
  handleEmail = (e) => this.setState({email: e.target.value})
  handlePhone = (e) => this.setState({phone: e.target.value})
  handleGroup = (e) => this.setState({group: e.target.value})

  addContact = () => {
    const contact = {
      name: this.state.fullName,
      email: this.state.email,
      phone: this.state.phone,
      group: this.state.group,
      id: id++,
    }
    if (this.state.fullName.trim().length === 0) return
    if (this.state.email.trim().length === 0) return
    if (this.state.phone.trim().length === 0) return
    this.props.onAddContact(contact)
    this.setState({fullName: '', email: '', show: false, phone: '', group: this.props.groups[0]})
  }

  render() {
    const {groups} = this.props;
    return (
      <>
        <Button 
          className="foot_buttons"  
          variant="outline-success" 
          onClick={this.handleShow}>
          Add Contact
        </Button>
        <Modal 
          contentClassName={'modal-content-contact'} 
          dialogClassName={'modal-dialog-contact'} 
          show={this.state.show} 
          onHide={this.handleClose}>
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
                onChange={this.handleFullName} 
                value={this.state.fullName}/>
            </div>

            <div className="mb-3">
              <label><span><i className="fas fa-envelope"></i></span> Email:</label>
              <input 
                type="email" 
                className="form-control"  
                placeholder="Email"
                onChange={this.handleEmail}
                value={this.state.email}/>
            </div>

            <div className="mb-3">
              <label htmlFor="phone"><span><i className="fas fa-phone"></i></span> Phone:</label>
              <input 
                type="tel" 
                name="phone" 
                className="form-control"  
                placeholder="+380" 
                onChange={this.handlePhone}
                value={this.state.phone}/>
            </div>

            <div className="">
              <label><span><i className="fas fa-users"></i></span> Group:</label>
              <select value={this.state.group} onChange={this.handleGroup}>
                {groups.map(group => <option value={group} key={group}>{group}</option>)}
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button 
              className="add-group add-group-btn" 
              variant="primary" 
              onClick={this.addContact}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddContact;