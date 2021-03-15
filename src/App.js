import logo from "./logo.svg";
import "./App.css";
import * as isWebview from "is-ua-webview";

function App() {
  var webview = isWebview(navigator.userAgent);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {webview ? "é webview" : "não é webview"}
      </header>
    </div>
  );
}

export default App;
