import './App.css';

function App(props) {
  return (
    <div className="App">
     <h1>my name is {props.name}. I am {props.age-10}</h1>
    </div>
  );
}

export default App;
