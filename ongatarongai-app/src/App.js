import logo from './logo.svg';
import './App.css';
const Header = () =>(
  <header>
    <img src='repentlogo.png' alt='repentance and holiness'/>
    <br/>
    <span className='heading'><strong>ONGATA RONGAI MAIN ALTAR</strong></span>
  </header>
)

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
