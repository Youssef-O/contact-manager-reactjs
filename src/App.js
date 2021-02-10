import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Table>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>Male</td>
          <td>0652238256</td>
          <td>example@email.com</td>
          <td>
              <a href=""><i class="fa fa-pen"/></a>
              <a href=""><i class="fas fa-trash"/></a>
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
              <a href=""><i class="fa fa-pen"/></a>
              <a href=""><i class="fas fa-trash"/></a>
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
              <a href=""><i class="fa fa-pen"/></a>
              <a href=""><i class="fas fa-trash"/></a>
          </td>
        </tr>
      </Table>
    </div>
  );
}

export default App;
