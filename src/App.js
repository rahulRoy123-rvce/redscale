import logo from './logo.svg';
import './App.css';
import redscale_logo from "./assets/1.jpg";;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={redscale_logo} className="" alt="logo" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Stay Tuned!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
