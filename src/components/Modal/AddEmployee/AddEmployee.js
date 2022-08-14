import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEmployeeFromDatabase } from "../../../Redux/ActionCreator"
import { Link, useNavigate } from "react-router-dom"
const {v4 : uuidv4} = require('uuid')
export default function AddEmployee() {
    const Id = uuidv4()
    const Employee_List = useSelector((state) => {
        return state.Employee_List
    })

    const [inpuDataAdd, setinpuDataEditAdd] = useState({})

    const inpuDataEditAdd = (e) => {
        e.preventDefault()
        setinpuDataEditAdd({
            ...inpuDataAdd, [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch()

    const AddEmployee = () => {
        dispatch(addEmployeeFromDatabase({...inpuDataAdd,Id,}, Employee_List))
    }
const navigate=useNavigate()
    return (
        <div className=' d-inline-flex justify-content-center align-item-center '>
            <form  className='bg-white p-4 mx-3 ' >
                <div className='d-flex justify-content-center flex-column align-item-center'>
                    <h5 className=''>Add Employee Details</h5>
                    <label>Name</label>
                    <input value={inpuDataAdd.Name} type="text" className='' onChange={(e) => inpuDataEditAdd(e)} name="Name" placeholder='Name' />
                    <label className='my-1 '>Email</label>
                    <input value={inpuDataAdd.Email} type="text" onChange={(e) => inpuDataEditAdd(e)} name="Email" placeholder="Email" />
                    <label>Address</label>
                    <textarea value={inpuDataAdd.Address} type="text" className="" onChange={(e) => inpuDataEditAdd(e)} name="Address" placeholder="Address" />
                    <label className="my-1">Phone</label>
                    <input value={inpuDataAdd.Phone} type="number" onChange={(e) => inpuDataEditAdd(e)} name="Phone" placeholder="Phone" />
                </div>
                <div className='d-flex  justify-content-center mx-3 p-2' >
                    <Link to="/">
                        <button className="btn  mx-3 bg-white rounded-0" >Cancle</button>
                    </Link>
                    <Link to="/">
                        <button type="submit" className=" mx-3 btn btn-primary mx-2 bg-success rounded-0" onClick={() => AddEmployee()} >Add</button>
                    </Link>
                </div>
            </form >
        </div>
    )
}
