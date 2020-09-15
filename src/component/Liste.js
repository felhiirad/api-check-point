import React ,{useEffect, useState}from 'react';
import axios from 'axios';
import { Card,Button } from 'react-bootstrap';
import './Liste.css';





const Liste = () => {
   const [userData,setUserData]=useState([]);
   useEffect(()=>{
       const fetchData=async()=>{
           const person=await axios
           .get('https://jsonplaceholder.typicode.com/users');
           setUserData(person.data);

       }
       fetchData();
   },[])
   
  
    return ( 
        <div className="app">
            <ul>
                {userData.map((el)=>{
                    return(<div className="card">
                        <Card className="text-center">
                            <div >
                        <Card.Header ><h3> Name: {el.name}</h3></Card.Header>
                        <Card.Body>
                          <Card.Title><h5>User Name : {el.username}</h5></Card.Title>
                          <Card.Text><h6>
                          <span> E-mail: {el.email}</span> 
                           <br/>
                           <span> Num Tel: {el.phone}
                           </span>
                           </h6>
                           
                          </Card.Text>
                          <Button className="button"  >
                              <span>More information</span></Button>
                        </Card.Body>
                      </div>
                        
                      </Card>
                      
                      <br/>
                      <br/>
                      </div>
                    )
                   

                })}
            </ul>

        </div>
     );
}
 
export default Liste;