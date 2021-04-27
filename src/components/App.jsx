import { Component } from 'react';
import { DropDown } from './LeftSection/Dropdown'
import UsersList from './LeftSection/UsersList';
import { FooterButtons } from './LeftSection/FooterButtons';
import Search from './LeftSection/Search';
import { AddGroup } from './LeftSection/AddGroup';
import ShowUser from './RightSection/ShowUser'

export default class App extends Component {

  state = {
    active: 'All Contacts',
    options: ['All Contacts','Group Family','Group Friends','Group Сommunity','Group Anonim'],

    users: [
      {id: 1, name: 'Ivan Stepanovich Butko', email: 'ivanbutko@.gmail.com', phone: '+38 063 578 9012', group: 'Community'},
      {id: 2, name: 'Alexander Gnatko', email: 'gnatko@.gmail.com', phone: '+38 063 434 3234', group: 'Friends'},
      {id: 3, name: 'Tsar\'s Muzzle Hints', email: 'tsar\'smuzzlehints@.gmail.com', phone: '+38 063 342 7121', group: 'Anonim'},
    ],
    activeUser: undefined
  }

  onUserChange = (user) => this.setState({activeUser: user})
  onChange = (value) => this.setState({active: value})

  onAddGroup = (groupName) => {
    this.setState(({ options }) => ({options: [...options, groupName]})
  )};

  render() {
    const {active, options, users, activeUser} = this.state;

    return (
      <div className="App">
        <div className="row no-gutters">
          <div className="col-sm-5 pe-0">
            <section className="left_section">
              <Search/>
              <div className="ls_nead_buttons">
                <DropDown 
                  options={options} 
                  active={active} 
                  onChange={this.onChange}
                />
                <AddGroup 
                  onAddGroup={this.onAddGroup}
                />
              </div>
              <UsersList 
                users={users} 
                activeUserId={activeUser?.id} 
                onUserChange={this.onUserChange}
              />
              <FooterButtons/>
            </section>
          </div>
          <div className="col-sm-7 ps-0">
            <section className="right-section">
              <ShowUser activeUser={activeUser}/>
            </section>
          </div>
        </div> 
      </div>
    );
  }
}

