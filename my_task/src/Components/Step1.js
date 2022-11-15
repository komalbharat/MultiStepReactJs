import React from 'react'
import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useState } from "react";


const Step1 = () => {
const [name, setName] = useState("");
const [lname, setlname] = useState("");
const [email, setemail] = useState("");
const navigate = useNavigate();

function handleSubmit(e) {
    // e.preventDefault();  
    
    navigate("/Step2");
}
  
return (
    
    // <form>
    <div>
        <Card title="from 1" subTitle="">
      <div>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
      </label>
      </div>
      <div>
      <label>Enter your Last Name:
        <input
          type="text" 
          value={lname}
          onChange={(e) => setlname(e.target.value)}
        />
      </label>
      </div>
      <div>
      <label>Enter your Email:
        <input
          type="text" 
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </label>
      </div>
      <div><Button onClick={handleSubmit}>Next</Button></div>
      <div><Button>Previous</Button></div>
        </Card>
        </div>
    // </form>
    
  )
}
export default Step1;