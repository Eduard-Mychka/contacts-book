import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const DropdownComponent = ({options, active, onChange}) => {
  const activeItem = options.find(item => item.value === active) || {};

  return (
    <Dropdown className="dropdown">
      <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
        {activeItem.text}
      </Dropdown.Toggle>
      <Dropdown.Menu className="">
        {options.map(item => {
          return (
            <Dropdown.Item  
              key={item.value} 
              as="button" 
              active={item.value === active}
              onClick={() => onChange(item.value)}>
              {item.text}
            </Dropdown.Item>
          )
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownComponent;