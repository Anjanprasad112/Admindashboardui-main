import React, { useEffect, useState } from 'react'

const Order = () => {
    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/tickets')
          .then((response) => response.json())
          .then((data) => {
            setTickets(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
  return (
    <div className="border-2 border-black h-screen w-full">
      {tickets.map((order) => (
        <div key={order.id} className='flex flex-col justify-center items-center'>
          <h1>{order.id}</h1>
          <h1>{order.name}</h1>
          <p>{order.breakdownIssue}</p>
          <p>{order.location}</p>
          <p>{order.created_at}</p>
          <p>{order.comments}</p>
        </div>
      ))}
    </div>
  )
}

export default Order