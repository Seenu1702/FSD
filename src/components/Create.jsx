/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import config from '../utils/config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const handleCreate = async () =>{
    try {
      let res = await axios.post(`${config.API_URL}/user`, {
        firstName,
        lastName,
        email
      })
      if(res.status === 200){
        
        toast.success(res.data.message)   
        navigate('/')
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  useEffect(()=>{
    handleCreate();
  },[])


  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicFname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the first name" onChange={(e) => setFirstName(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the last name" onChange={(e) => setLastName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicemail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter the email address" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

    
      <Button variant="primary" onClick={() => handleCreate()}>
        Submit
      </Button>
    </Form>
    
    </>
  )
}

export default Create