import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <h1>People Persons</h1>
      <div className="all-people">
        <PersonCard firstName={"Nick"} lastName={"Barker"} age={33} hairColor={"blonde"} />
        <PersonCard firstName={"King"} lastName={"Leonidas"} age={10} hairColor={"spotted"} />
        <PersonCard firstName={"Richard"} lastName={"Rinkle"} age={69} hairColor={"brown"} />
        <PersonCard firstName={"Robyn"} lastName={"Banks"} age={42} hairColor={"red"} />
      </div>
    </div>
  );
}

export default App;