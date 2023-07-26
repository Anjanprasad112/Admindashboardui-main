import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



const AccountDetails = () => {
  let navigation = useNavigate();
  const { account_id } = useParams();
  const [acc, setAcc] = useState([]);
  // const [account_id, setAccount_id] = useState('');
  // const [account, setAccount] = useState('');
  const [name, setName] = useState('');
  const [account_type, setAccount_type] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
//   const [acc, setAcc] = useState([]);
//   console.log(acc)
const accountData ={
  account_id,
    name,
    account_type,
    address,
    email,
    phone
}

useEffect(() => {
    axios
    .get(`http://127.0.0.1:8000/accounts/${account_id}/`)
    .then((response) => setAcc(response.data))
    .catch((error) => {
        console.error(error);
    })
}
, [account_id]);
// console.log(acc)

  const edit = async() => {
    if(name === ''||
    account_type === ''||
    address === ''||
    email === ''||
    phone === ''){
      alert('Please fill all the fields')
    }
        else{
    await axios
    .put(`http://127.0.0.1:8000/accounts/${account_id}/`, accountData)
    .then((response) => {
        console.log(response.data)
        // navigation('/accounts')

    }
    )
    .catch((error) => {
        console.error(error);
    }
    );
  }
  }
  const deleteval = async() => {
    await axios
    .delete(`http://127.0.0.1:8000/accounts/${account_id}`)
    .then((response) => {
        console.log(response.data)
        navigation('/accounts')
    } 
    )
    .catch((error) => {
        console.error(error);
    }
    );

  }
  // console.log(acc)


  return (
<div>

    <div className='text-center text-2xl font-bold p-2'>Account Details</div>
    <div>
        <div className='flex flex-col justify-center items-center'>
            <div className='w-full text-center text-xl font-medium p-1'>Account ID : {acc.account_id}</div>
            <div className='w-full text-center text-xl font-medium p-1'>Name : {acc.name}</div>
            <div className='w-full text-center text-xl font-medium p-1'>Account Type : {acc.account_type}</div>
            <div className='w-full text-center text-xl font-medium p-1'>Address : {acc.address}</div>
            <div className='w-full text-center text-xl font-medium p-1'>Email : {acc.email}</div>
            <div className='w-full text-center text-xl font-medium p-1'>Phone : {acc.phone}</div>
            </div>
    </div>
    <div className=' text-xl font-medium flex flex-col justify-center items-center mt-8'>
    <div className='text-center text-2xl font-bold p-2'>Edit Account</div>
      {/* <label htmlFor="id" className='m-2'>Account Id : 
        <input type="text" className='w-64 border-2 border-black' value={account} onChange={(e)=>setAccount(e.target.value)}/>
        </label> */}
        <label htmlFor="name"className='m-2'>Account Name : 
        <input type="text" className='w-64 border-2 border-black' value={name} onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label htmlFor="account_type"className='m-2'>Account Type :
        <input type="text" className='w-64 border-2 border-black' value={account_type} onChange={(e)=>setAccount_type(e.target.value)}/>
        </label>
        <label htmlFor="address"className='m-2'>Account address :
        <input type="text" className='w-64 border-2 border-black' value={address} onChange={(e)=>setAddress(e.target.value)}/>
        </label>
        <label htmlFor="email"className='m-2'>Account email :
        <input type="email" className='w-64 border-2 border-black' value={email} onChange={(e)=>setEmail(e.target.value)}/>

        </label>
        <label htmlFor="phone"className='m-2'>Account phone :
        <input type="tel" className='w-64 border-2 border-black' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </label>
</div>
<div className="flex justify-center items-center m-2">
  <button className="border-2 border-black p-1 mx-4"onClick={edit}>Edit</button>
  <button className='border-2 border-black p-1 mx-4' onClick={deleteval}>Delete</button>
</div>
</div>
  )

}

export default AccountDetails