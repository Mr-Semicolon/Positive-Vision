import React  from 'react';
import {Link  } from 'react-router-dom'



  

export default function HomeScreen(){


    // const [courses,setCourses ] = useState(null);
    // useEffect(()=>{
    //     const fetchData = async () =>{

    //         const data = await fetch('/courses/display-course');
    //         const jsonData = await data.json();
    //         setCourses(jsonData);

      
    //     };
    //     fetchData();
    // },[]);



    
    return(
     
   


   <div >
       
         
                  
          
               
              <div className="jumbotron ">
                  <div className="container">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <Link to="/JoinNow"><button type="button" className="btn btn-primary btn-lg btn-block "><h1>For testing your personality, please Join now!</h1></button></Link>
                    <hr className="my-4"></hr>
                    <p>You already tested your personality?<Link to="/signin" >  <a className="alreadylogged" >Login here!</a></Link> </p>
                 
                  
            </div>
            </div>

           

          
     
   
         

       </div>


       
    )
}