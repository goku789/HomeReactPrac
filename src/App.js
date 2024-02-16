import logo from './logo.svg';
import './App.css';
import Greet from './componet/Greet';
import Welcome from './componet/Welcome';
import Message from './componet/Message';
import { Counter } from './componet/Counter'
import FunctionalClick from './componet/FunctionalClick'
import ClassClick from './componet/ClassClick'
import EventBind from './componet/EventBind'
import ParentComponet from './componet/ParentComponet';
import UserGreeting from './componet/UserGreeting';
import Namelist from './componet/Namelist';
import Form from './componet/Form';



function App() {
  return (
    <div className="App">

     <Form/>
      {/* <ClassClick/>
      <FunctionalClick/> */}
      
      {/* <FunctionalClick/> <Counter /> */}
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
