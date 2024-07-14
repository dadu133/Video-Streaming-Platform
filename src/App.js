import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Main from './Main.jsx';
import About from './About.jsx';
import Pricing from './Pricing.jsx';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <About></About>
      <Main></Main>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
