import './App.css';
import AddContactModal from './components/AddContactModal';
import Navbar from './components/Navbar';
import Table from './components/Table';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [contacts, setContacts] = useState([]);
  const [contactState, setContactState] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [contactModalState, setContactModalState] = useState(0);
  
  const addContactHandler = () => {
    setContactModalState(0);
    setModalShow(true);
  }

  const editContactHandler = (contact) => {
    setContactState(contact);
    setContactModalState(1);
    // console.log(contactState);
    setModalShow(true);
  }

  const deleteContactHandler = (id) => {
    axios.delete('https://immense-peak-05874.herokuapp.com/api/contact/' + id)
    .then(response => {
      console.log(response);
    })
  }

  useEffect(() => {
    axios.get('https://immense-peak-05874.herokuapp.com/api/contacts')
      .then(response => {
        setContacts(response.data);
        // console.log(contacts);      
      })
  });

  const contactsData = contacts.map(contact => {
    // console.log("render() method");
    return  <tr>
              <th scope="row">{contact.id}</th>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.gender == 'm' ? 'Male' : 'Female'}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
              <td>
                  <a href="#"><i className="fa fa-pen" onClick={() => editContactHandler(contact)}/></a>
                  <a href="#"><i className="fas fa-trash" onClick={() => deleteContactHandler(contact.id)}/></a>
              </td>
            </tr>
  });

  return (
    <div className="App">
      <Navbar addContact={addContactHandler}/>
      <AddContactModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        contact= {contactState}
        contactModalState = {contactModalState}
      />
      <Table>
        {contactsData}
      </Table>
    </div>
  );
  
}



export default App;
