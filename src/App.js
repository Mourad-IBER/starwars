import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function App() {
  const [data, setData] = useState({ results: [] });
  const [query, setQuery] = useState("");

  useEffect(() => {
    function getFetchUrl() {
      return "https://swapi.co/api/people/?search=" + query;
    }

    async function fetchData() {
      const result = await axios(getFetchUrl());
      setData(result.data);
    }

    fetchData();
  }, [query]);

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {data.results.map(item => (
          <li key={item.id}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
/*
const rootElement = document.getElementById("root");
ReactDOM.render(<SearchResults />, rootElement);
*/
/*
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
//import { Link } from "react-router-dom";

function Person({ name }) {
  return (
    <Router>
      <Link className="link" target="_blank">
        {name}
      </Link>
    </Router>
  );
}

function App() {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://swapi.co/api/people/");
      res.json().then(res => setPersons(res.results));
    }

    fetchData();
  }, []);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  /*
    function handleSubmit(e){
      e.preventDefault() // stops default reloading behaviour
        console.log(name);
    }
    onSubmit={handleSubmit}










  return (
    <div>
      <form>
        <input placeholder="Name" value={name} onChange={handleNameChange} />
        <button>Submit</button>
      </form>

      <ul className="App">
        {persons.map(person => (
          <Person {...person} key={person.name} />
        ))}
      </ul>
    </div>
  );
}
export default App;
*/
