
import './App.css';
const Header = () =>(
  <header>
    <img src='repentlogo.png' alt='repentance and holiness'/>
    <br/>
    <span className='heading'><strong>ONGATA RONGAI MAIN ALTAR</strong></span>
  </header>
)
const Content = () =>(
  <section className='content'>
      <table id='accncont'>
    <tr id='heads'><td>ACCOUNTS</td><td>CONTACTS</td></tr>
    <tr><td><span>ACCOUNT 1</span></td><td><span>CONTACT 1</span></td></tr>
    <tr><td><span>ACCOUNT 2</span></td><td><span>CONTACT 2</span></td></tr>
    <tr><td><span>ACCOUNT 3</span></td><td><span>CONTACT 3</span></td></tr>
    <tr><td><span>ACCOUNT 4</span></td><td><span>CONTACT 4</span></td></tr>

  </table>
  </section>
   
)
function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
