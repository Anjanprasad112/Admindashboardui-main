import React, { useEffect, useState } from 'react'
// import {getOrderStatus} from '../lib/helpers'
import { Link } from 'react-router-dom'

const Maps = () => {

    const recentOrderData = [
        {
            id: '1',
            product_id: '4324',
            status:'WAITING',
            source:"vvpuram",
            destination:"jayanagar",
            breakdown_issue:"tyre puncture",
            customer_name: 'Shirley A. Lape',
            
        },
        {
            id: '1',
            product_id: '4324',
            status:'WAITING',
            source:"vvpuram",
            destination:"jayanagar",
            breakdown_issue:"tyre puncture",
            customer_name: 'Shirley A. Lape',
            
        },
        {
            id: '1',
            product_id: '4324',
            status:'WAITING',
            source:"vvpuram",
            destination:"jayanagar",
            breakdown_issue:"tyre puncture",
            customer_name: 'Shirley A. Lape',
            
        },
        {
            id: '1',
            product_id: '4324',
            status:'WAITING',
            source:"vvpuram",
            destination:"jayanagar",
            breakdown_issue:"tyre puncture",
            customer_name: 'Shirley A. Lape',
            
        },
        {
            id: '1',
            product_id: '4324',
            status:'WAITING',
            source:"vvpuram",
            destination:"jayanagar",
            breakdown_issue:"tyre puncture",
            customer_name: 'Shirley A. Lape',
            
        },
        {
            id: '1',
            product_id: '4324',
            status:'WAITING',
            source:"vvpuram",
            destination:"jayanagar",
            breakdown_issue:"tyre puncture",
            customer_name: 'Shirley A. Lape',
            
        },
        {
            id: '1',
            product_id: '4324',
            status:'WAITING',
            source:"vvpuram",
            destination:"jayanagar",
            breakdown_issue:"tyre puncture",
            customer_name: 'Shirley A. Lape',
            
        },
        {
            id: '1',
            product_id: '4324',
            status:'WAITING',
            source:"vvpuram",
            destination:"jayanagar",
            breakdown_issue:"tyre puncture",
            customer_name: 'Shirley A. Lape',
            
        },

    ]
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
    <>
    <div className="h-full w-1/2 inline-block bg-white">
    {tickets.map((e) => (
        <div className="flex flex-col m-4 p-2 border-2 border-black text-center " key={e.id}>
        <div className="flex flex-row items-center justify-around" >
                <div>ID : {e.id}</div>
                <div className=''>Product ID : {e.id}</div>
                {/* <div className=''>Status : {getOrderStatus(e.status)}</div> */}
                <div className=''>Status : {e.id}</div>

                <Link to={`/maps/${e.id}`} className="border-2 p-1 rounded-lg" >maps</Link>
                
        </div>
        <div className='border-t-2 border-black p-2'>
           Name : {e.name}
        </div>
        <div>
        Breakdown Issue : {e.breakdown_issue}
        </div>
        <div className='flex flex-col'>
            <p>
            Source : {e.source}
            </p>
            <p>
            Destination : {e.destination}
            </p>
        </div>

        <div className=''>
        
        </div>

        </div>
        ))}

    </div>
   
    {/* <div className="h-full w-1/2 inline-block">
        map
    </div>
    
     */}
    </>
  )
}

export default Maps