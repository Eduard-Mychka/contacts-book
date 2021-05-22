import React, { useState } from 'react';
import GroupsFilter from './LeftSection/GroupsFilter'
import ContactList from './LeftSection/ContactList';
import EditContact from './LeftSection/EditContact';
import SearchContact from './LeftSection/SearchContact';
import AddGroup from './LeftSection/AddGroup';
import ShowContact from './RightSection/ShowContact'
import AddContact from './LeftSection/AddContact';
import RemoveContact from './LeftSection/RemoveContact';

const App = () => {
  const [groups, setGroups] = useState(['All Group','Group Family','Group Friends','Group Сommunity','Group Anonim'])
  const [activeGroup, setActiveGroup] = useState('All Group')
  const [search, setSearch] = useState('')
  const [activeContact, setActiveContact] = useState(undefined)
  const [contacts, setContacts] = useState([
    {id: 1, name: 'Ivan Stepanovich Butko', email: 'ivanbutko@.gmail.com', phone: '+38 063 578 9012', group: 'Community'},
    {id: 2, name: 'Alexander Gnatko', email: 'gnatko@.gmail.com', phone: '+38 063 434 3234', group: 'Friends'},
    {id: 3, name: 'Tsar\'s Muzzle Hints', email: 'tsar\'smuzzlehints@.gmail.com', phone: '+38 063 342 7121', group: 'Anonim'},
  ])
  
  const onSearchChange = (value) => setSearch(value)
  const onGroupChange = (option) => setActiveGroup(option)
  const onContactChange = (contact) => setActiveContact(contact)
  const onAddGroup = (groupName) => setGroups([...groups, groupName]);
  const onAddContact = (contact) => setContacts([...contacts, contact]);
  const onDeleted = (id) => {
    setContacts(contacts.filter(contact => id !== contact.id))
    setActiveContact(undefined)
  };
  const onUpdateContact = (update) => {
    setContacts(contacts.map(contact => update.id === contact.id ? update : contact), update)
  }
  
  const filterContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(search.toLowerCase())});

  return (
    <div className="App">
      <div className="row no-gutters">
        <div className="col-sm-5 pe-0">
          <section className="left_section">
            <SearchContact onSearchChange={onSearchChange} searchValue={search}/>
            <div className="ls_nead_buttons">
              <GroupsFilter options={groups} activeGroup={activeGroup} onGroupChange={onGroupChange}/>
              <AddGroup onAddGroup={onAddGroup}/>
            </div>
            <ContactList 
              contacts={filterContacts} 
              activeContactId={activeContact?.id} 
              onContactChange={onContactChange}
            />
            <div className="ls_foot_buttons">
              {activeContact &&  <EditContact activeContact={activeContact} groups={groups} onUpdateContact={onUpdateContact}/>}
              <AddContact groups={groups} onAddContact={onAddContact}/>
              {activeContact && <RemoveContact onDeleted={onDeleted} activeContact={activeContact}/>}
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

export default App;