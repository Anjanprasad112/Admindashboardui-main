
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Settings = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get(`http://127.0.0.1:8000/companies/`)
        .then((response) => setData(response.data))
        .catch((error) => {
            console.error(error);
        })
    }
    , []);

  return (
    <div className="overflow-x-scroll">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Company Name
            </th>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th> */}
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            {/* </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Address
            </th> */}
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mechanic Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              phone
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.company_id}>
              <td className="py-2 px-4 whitespace-nowrap">
                <Link to={`${item.company_id}`} className="text-sm text-gray-900" >{item.name}</Link>
              </td>

              {/* <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.email}</div>
              </td> */}
              <td className="py-2 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.phone}</div>   
              </td>
              <td className="py-2 px-4 whitespace-nowrap">
                <Link to={`${item.company_id}`} className="text-sm text-gray-900">{item.name}</Link>
              </td>
              <td className="py-2 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.phone}</div>   
              </td>
        

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Settings;