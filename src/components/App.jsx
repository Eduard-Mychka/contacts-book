import { Component } from 'react';
import GroupsFilter from './LeftSection/GroupsFilter'
import ContactList from './LeftSection/ContactList';
import EditContact from './LeftSection/EditContact';
import SearchContact from './LeftSection/SearchContact';
import { AddGroup } from './LeftSection/AddGroup';
import ShowContact from './RightSection/ShowContact'
import AddContact from './LeftSection/AddContact';
import RemoveContact from './LeftSection/RemoveContact';

export default class App extends Component {

  state = {
    activeGroup: 'All Group',
    groups: ['All Group','Group Family','Group Friends','Group Сommunity','Group Anonim'],
    contacts: [
      {id: 1, name: 'Ivan Stepanovich Butko', email: 'ivanbutko@.gmail.com', phone: '+38 063 578 9012', group: 'Community'},
      {id: 2, name: 'Alexander Gnatko', email: 'gnatko@.gmail.com', phone: '+38 063 434 3234', group: 'Friends'},
      {id: 3, name: 'Tsar\'s Muzzle Hints', email: 'tsar\'smuzzlehints@.gmail.com', phone: '+38 063 342 7121', group: 'Anonim'},
    ],
    search: '',
    activeContact: undefined,
  }

  onSearchChange = (value) => this.setState({search: value})
  onGroupChange = (option) => this.setState({activeGroup: option})
  onContactChange = (contact) => this.setState({activeContact: contact})
  onAddGroup = (groupName) => this.setState(({ groups }) => ({groups: [...groups, groupName]}));
  onAddContact = (contact) => this.setState(({ contacts }) => ({contacts: [...contacts, contact]}));
  onDeleted = (id) => {
    this.setState(({ contacts }) => ({contacts: contacts.filter(contact => id !== contact.id)}))
    this.setState({activeContact: undefined})
  };

  onUpdateContact = (update) => {
    this.setState(({ contacts }) => ({contacts: contacts.map(contact => {
      return update.id === contact.id ? update : contact}), activeContact: update})
    )
  }
  
  render() {
    const {activeGroup, groups, contacts, activeContact, search} = this.state;

    let filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()));

    return (
      <div className="App">
        <div className="row no-gutters">
          <div className="col-sm-5 pe-0">
            <section className="left_section">
              <SearchContact onSearchChange={this.onSearchChange} searchValue={search}/>
              <div className="ls_nead_buttons">
                <GroupsFilter options={groups} activeGroup={activeGroup} onGroupChange={this.onGroupChange}/>
                <AddGroup onAddGroup={this.onAddGroup}/>
              </div>
              <ContactList 
                contacts={filterContacts} 
                activeContactId={activeContact?.id} 
                onContactChange={this.onContactChange}
              />
              <div className="ls_foot_buttons">
                {this.state.activeContact &&  <EditContact activeContact={activeContact} groups={groups} onUpdateContact={this.onUpdateContact}/>}
                <AddContact groups={groups} onAddContact={this.onAddContact}/>
                {this.state.activeContact && <RemoveContact onDeleted={this.onDeleted} activeContact={activeContact}/>}
              </div>
            </section>
          </div>
          <div className="col-sm-7 ps-0">
            <section className="right-section">
              <ShowContact activeContact={activeContact}/>
            </section>
          </div>
        </div> 
      </div>
    );
  }
}

