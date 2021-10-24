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
import PrivateRoute from './Login/privateRoute/PrivateRoute';
import AddPlans from './components/addplans/AddPlans';
import Roll from './components/plans/Roll';
import ManagePlans from './components/manage/ManagePlans';
// import Register from './Login/Register';



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
            {/* <Route path="/register">
              <Register></Register>
            </Route> */}
            <PrivateRoute path="/programs/:programKey">
              <PlanDetails></PlanDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/plans">
              <Plans></Plans>
            </PrivateRoute>
            <PrivateRoute exact path="/plans/:planId">
              <Roll></Roll>
            </PrivateRoute>
            <PrivateRoute path="/shop">
              <Shop></Shop>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <Route path="/addPlan">
              <AddPlans></AddPlans>
            </Route>
            <Route path="/manageplans">
              <ManagePlans></ManagePlans>
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
