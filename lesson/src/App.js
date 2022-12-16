import logo from './logo.svg';
import './App.css';

function Article (){
  return <h1>Hello Bro</h1>
}

function Main(){
  var name = "Prince"
  return <h1>My name is {name}</h1>
}



function App() {

  return ( 
   
      <div class = "App"> 
      <Article />
      <Main /> 
      </div>
    
  ); 
 
}

export default App;
