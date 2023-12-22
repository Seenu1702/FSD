/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import config from '../utils/config';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  let params = useParams();
  let navigate = useNavigate();

  const getUserById = async (id) =>{
    try {
      let res = await axios.get(`${config.API_URL}/user/${id}`)
      if(res.status === 200)
      {
        setFirstName(res.data.user.firstName)
        setLastName(res.data.user.lastName)
        setEmail(res.data.user.email)
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  const saveUserById = async() =>{
    try {
      let res = await axios.put(`${config.API_URL}/user/${params.id}`, {
        firstName,
        lastName,
        email
      })
      if(res.status === 200){
        toast.success(res.data.message)   
        navigate('/')
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
    }
  }
  useEffect(()=>{
    if(params){
      getUserById(params.id)
    }
    else{
      navigate('/')
    }
    
  },[])   

  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicFname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicemail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter the email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

    
      <Button variant="primary" onClick={() => saveUserById()}>
        Submit
      </Button>
    </Form>
    
    </>
  )
}

export default Profile