import logo from './logo.svg';
import './App.css';
import ShareButtons from './components/SocialShare/share.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Social Sharing</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>If you like this!! Please Share :) </h2>
        <ShareButtons title={document.title} url={document.URL}/>
      </header>
    </div>
  );
}

export default App;
