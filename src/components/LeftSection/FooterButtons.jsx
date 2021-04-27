import Button from 'react-bootstrap/Button'

export const FooterButtons = ()  =>{
  return (
    <div className="ls_foot_buttons">
      <Button className="foot_buttons" variant="outline-primary">Edit</Button>
      <Button className="foot_buttons" variant="outline-success">Add Contact</Button>
      <Button className="foot_buttons" variant="outline-danger">Remove</Button>
    </div>
  )
}
