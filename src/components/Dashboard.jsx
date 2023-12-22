/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import config from '../utils/config';
import Table from 'react-bootstrap/Table';
import Button  from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import {useNavigate}  from 'react-router-dom';

function Dashboard() {
    let Navigate = useNavigate();

    const [users, setUsers] = useState([])  

    const handleDelete = async (id) =>{
        try {
            let res = await axios.delete(`${config.API_URL}/user/${id}`)
            if (res.status === 200){
                getAllUsers();
                toast.success(res.data.message)   
            }
            
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    const getAllUsers = async() =>{
        try {
            let res = await axios.get(`${config.API_URL}/user`)
            if (res.status === 200){
                toast.success(res.data.message)
                setUsers(res.data.users);
                
            }
            else{
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error(error.res.data.message);
        }
    } 


    useEffect(() => {
        getAllUsers();
    },[])
  return (
    <>
        <Table striped bordered hover>
        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            users.map((e,i) => {
                return <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.email}</td>
                    <td>
                        <Button variant='primary' onClick={() =>Navigate(`/${e._id}`)}>Edit</Button>
                        &nbsp;
                        <Button variant='danger' onClick={() =>handleDelete(e._id)}>Delete</Button>
                    </td>
                </tr>
            })
        }
      </tbody>
            
    </Table>
      
    </>
  )
}

export default Dashboard;