import React from 'react'
import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';


const Step2= () => {
    
const [name, setName] = useState("");
const [lname, setlname] = useState("");
const [email, setemail] = useState("");
  
return (
    
    // <form>
    <div>
        <Card title="from2" subTitle="">
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
      <div><Button>Next</Button></div>
      <div><Button>Previous</Button></div>
        </Card>
        </div>
    // </form>
    
  )
}
export default Step2;