import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { format } from 'date-fns'
import axios from 'axios';
// import {getOrderStatus} from '../lib/helpers'

const Accounts = () => {

    // const accupdate = () => {
    // }
    // const accdel = (id) => {
    //     axios
    //     .delete('http://127.0.0.1:8000/accounts/${id}/')
    //     .then((response) => {
    //         console.log(response.data)
    //     }
    //     )
    //     .catch((error) => {
    //         console.error(error);
    //     }
    //     );
    // }

  const [acc, setAcc] = useState([]);

  useEffect(() => {
    axios
    .get('http://127.0.0.1:8000/accounts')
    //   .then((response) => response.json())
      .then((response) => {
        setAcc(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
    //   console.log(acc)
  }, []);
  return (
    <div className="bg-white rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-semibold flex items-center justify-center text-2xl p-1">TOTAL ACCOUNTS</strong>
			<div className="border-2 border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700 text-xl text-center">
					<thead>
						<tr>
							<th>Account ID</th>
							<th>Name</th>
							<th>Type</th>
							<th>Address</th>
							<th>Email</th>
							<th>Phno</th>
						</tr>
					</thead>
					<tbody>
						{acc.map((order) => (
                            <tr key={order.account_id} className="border-2 border-gray-300">
                                <td className='p-2'>
                                    <Link to={`${order.account_id}`}>{order.account_id}</Link>
                                </td>
                               
                                <td>
                                    <Link to={`${order.account_id}`}>{order.name}</Link>
                                </td>
                                <td>{order.account_type}</td>
                                
                                <td>{order.address}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                {/* <button className='border-2 border-black p-1 mx-2' >edit</button> */}
                                {/* <button className='border-2 border-black p-1 mx-2'>del</button> */}

                            </tr>
                            ))}
					</tbody> 
				</table>
			</div>
		</div>
  )
}

export default Accounts

