import './App.css';
import AddContactModal from './components/AddContactModal';
import Navbar from './components/Navbar';
import Table from './components/Table';
import React from 'react';

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  
  const addContactHandler = () => {
    console.log('Was clicked!');
    setModalShow(true)
  }

  return (
    <div className="App">
      <Navbar addContact={addContactHandler}/>
      <AddContactModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Table>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>Male</td>
          <td>0652238256</td>
          <td>example@email.com</td>
          <td>
              <a href=""><i className="fa fa-pen"/></a>
              <a href=""><i className="fas fa-trash"/></a>
          </td>
        </tr>

        <tr>
          <th scope="row">2</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>Male</td>
          <td>0652238256</td>
          <td>example@email.com</td>
          <td>
              <a href=""><i className="fa fa-pen"/></a>
              <a href=""><i className="fas fa-trash"/></a>
          </td>
        </tr>        
        
        <tr>
          <th scope="row">3</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>Male</td>
          <td>0652238256</td>
          <td>example@email.com</td>
          <td>
              <a href=""><i className="fa fa-pen"/></a>
              <a href=""><i className="fas fa-trash"/></a>
          </td>
        </tr>
      </Table>
    </div>
  );
  
}



export default App;
