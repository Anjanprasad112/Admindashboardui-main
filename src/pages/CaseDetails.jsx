import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CaseDetails = () => {
  const { dispatch_entry_id } = useParams();
  const [dispatch, setDispatch] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/dispatch-entries/${dispatch_entry_id}/`);
        setDispatch(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [dispatch_entry_id]);

  console.log(dispatch);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className='text-center text-2xl'>Case Details</div>

      <div key={dispatch.dispatch_entry_id} className="border-2 border-gray-300 text-center">
        <div>Dispatch Entry ID: {dispatch.dispatch_entry_id}</div>
        <div>
          <strong>Account Details:</strong>
          <div>Account ID: {dispatch.account_id.account_id}</div>
          <div>Name: {dispatch.account_id.name}</div>
          <div>Create Date: {dispatch.account_id.create_date}</div>
          <div>Address: {dispatch.account_id.address}</div>
          <div>Email: {dispatch.account_id.email}</div>

        </div>
        <div>
          <strong>Asset Details:</strong>
          <div>Asset ID: {dispatch.asset_id.asset_id}</div>
          <div>License Plate: {dispatch.asset_id.license_plate}</div>
          <div>Create Date: {dispatch.asset_id.create_date}</div>
          <div>Customer ID: {dispatch.asset_id.customer_id}</div>
          <div>Vehicle ID: {dispatch.asset_id.vehicle_id}</div>

        </div>
        <div>
          <strong>Case Details:</strong>
          <div>Case ID: {dispatch.case_id.case_id}</div>
          <div>Dispatch Entry ID: {dispatch.case_id.dispatch_entry_id}</div>
          <div>CSR ID: {dispatch.case_id.csr_id.csr_id}</div>

        </div>
  
      </div>
    </div>
  );
}

export default CaseDetails;
