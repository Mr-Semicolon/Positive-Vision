import React from "react";
import Card from 'react-bootstrap/Card'
import reactjs from '../ui/reactjs.jpg'



export default function course() {
  return <div>
  
      <div className="container">
          <div className="text-center mt-5 mb-5">
              <input type="text" id="myInput"  placeholder="Search for courses.."></input>


          </div>
          <div className="row">
              <div className="col-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="courseimg2" variant="top" src={reactjs} />
                    <Card.Body>
                        <Card.Title>ReactJs course</Card.Title>
                        <Card.Text>
                        ReactJS is JavaScript library used for building reusable UI components
                        
                        </Card.Text>
                    
                    </Card.Body>
                    </Card>
              </div>
       
         
         
         
              
              
              
          </div>
      </div>


  </div>;
}
