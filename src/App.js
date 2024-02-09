import logo from './logo.svg';
import './App.css';
import Greet from './componet/Greet';
import Welcome from './componet/Welcome';
import Message from './componet/Message';
import {Counter} from './componet/Counter'



function App() {
  return (
    <div className="App">
      <Counter/>

      {/* <Welcome name="Adesh"/>
      <Welcome name="Neha"/>
      <Welcome name="Payal"/> */}
      {/* <Greet name='Adesh'/>
      <Greet name='Neha'/>
      <Greet name='Payal'/> */}
     
    </div>
  );
}

export default App;
