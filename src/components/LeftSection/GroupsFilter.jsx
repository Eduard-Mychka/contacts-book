import Dropdown from 'react-bootstrap/Dropdown'

const DropDown = ({options, activeGroup, onGroupChange}) => {
  
  const activeItem = options.find(option => option === activeGroup) || {};

  return (
    <Dropdown className="dropdown">
      <Dropdown.Toggle className="dropdown-toggle-text" variant="outline-success" id="dropdown-basic">
        {activeItem}
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu">
        {options.map(option => {
          return (
            <Dropdown.Item 
              className="dropdown-menu-item"
              key={option} 
              as="button" 
              activeGroup={option === activeGroup}
              onClick={() => onGroupChange(option)}>
              {option}
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}  

export default DropDown;