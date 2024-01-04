import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';

function App() {
  const name = 'João Henrique'
  const url = "https://via.placeholder.com/150"

  function sum(a, b) {
    return a + b
  }

  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome={name} />
    </div>
  );
}

export default App;
