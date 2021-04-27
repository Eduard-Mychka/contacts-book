import Dropdown from 'react-bootstrap/Dropdown'

export const DropDown = ({options, active, onChange}) => {
  const activeItem = options.find(item => item === active) || {};

  return (
    <Dropdown className="dropdown">
      <Dropdown.Toggle className="dropdown-toggle-text" variant="outline-success" id="dropdown-basic">
        {activeItem}
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu">
        {options.map(item => {
          return (
            <Dropdown.Item 
              className="dropdown-menu-item"
              key={item} 
              as="button" 
              active={item === active}
              onClick={() => onChange(item)}>
              {item}
            </Dropdown.Item>
          )
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}  