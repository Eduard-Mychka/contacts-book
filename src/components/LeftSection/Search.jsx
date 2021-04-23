import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div className="ls_search">
        <input className="form-control" type="search" name="search" placeholder="Search your contacts..."/>
      </div>
    )
  }
}
