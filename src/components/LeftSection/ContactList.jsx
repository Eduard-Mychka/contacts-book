import { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default class ContactList extends Component {
  render() {
    const {contacts, activeContactId, onContactChange} = this.props
    return (
    <div className="ls_contact_list">
      <ListGroup as="ul" variant="flush">
        {contacts.map(contact => {
          return (
            <ListGroup.Item 
              className={contact.id === activeContactId ? 'active list-item' : 'list-item'} 
              key={contact.id} as="li"
              onClick={() => onContactChange(contact)}
              contact={contact}
              >{contact.name} 
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
    )
  }
}
