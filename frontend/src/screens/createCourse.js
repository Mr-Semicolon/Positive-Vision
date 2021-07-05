import React,{useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function createCourse() {

     const [name,setname] = useState('');
    const [description,setdescription] = useState('');
    const [hours,sethours] = useState('');
       const [success,setsuccess] = useState(null);
    const [failed,setfailed] = useState('');


        const submit = async (e)=>{
        e.preventDefault();
        
        const response = await fetch("/courses/add-course",{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                name,
                description,
                hours
             
            })
        });
        const content =await response.json();
        try {
            setsuccess(content.message);
            setfailed(content.error.message)
            
          } catch (err) {
            console.error(err.message);      
          }
          
        
       
           
           
        

    }
  return (
    <div>
        <div className="container">
            <h1>Create Course</h1>
            <br></br>
            <br></br>

        <Form onSubmit={submit}>
  <Form.Group >
    <Form.Label>Name</Form.Label>
    <Form.Control onChange={e => setname(e.target.value) } className="formcourse" type="text" placeholder="Enter course name" />
    
  </Form.Group>
  
   <Form.Group >
    <Form.Label>Hours</Form.Label>
    <Form.Control onChange={e => sethours(e.target.value) } className="formcourse" type="text" placeholder="Hours" />
    
  </Form.Group>

  <Form.Group >
    <Form.Label>Description</Form.Label>
    <Form.Control onChange={e => setdescription(e.target.value) } className="formcoursed formcourse" type="text" placeholder="Write your description here!" />
  </Form.Group>
  
  <Button className="formcourse" variant="primary" type="submit">
    Submit
  </Button>
     {
                        success&&
                        success? <div>{success}</div> : <div>{failed}</div>
                        }
</Form>
        </div> 
    </div>
  );
}
