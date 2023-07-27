import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { format } from "date-fns";
// import { getOrderStatus } from "../lib/helpers";
import axios from "axios";
// import { tr } from "date-fns/locale";

const Cases = () => {
  // const [tickets, setTickets] = useState([]);
  const [Partner, setPartner] = useState([]);
  useEffect(() => {
    // fetch("http://127.0.0.1:8000/customers/")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setTickets(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // console.log(tickets);

    axios
      .get("http://127.0.0.1:8000/dispatch-entries/")
      .then((response) => {
        // console.log(response.data); 
        setPartner(response.data);
      }
      )
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(Partner);
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
              {/* <th>Status</th> */}
            </tr>
          </thead>
          <tbody>
            {Partner.map((order) => (
              <tr
                key={order.dispatch_entry_id}
                className="border-2 border-gray-300"
              >
                <td>
                  <Link to={`/cases/${order.dispatch_entry_id}`}>{order.dispatch_entry_id}</Link>
                </td>
                <td>{order.customer_id.name}</td>
                <td>{order.partner_service_id}</td>
                <td>{order.reason_id.name}</td>
                <td>{order.account_id.create_date}</td>
                <td>{order.pickup_location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cases;


