import {useState} from 'react';
import CardZone from './components/CardZone'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';



function App() {
  const apiUrl = "https://blackjack820.azurewebsites.net/api/blackjack/"

  const [state, setState] = useState(0)
  const [dCards, setDCards]  = useState([])
  const [pCards, setPCards]  = useState([])

  const [stateAlert, setStateAlert] = useState(false)
  const [load, setLoad] = useState(true)


  // Function to fetch backend API
  function fetchAPI(cmd){
    setStateAlert(false)
    Axios({
      method: 'get',
      url: apiUrl + cmd
    }).then(res=>{
      if (res.data === "wrongState"){
        console.log("Wrong State!")
        setStateAlert(true)
      }

      else{
        setState(res.data.s)
        setDCards(res.data.dCards)
        setPCards(res.data.pCards)
      }
    })
  }

  // Button methods
  const start = () => fetchAPI("start")
  const hit = () => fetchAPI("hit")
  const stand = () => fetchAPI("stand")
  const rematch = () => fetchAPI("rematch")


  // First time load game
  if (load){
    fetchAPI("reset")
    setLoad(false)
  }


  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="topBar">
        <Navbar.Brand><b>FSM-Blackjack</b></Navbar.Brand>
      </Navbar>
      
      <div className="gameZone">
        {
          <CardZone state={state} dCards={dCards} pCards={pCards} />
        }
        
        <div className="controlZone">
          <Badge variant="danger">State: {state}</Badge>

          <Button variant="info" onClick={start} className="btn">start</Button>
          <Button variant="success" onClick={hit} className="btn">hit</Button>
          <Button variant="warning" onClick={stand} className="btn">stand</Button>
          <Button variant="primary" onClick={rematch} className="btn">rematch</Button>

          {
            stateAlert && <Alert variant="danger">
              Illegal action due to wrong state.
            </Alert>
          }
        </div>
      </div>
      
      <Navbar bg="dark" variant="dark" className="btmBar">Copyright &copy; Luna Yang 2021</Navbar>
    </div>
  );
}

export default App;
