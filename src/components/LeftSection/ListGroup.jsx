import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default class ListGroups extends Component {
  render() {
    return (
    <div className="ls_contact_list">
      <ListGroup as="ul" variant="flush">
        <ListGroup.Item className="list-item" as="li">Cras justo odio</ListGroup.Item>
        <ListGroup.Item className="list-item" as="li">Dapibus ac facilisis</ListGroup.Item>
        <ListGroup.Item className="list-item" as="li">Morbi leo risus</ListGroup.Item>
        <ListGroup.Item className="list-item" as="li">Porta ac consectetur</ListGroup.Item>
        <ListGroup.Item className="list-item" as="li">Porta ac consectetur</ListGroup.Item>
        <ListGroup.Item className="list-item" as="li">Cras justo odio</ListGroup.Item>
        <ListGroup.Item className="list-item" as="li">Dapibus ac facilisis</ListGroup.Item>
        <ListGroup.Item className="list-item" as="li">Morbi leo risus</ListGroup.Item>
      </ListGroup>
    </div>
    )
  }
}
