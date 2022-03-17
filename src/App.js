import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

export default App;

const ShowCountry = props => {
  const { name, population, flags } = props.country;
  return (
    <div>
      <h3>Name: { name.common }</h3>
      <p>Population: { population }</p>
      <img src={ flags.png } alt="" />
    </div>
  )
}

const LoadCountries = () => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  // console.log(countries);
  return (
    <div>
      {
        countries.map(country => <ShowCountry country={country} key={ country.cca3 }></ShowCountry>)  //Used a unique id for key here to avoid the warinng in console "add unique key for each child"
      }
    </div>
  )
}