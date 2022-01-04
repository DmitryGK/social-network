import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
      <div>
          <Header />
          <Technologies />
      </div>
  );
}

const Technologies = () => {
    return (
    <div >
        <ul>
            <li>html</li>
            <li>css</li>
            <li>js</li>
            <li>react</li>
        </ul>
    </div>
    )
}

const Header = () => {
    return (
        <div>
            <li>Home</li>
            <li>News</li>
            <li>Messages</li>
        </div>
    )
}

export default App;
