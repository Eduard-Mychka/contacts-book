import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


export class AddGroup extends Component{

  state = { 
    show: false, 
    groupName: '' 
  }

  handleClose = () => this.setState({show:false, groupName: ''});
  handleShow = () => this.setState({show:true});

  handleInputChange = (e) => {this.setState({groupName: e.target.value})};

  onSubmitText = (e) => {
    e.preventDefault();
    if (this.state.groupName.trim().length === 0) return
    this.props.onAddGroup(this.state.groupName)
    this.setState({groupName: '', show: false})
    
  }

  render() {
    return (
      <>
        <div className="add-group">
          <Button 
            className="add-group-btn" 
            variant="outline-success" 
            onClick={this.handleShow}>
              Add Group
          </Button>
        </div>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Modal.Title>Please, enter the name of your group!</Modal.Title>
            <InputGroup>
              <FormControl 
                className="modal-input"
                aria-describedby="basic-addon1" 
                placeholder="Write the group" 
                value={this.state.groupName} 
                onChange={this.handleInputChange}/>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button className="modal-footer-btn" variant="outline-success" onClick={this.handleClose}>
              Close
            </Button>
            <Button className="modal-footer-btn" variant="outline-success" onClick={this.onSubmitText}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

