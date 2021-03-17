import logo from "./logo.svg";
import "./App.css";
import isWebview from "is-ua-webview";
// import GoogleLogin from "react-google-login";

function App() {
  const webview = isWebview(navigator.userAgent);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <br />
        {webview ? "é webview" : "não é webview"}
        <br />
      </header>
    </div>
  );
}

export default App;
