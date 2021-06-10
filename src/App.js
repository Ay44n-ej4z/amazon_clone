import Home from "./components/Home"
import './App.css';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from "./components/Login";
import { useEffect } from "react";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";
import Payment from "./components/Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51J0iB8SIAgYbxje9XDXmk32D0kPa1gyRqOh80in4bJNYNYjF2Q31Bfpfx6H2p7ikma93xplcHfRjUEHbG41HB3kD00F23GNOIK"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{

    auth.onAuthStateChanged(authUser => {
      console.log("The user", authUser);
    if(authUser) {
      dispatch({
        type: 'SET_USER',
        user: 'authUser'
      })
    }else {
      dispatch({
        type: 'SET_USER',
        user: null
      })

    }
    })
  },[])


  return (
    
    
        <Router>
          <div className="App">
                        
        <Switch>

         <Route path = "/login">
            <Login />
            
          </Route>
          <Route path = "/checkout">
        <Navbar /> 
        <Checkout />

        </Route>
        <Route path = "/payment">
        
        <Navbar /> 
        <Elements stripe = {promise}>
        <Payment / >
        </Elements>
        </Route>
        <Route path = "/">
        <Navbar /> 
      <Home />
           
      </Route>
      </Switch>
      </div>
        </Router> 
    
  );
}

export default App;
