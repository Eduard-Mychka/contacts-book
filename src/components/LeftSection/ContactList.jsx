import ListGroup from 'react-bootstrap/ListGroup'

const ContactList = ({ contacts, activeContactId, onContactChange }) => {
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

export default ContactList