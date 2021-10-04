import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer'
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import Plans from './components/plans/Plans';
import Shop from './components/shop/Shop';
import About from './components/about/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/plans">
          <Plans></Plans>
        </Route>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        {/* <Route path="*">
        <h1>kichu nai</h1>
        </Route> */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
