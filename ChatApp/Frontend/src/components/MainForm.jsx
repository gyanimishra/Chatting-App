import React from 'react'
import { useState } from 'react'
import {useNavigate}  from 'react-router-dom'

function MainForm() {
const [data, setData]= useState({name:"",room:""})
const [error, seterror]= useState("")

const navigate= useNavigate()
  const handlechange= (e)=>{
    setData({
        ...data,
        [e.target.name]:e.target.value
    })
  }
  const validation =()=>{
    if(!data.name)
    {
        seterror("Please Fill Name.")
        return false
    }
    
    if(!data.room)
    {
        seterror("Please choose Room")
        return false
    }
    else{
        seterror("")
        return true
    }
  }

  const handlesubmit =(e)=>{
    e.preventDefault()
    const isvalid= validation()

    if(isvalid){
        navigate(`/chat/${data.room}`,{state:data} )
    }

  }


  return (
    <div className="px-3 py-4 shadow bg-white text-dark border rounded row">
            <form onSubmit={handlesubmit} >
                <div className="form-group mb-4">
                    <h2 className="text-warning mb-4">Welcome to Chatclub</h2>
                </div>
                <div className="form-group mb-4">
                    <input type="name" className="form-control bg-light" name="name" placeholder="Enter name"  onChange={handlechange} />
                </div>
                <div className="form-group mb-4">
                    <select className="form-select bg-light" name="room" aria-label="Default select example" onChange={handlechange} >
                        <option value="">Select Room</option>
                        <option value="DSA">DSA</option>
                        <option value="coding">Coding</option>
                        <option value="MAC">MAC</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-warning w-100 mb-2" >Submit</button>
                {error? <small className="text-danger m-auto">{error}</small> :""}
            </form>
        </div>
  )
}

export default MainForm
