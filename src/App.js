import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import Plans from './components/plans/Plans';
import Shop from './components/shop/Shop';
import About from './components/about/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/not-found/NotFound';
import PlanDetails from './components/plans/PlanDetails';
import Login from './Login/Login';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import AuthProvider from './context/AuthProvider';



function App() {
  return (
    <div className="App">
    {/*******************  Router Set-up ***************/}
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/programs/:programKey">
              <PlanDetails></PlanDetails>
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
            <Route path="*">
            <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
