import React,{Fragment} from 'react';

import contact from '../ui/contact.png'
import synergy from '../ui/synergy.png'
import travel from '../ui/travel.png'
import gardens from '../ui/gardens.png'
import urban from '../ui/urban.png'
import { Link } from 'react-router-dom'
import picc from '../ui/dash.png'
import logout from '../ui/logout.png'
import settings from '../ui/settings.png'
import live from '../ui/live.png'
import live2 from '../ui/live2.png'
import last from '../ui/last.png'
import logoo from '../ui/logo.png'



// eslint-disable-next-line react/prop-types
export default function Dashboard(){

  
  //const [name,setname] = useState('');




   

    
    return(
     <Fragment>
   


   <div >
   
   <div className="container-fluid dashboardback">
     
             <div className="dashimg">
       <img src={picc}></img>
       <h1>Welcome,{}</h1>
       
       

       </div>
        <div className="row">
          
          <div className="col-5">
          <div className="dashmenu">    
               <div>
                 <img  src={logout} alt=""/>
              
               </div>
               <div>
              <Link to="/dashboard"><img src={live2} alt=""/></Link> 
               </div>
               
               <div>
               <Link to="/live"><img src={live} alt=""/></Link> 
               </div>
               <div>
               <img src={live2} alt=""/>
               </div>
               <div>
               <img src={last} alt=""/>
               </div>
               <div>
               <img src={settings} alt=""/>
               </div>
               </div>
          </div>
          <div className="col-5 dashcol">
              <div className="dashlogo"> <img src={logoo}></img></div>
  
          </div>
          <div className="col-2">
              <div className="dashCard">
                  <span> <a href="">Dashboard   </a>&ensp;  | &ensp;  <a href="">Courses</a>  </span>
                

              </div>
           
          </div>
        </div>
       
      </div>
   <div className="profileDashboard">


   <div className="container">
   <div className='some-page-wrapper'>
  <div className='rw'>
    <div className='col-lg-6 pt-5 mb-5'>
      <div className='blue-column mb-5'>
      <div className="leftblue">

        </div>
        <div className="rightblue">

        </div>
      
      </div>
      <div className='blue-column blue-column-2'>
      <div className="leftblue">

</div>
<div className="rightblue">

</div>

 
      </div>
    </div>
    <div className='col-lg-3 pt-5 mb-5'>
      <div className='green-column'>
        <div className="contact pt-5 mb-5 " ><img src={contact} alt=""/></div>
        <div className="text-center mb-5"><button  type="button">Message</button></div>
        <div className="text-center"><button  type="button">Make an appointment</button></div>


      </div>
      
    </div>
    <div className='col-lg-3 pt-1 cont'>
      <div className="text center font-weight-bold mb-5">Top Motivitional Blogposts</div>
      <div className='orange-column mb-5'>
        <img src={synergy} alt=""/>
      </div>
      <div className='orange-column mb-5'>
      <img src={travel} alt=""/>
      </div>
      <div className='orange-column mb-5'>
      <img src={gardens} alt=""/>
      </div>
 
      <div className='orange-column'>
      <img src={urban} alt=""/>
      </div>
 
 
    </div>
  </div>
</div>
     

   </div>
   </div>

   
                  

  </div>

  </Fragment>
       
    )
}