import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "./App.css"
import Home from '../Pages/Home'
import Registration from "../Pages/Registration"
import Login from '../Pages/Login'

const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/getTestMessage")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
   
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/sign-up' component={Registration} />
            <Route exact path='/home' component={Home} />
           
          </Switch>
        </BrowserRouter>
       
    </div>
  );

}

export default App;

/*
function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
*/