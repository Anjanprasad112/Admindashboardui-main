import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { getOrderStatus } from "../lib/helpers";
import axios from "axios";

const Cases = () => {
  const [tickets, setTickets] = useState([]);
  const [Partner, setPartner] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/customers/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTickets(data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(tickets);

    axios
      .get("http://127.0.0.1:8000/dispatch-entries/")
      .then((response) => {
        console.log(response.data);
        setPartner(response.data);
        // axios
        // .get("http://127.0.0.1:8000/customers/")
        // .then((response) => {
        //   response.data.map((order) => (
          
        //     ))
          
        // }
        // )
      }
      )
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="bg-white rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-semibold flex items-center justify-center text-2xl p-1">
        TOTAL CASES
      </strong>
      <div className="border-2 border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700 text-xl text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th> Name</th>
              <th>Partner ID</th>
              <th>Breakdown Issue</th>
              <th>Date</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>

            {Partner.map((order) => (
              <tr key={order.dispatch_entry_id} className="border-2 border-gray-300">
                <td className="p-2">
                  <Link to={`/order/${order.dispatch_entry_id}`}>
                    {order.dispatch_entry_id}
                  </Link>
                </td>
                <td>
                  <Link to={`/order/${order.dispatch_entry_id}`}>
                    {order.customer_id}
                  </Link>
                </td>
                <td>
                  <Link to={`/order/${order.dispatch_entry_id}`}>
                    {order.partner_service_id}
                  </Link>
                </td>
                <td>
                  <Link to={`/order/${order.dispatch_entry_id}`}>
                    {order.reason_id}
                  </Link>
                </td>
                <td>
                  <Link to={`/order/${order.dispatch_entry_id}`}>
                    {order.create_date}
                  </Link>
                </td>
                <td>
                  <Link to={`/order/${order.dispatch_entry_id}`}>
                    {order.pickup_location}
                  </Link>
                </td>
                <td>
                  <Link to={`/order/${order.dispatch_entry_id}`}>
                    {order.dispatch_status_id}
                  </Link>
                </td>
                </tr>
            ))}


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cases;

// {/* <td>{format(new Date(order.created_at), 'dd MMM yyyy')}</td> */}
// {/* <td>
//   {getOrderStatus(order.comments)}
//   </td> */}

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Cases = () => {
//   const [customers, setCustomers] = useState([]);
//   const [dispatchEntries, setDispatchEntries] = useState([]);
//   const [dispatchEntryAssets, setDispatchEntryAssets] = useState([]);

//   useEffect(() => {
//     // Fetch data from all three APIs
//     fetchCustomers();
//     fetchDispatchEntries();
//     fetchDispatchEntryAssets();
//   }, []);

//   const fetchCustomers = async () => {
//     try {
//       const response = await axios.get('/api/customers'); // Replace with your Django API endpoint URL for Customers
//       setCustomers(response.data);
//     } catch (error) {
//       console.error('Error fetching customers:', error);
//     }
//   };

//   const fetchDispatchEntries = async () => {
//     try {
//       const response = await axios.get('/api/dispatch-entries'); // Replace with your Django API endpoint URL for DispatchEntry
//       setDispatchEntries(response.data);
//     } catch (error) {
//       console.error('Error fetching dispatch entries:', error);
//     }
//   };

//   const fetchDispatchEntryAssets = async () => {
//     try {
//       const response = await axios.get('/api/dispatch-entry-assets'); // Replace with your Django API endpoint URL for DispatchEntryAssets
//       setDispatchEntryAssets(response.data);
//     } catch (error) {
//       console.error('Error fetching dispatch entry assets:', error);
//     }
//   };

//   const mapDataForTable = () => {
//     // Your logic to combine and map the data from the three APIs
//     const combinedData = dispatchEntries.map((entry) => {
//       // Find the corresponding customer data based on customer_id
//       const customer = customers.find((c) => c.customer_id === entry.customer_id);

//       // Find the corresponding dispatch entry asset data based on dispatch_entry_id
//       const entryAsset = dispatchEntryAssets.find((asset) => asset.dispatch_entry_id === entry.dispatch_entry_id);

//       // Combine the relevant data from different APIs into a single object
//       return {
//         dispatch_entry_id: entry.dispatch_entry_id,
//         customer: {
//           name: customer ? customer.name : 'N/A',
//           email: customer ? customer.email : 'N/A',
//           phone: customer ? customer.phone : 'N/A',
//         },
//         partner_service_id: entry.partner_service_id,
//         // Add more properties from the DispatchEntry and DispatchEntryAssets as needed
//         // ...
//       };
//     });

//     return combinedData;
//   };

//   const combinedData = mapDataForTable();

//   return (
//     <div>
//       <h1>Cases Page</h1>
//       <table className="table-auto">
//         <thead>
//           <tr>
//             <th>Customer Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Partner Service ID</th>
//             {/* Add more table headers based on the data you want to display */}
//           </tr>
//         </thead>
//         <tbody>
//           {combinedData.map((data) => (
//             <tr key={data.dispatch_entry_id}>
//               <td>{data.customer.name}</td>
//               <td>{data.customer.email}</td>
//               <td>{data.customer.phone}</td>
//               <td>{data.partner_service_id}</td>
//               {/* Add more table cells based on the data you want to display */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Cases;

