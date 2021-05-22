import { Component } from 'react';

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


export default class RemoveContact extends Component {

  state = {
    show: false,
  }

  handleClose = () => this.setState({show: false});
  handleShow = () => this.setState({show: true});
  onRemove = () => {
    this.setState({ show: false})
    this.props.onDeleted(this.props.activeContact.id)
  }

  render() {
    const { activeContact } = this.props
    return (
      <>
        <Button 
          className="foot_buttons" 
          variant="outline-danger" 
          onClick={this.handleShow}>
          Remove
        </Button>
    
        <Modal 
          contentClassName="modal-content-remove" 
          dialogClassName="modal-dialog-remove"
          show={this.state.show} 
          onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Remove Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure that you are wanted to delete {activeContact.name}?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.onRemove}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
