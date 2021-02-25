import './App.css';
import AddContactModal from './components/AddContactModal';
import Navbar from './components/Navbar';
import Table from './components/Table';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [contacts, setContacts] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  
  const addContactHandler = () => {
    setModalShow(true);
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:8887/contacts.json')
      .then(response => {
        setContacts(response.data);
        console.log(contacts);      
      })
  });

  const contactsData = contacts.map(contact => {
    return  <tr>
              <th scope="row">{contact.id}</th>
              <td>{contact.firstName}</td>
              <td>{contact.lastname}</td>
              <td>{contact.gender}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
              <td>
                  <a href=""><i className="fa fa-pen"/></a>
                  <a href=""><i className="fas fa-trash"/></a>
              </td>
            </tr>
  });

  return (
    <div className="App">
      <Navbar addContact={addContactHandler}/>
      <AddContactModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Table>
        {contactsData}
      </Table>
    </div>
  );
  
}



export default App;
