import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

class EditContact extends Component {
  static getDerivedStateFromProps(props, state) {
    if (props.activeContact.id !== state.id) {
      return {
        fullName: props.activeContact.name,
        email: props.activeContact.email,
        phone: props.activeContact.phone,
        group: props.activeContact.group,
        id: props.activeContact.id
      }
    }
    return null;
  }
  state = {
    show: false,
    fullName: this.props.activeContact.name,
    email: this.props.activeContact.email,
    phone: this.props.activeContact.phone,
    group: this.props.activeContact.group,
    id: this.props.activeContact.id
  }

  handleClose = () => this.setState({show: false})
  handleShow = () => this.setState({show: true});
  handleFullName = (e) => this.setState({fullName: e.target.value})
  handleEmail = (e) => this.setState({email: e.target.value})
  handlePhone = (e) => this.setState({phone: e.target.value})
  handleGroup = (e) => this.setState({group: e.target.value})
  onContactUpdate = () => {
    const update = {
      name: this.state.fullName,
      email: this.state.email,
      phone: this.state.phone,
      group: this.state.group,
      id:  this.state.id,
    }
    
    this.props.onUpdateContact(update);
    this.setState({show: false})
  }

  render() {
    return (
      <>
        <Button 
          className="foot_buttons"  
          variant="outline-primary" 
          onClick={this.handleShow}>
          Edit
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
                {this.props.groups.map(group => <option value={group} key={group}>{group}</option>)}
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button 
              className="add-group add-group-btn" 
              variant="primary" 
              onClick={this.onContactUpdate}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default EditContact;