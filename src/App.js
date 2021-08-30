import React , { useEffect } from "react";
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Payment from './Payment.js';
import Login from './Login.js';
import { auth } from './firebase.js';
import Checkout from './Checkout.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";
import {loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise =loadStripe("pk_test_51I1qFKHKHecorjuWKkqESkvrOAZh4uGC7Bk3OCQEgg10BJ6MSLUYn7wIs2Y13t3xefiRoBUy0Exq5N62L0MnS5Oj00LTnSqNMD");

function App() {
  const [{}, dispatch]= useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      
      if(authUser){
        //logged in user
          dispatch({
            type:'SET_USER',
            user: authUser  
          })
      }
      else{
        //logout user
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    
  }, [])

  return (

    <Router>
      <div className="App">
          <Switch>
            <Route path="/orders">
                <Header />
                <Orders />
              </Route> 
              <Route path="/login">
                <Login />
              </Route> 
              <Route path="/checkout">
                <Header />
                <Checkout />
              </Route> 
              <Route path="/payment">
                <Header />
                <Elements stripe={promise}>
                <Payment />
                </Elements>
              </Route>
              <Route path="/">
                {/*HEADER*/}
                  <Header />
                {/*REST BODY */}
                  <Home />
              </Route>    
          </Switch>
      </div>
    </Router>
  );
}

export default App;
