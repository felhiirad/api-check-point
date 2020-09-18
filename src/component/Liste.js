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
           setUserData(person.data.map(el=>{return {...el,show:false}}));
          
         
       }
       fetchData();
    
       
   },[])
   const handleshow=(id)=>{
    setUserData(userData.map(el=>el.id===id?{...el,show:!el.show}:{...el,show:el.show}))
    
      
      console.log(userData)
    //   for (let i=0;i<userData.length;i++){
    //       if(userData[i].id===id){
    //         userData[i].show=true         }else {
    //         userData[i].show=false     }
    //   }
    // userData.map(el=>el.id===id?el.show=!sh)
  
    console.log(userData)


   }
  
    return ( 
        <div className="app">
            <ul>
                {userData.map((el)=>{
                    return(<div className="card" key={el.id}>
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
                           {console.log(el.show)}
                           <p style={{display:(el.show?"block":"none")}}>
                               adresse: {el.address.street}
                           </p>
                           
                           
                          </Card.Text>
                          <Button className="button" onClick={()=>handleshow(el.id)} >
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