import logo from "./logo.svg";
import "./App.css";
// import isWebview from "is-ua-webview";
// import GoogleLogin from "react-google-login";

function App() {
  // const webview = isWebview(navigator.userAgent);

  const webview = /(Version\/\d+.*\/\d+.0.0.0 Mobile|; ?wv|(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari))/i.test(
    navigator.userAgent
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>nova versão</div>
        <br />
        {!webview && <button>LOGIN</button>}
        <br />
      </header>
    </div>
  );
}

export default App;
