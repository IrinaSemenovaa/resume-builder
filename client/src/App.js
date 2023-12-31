import "./App.css";
import ThemeProvider from "./ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src="./assets/logo.svg" className="App-logo" alt="logo" />
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
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
