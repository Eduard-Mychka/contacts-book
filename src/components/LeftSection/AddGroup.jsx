import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ModalGroup from './ModalGroup';

export class AddGroup extends Component{

  state = { 
    show: false, 
    groupName: '' 
  }

  handleClose = () => this.setState({show:false, groupName: ''});
  handleShow = () => this.setState({show:true});
  handleInputChange = (e) => {this.setState({groupName: e.target.value})};
  onSubmitText = () => {
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
        <ModalGroup 
          onSubmitText={this.onSubmitText}
          handleClose={this.handleClose}
          handleInputChange={this.handleInputChange}
          show={this.state.show}
          groupName={this.state.groupName}/>
      </>
    );
  }
}

