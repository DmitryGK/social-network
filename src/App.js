
import './App.css';

const App = () => {
  return (
      <div>
          <Header />
          <Technologies />
          <Footer />
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

const Footer = () => {
    return (
        <div>
            <li>Email</li>
            <li>Contacts</li>
            <li>Header</li>
        </div>
    )
}

export default App;
