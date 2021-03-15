import logo from "./logo.svg";
import "./App.css";
import * as isWebview from "is-ua-webview";
// import GoogleLogin from "react-google-login";

function App() {
  const webview = isWebview(navigator.userAgent);

  // const onSuccess = (response) => {
  //   alert("SUCCESS");
  //   alert(JSON.stringify(response));
  // };

  // const onFailure = (response) => {
  //   alert("FAILURE");
  //   alert(JSON.stringify(response));
  // };

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

        <br />
        {webview ? "é webview" : "não é webview"}
        <br />
        <br />

        <div>nova build</div>
        <div className="g-signin2" data-onsuccess="onSignIn"></div>

        {/* <GoogleLogin
          clientId="361624584650-9nbrs6phdrfspfub8ho23gnlvkdrta9b.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
        /> */}
      </header>
    </div>
  );
}

export default App;
