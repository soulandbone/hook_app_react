import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {


const [formState, setFormState] = useState({
    username: 'strider',
    email: 'fernando@google.com'
});

const {username, email} = formState;

const onInputChange = ({target}) => {
    const {name, value} = target;
setFormState({
    ...formState, 
    [name] : value
});

       
}


useEffect(() => {
  //console.log('useEffect called');

}, []);  //useEffect will fire only once

useEffect(() => {
    //console.log('formState changed');
  
  }, [formState]);  //effects should be separated, instead of being it in one useEffect 
  
  
  useEffect(() => {
    //console.log('email changed');
  
  }, [email]);//useEffect will fire only once


  return (

    <>
    <h1>SimpleForm</h1>
    <hr />

    <input
    type="text"
    className="form-control"
    placeholder='Username'
    name="username"
    value = {username}
    onChange={onInputChange}
    />
    
    {
    (username  === 'strider2') &&  <Message/> 
   }

    <input
    type="email"
    className="form-control mt-2"
    placeholder='fernando@google.com'
    name="email"
    value = {email}
    onChange={onInputChange}
    />
    

    



    </>

    
  )
}
