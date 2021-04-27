import { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default class UsersList extends Component {
  render() {
    const {users, activeUserId, onUserChange} = this.props
    return (
    <div className="ls_contact_list">
      <ListGroup as="ul" variant="flush">
        {users.map(user => {
          return (
            <ListGroup.Item 
              className={user.id === activeUserId ? 'active list-item' : 'list-item'} 
              key={user.id} as="li"
              onClick={() => onUserChange(user)}
              >{user.name} 
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
    )
  }
}
