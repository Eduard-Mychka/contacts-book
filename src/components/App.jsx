import React, { Component } from 'react';
import Dropdown from './LeftSection/Dropdown'
import ListGroups from './LeftSection/ListGroup';
import FooterButtons from './LeftSection/FooterButtons';
import Search from './LeftSection/Search';
import AddGroup from './LeftSection/AddGroup';

export default class App extends Component {

  state = {
    active: 'family',
    options: [
      {value: 'family', text: 'Group Family'},
      {value: 'friends', text: 'Group Friends'},
      {value: 'colleagues', text: 'Group Сolleagues'},
      {value: 'community', text: 'Group Сommunity'},
    ]
  }

  onChange = (value) => {
    this.setState({active: value})
  }

  render() {
    const {active, options} = this.state

    return (
      <div className="App">
        <div className="row no-gutters">
          <div className="col-sm-5 pe-0">
            <section className="left_section">
              <Search/>
              <div className="ls_nead_buttons">
                <div><Dropdown options={options} active={active} onChange={this.onChange}/></div>
                <div><AddGroup/></div>
              </div>
              <ListGroups/>
              <FooterButtons/>
            </section>
          </div>
          <div className="col-sm-7 ps-0">
            <section className="right-section">
              <div className="rs_informer">
                <h1 className="rs_title">Contacts Book</h1>
                <div className="rs_interface">
                  <div className="rs_photo"></div>
                  <div className="rs_anonym">
                    <div className="rs_designation">
                      <button className="rs_designation_icon"><i className="fa fa-pencil-alt"></i></button>
                      <span className="rs_designation_name">Myshlen Sem Cock</span>
                    </div>
                  </div>
                </div>
                <div className="rs_contact_info">
                  <p>
                    <span><i class="fas fa-envelope"></i></span>
                    Email: 
                    <span>nickmychka@gmail.com</span>
                  </p>
                  <p>
                    <span><i class="fas fa-phone"></i></span>
                    Phone:  
                    <span>+380 737587463</span>
                  </p>
                  <p>
                    <span><i class="fas fa-users"></i></span>
                    Group: 
                    <span>Family</span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div> 
      </div>
    );
  }
}

