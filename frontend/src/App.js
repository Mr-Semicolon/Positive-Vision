import React ,{Fragment}from 'react'
//import { useSelector } from 'react-redux';
import HomeScreen from  './screens/HomeScreen';
import Signup from  './screens/Signup';
import logo from './ui/logo.png';

import {BrowserRouter, Route,Switch} from 'react-router-dom'

import activation from './screens/activation';
import Dashboard from './screens/Dashboard';
import live from './screens/live';
import Signin from './screens/Signin';




function App() {
   


  return (

    <Fragment>
    <BrowserRouter>

   
   
 <Switch>
 
      <Route path="/dashboard" component={Dashboard}   ></Route>
      <Route path="/live" component={live}  ></Route>
      
   


    
    

    <div  className="grid-containerr">
      
      
      
        
        <main>
      

         
     
          <div className="homescreen">
            <div className="backhome">

           
          <div className= "signupLogo">
             <img src={logo} alt=""/>
             
         </div>
         <Switch>
         <Route path="/" component={HomeScreen} exact ></Route>
          <Route path="/JoinNow"  component={Signup}  ></Route>
          <Route path="/signin" component={Signin}  ></Route>
          <Route path="/activation" component={activation}  ></Route>
        
          </Switch>
        
          
          </div>
         </div>
        
 
        
        </main>
       
    </div>
    
   

    </Switch>
   
    </BrowserRouter>
  
    </Fragment>
 

  );
}

export default App;
