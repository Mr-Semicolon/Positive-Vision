import React,{Fragment, useEffect,useState} from 'react';
import ReactTypingEffect from 'react-typing-effect';

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
  

  
  const [name,setname] = useState('');
  const[personalitydetection,setpersonalitydetection] = useState('');
  

  useEffect(  ()=>{
    (
      async ()=>{
      const response=  await fetch("http://127.0.0.1:7000/dashboard/get-personality",{

            headers:{ "x-auth-token" : localStorage.getItem("token")},
            withCredentials : true,
            
              
          
          });
          const content =await response.json();
          
          setname(content.data.userinfo.name);
          setpersonalitydetection(content.data.pesonality.personality);



      }
    )();


  });






   

    
    return(

     <Fragment>
   


   <div >
   
   <div className="container-fluid dashboardback">
     
             <div className="dashimg">
       <img src={picc}></img>
      
       </div>
       <div className="welcome">
      
       <ReactTypingEffect className="h1"
        text={"Welcome, " + name}
        speed= "100"
        
      />

       </div>
        <div className="row">
          
          <div className="col-5">
          <div className="dashmenu">    
               <div>
               <Link to="/signin"><img  src={logout} alt=""/></Link>  
              
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
      <div className="leftblue person">
        <h1 className="pt-5 ">Your personality detection result</h1>
      

        </div>
        <div className="rightblue person">
        <h2 className="">
          { personalitydetection[1] =="1"? <div className="mb-3">1-Sociable person</div>: <div className="mb-3">1-Introvert person</div>
          }
          {
            personalitydetection[3] =="1"? <div className="mb-3">2-Neurotic person</div>: <div className="mb-3">2-tranquil person</div>
          }
          {
            personalitydetection[5] =="1"? <div className="mb-3">3-Friendly person</div>: <div className="mb-3">3-hostile person</div>
          }
          {
            personalitydetection[7] =="1"? <div className="mb-3">4-diligent person</div>: <div className="mb-3">4-Casual person</div>
          }
          {
            personalitydetection[9] =="1"? <div >5-closed</div>: <div>5-Open to experience</div>
            
          }
          {console.log(personalitydetection)}
          </h2>

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