export default function ShowContact({ activeContact = {} }) {
  return (
    <div className="rs_informer">
      <h1 className="rs_title">Contacts Book</h1>
      <div className="rs_interface">
        <div className="rs_photo"><img src={activeContact.image} alt="logo" /></div>
          <div className="rs_designation">
            <button className="rs_designation_icon"><i className="fa fa-pencil-alt"></i></button>
            <span className="rs_designation_name">{activeContact.name}</span>
          </div>
      </div>
    <div className="rs_contact_info">
      <p>
        <span className="contact_icon"><i className="fas fa-envelope"></i></span>
        <span className="contact_title">Email:</span>
        <span className="contact_information">{activeContact.email}</span>
      </p>
      <p>
        <span className="contact_icon"><i className="fas fa-phone"></i></span>
        <span className="contact_title">Phone:</span>
        <span className="contact_information">{activeContact.phone}</span>
      </p>
      <p>
        <span className="contact_icon"><i className="fas fa-users"></i></span>
        <span className="contact_title">Group:</span>
        <span className="contact_information">{activeContact.group}</span>
      </p>
    </div>
  </div>
  )
}
