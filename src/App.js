import "./App.css";

const Header = () => (
  <header>
    <img src="repentlogo.png" alt="repentance and holiness" />
    <br />
    <span className="heading">
      <strong>ONGATA RONGAI MAIN ALTAR</strong>
    </span>
  </header>
);

const DisplayAcc = () => {
  alert("Account clicked!");
};

const Content = () => {
  const accounts = ["ACCOUNT 1", "ACCOUNT 2", "ACCOUNT 3", "ACCOUNT 4"];
  const contacts = ["CONTACT 1", "CONTACT 2", "CONTACT 3", "CONTACT 4"];

  return (
    <section className="content">
      <table id="accncont">
        <thead>
          <tr id="heads">
            <th className="heads" onClick={DisplayAcc}>
              ACCOUNTS
            </th>
            <th>CONTACTS</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((acc, index) => (
            <tr key={index}>
              <td>
                <span onClick={DisplayAcc}>{acc}</span>
              </td>
              <td>
                <span>{contacts[index]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
