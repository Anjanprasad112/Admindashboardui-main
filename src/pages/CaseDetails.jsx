import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CaseDetails = () => {
  const { dispatch_entry_id } = useParams();
  const [dispatch, setDispatch] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [vehicle, setVehicle] = useState(null);
  const [nearbyDrivers, setNearbyDrivers] = useState([]);
  // const [vehicleid, setVehicleid] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/dispatch-entries/${dispatch_entry_id}/`);
        setDispatch(response.data);
        console.log(response.data)
        const vehicleID = response.data.asset_id.vehicle_id;
        getVehicle(vehicleID);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    console.log(vehicle);
    async function getVehicle(vehicleID) {
      try {
        const vehicleData = {
          vehicle: vehicleID,
        };

        const response = await axios.post('http://127.0.0.1:8000/vehicleID/', vehicleData);
        setVehicle(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
              fetchData();
              // getVehicle();
            }, [dispatch_entry_id]);
            console.log(dispatch)
            useEffect(() => {
              if (dispatch.latitude && dispatch.longitude) {
                async function fetchNearbyDrivers() {
                  try {
                    const response = await axios.get(
                      `http://127.0.0.1:8000/drivers/nearby/?pickup_latitude=${dispatch.latitude}&pickup_longitude=${dispatch.longitude}`
                    );
                    setNearbyDrivers(response.data);
                  } catch (error) {
                    console.error("Error fetching nearby drivers:", error);
                  }
                }
          
                fetchNearbyDrivers();
              }
            }, [dispatch.latitude, dispatch.longitude]);
            
            console.log(nearbyDrivers)
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 text-center">
        <div className='border-2 border-gray-400 p-4 mb-4'>
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center text-2xl font-semibold mb-4">CASE DETAILS</div>
        <div className="text-center text-2xl font-semibold mb-4 border-2 p-4 border-gray-300">
        <strong>Dispatch Entry ID:</strong> {dispatch.dispatch_entry_id}
        </div>

        <hr className="border-gray-400 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Dispatch Entry Details */}
          {/* <div className="border-2 border-gray-300 p-4 mb-4">
            <div className="mb-4">
              <strong>Dispatch Entry ID:</strong> {dispatch.dispatch_entry_id}
            </div>
          </div> */}

          {/* Account Details */}
          <div className="border-2 border-gray-300 p-4 mb-4">
            <strong className="text-xl">Account Details :</strong>
            <hr className="border-gray-400 mb-4" />
            <div className="mb-2">Name : {dispatch.account_id.name}</div>
            <div className="mb-2">Address : {dispatch.account_id.address}</div>
            <div>Email: {dispatch.account_id.email}</div>
          </div>

          {/* Asset Details */}
          <div className="border-2 border-gray-300 p-4 mb-4">
          {vehicle && (
            <>
            <strong className="text-xl">Vehicle Details :</strong>
            <hr className="border-gray-400 mb-4" />
            
            <div className="mb-2">Make : {vehicle.vehicle_make}</div>
            <div className="mb-2">License Plate : {dispatch.asset_id.license_plate}</div>
            <div className="mb-2">Class : {vehicle.vehicle_class}</div>
            <div>Type: {vehicle.vehicle_type}</div>
            </>
        )}
            
          </div>

          {/* Company Details */}
          <div className="border-2 border-gray-300 p-4 mb-4">
            <strong className="text-xl">Company Details :</strong>
            <hr className="border-gray-400 mb-4" />
            <div className="mb-2">Company ID : {dispatch.company_id.name}</div>
            <div className="mb-2">Phone no. : {dispatch.company_id.phone}</div>
            <div>Address: {dispatch.company_id.address}</div>
          </div>

          {/* Customer Details */}
          <div className="border-2 border-gray-300 p-4 mb-4">
            <strong className="text-xl">Customer Details :</strong>
            <hr className="border-gray-400 mb-4" />
            <div className="mb-2">Name : {dispatch.customer_id.name}</div>
            <div className="mb-2">Email ID : {dispatch.customer_id.email}</div>
            <div>Phone No.: {dispatch.customer_id.phone}</div>
          </div>

          {/* Reason Details */}
          <div className="border-2 border-gray-300 p-4 mb-4">
            <strong className="text-xl">Reason Details :</strong>
            <hr className="border-gray-400 mb-4" />
            <div>Reason : {dispatch.reason_id.name}</div>
          </div>
         

          {/* Location */}
          <div className="border-2 border-gray-300 p-4 mb-4">
            <strong className="text-xl">Location :</strong>
            <hr className="border-gray-400 mb-4" />
            <div>Pickup Location: {dispatch.pickup_location}</div>
          </div>

          
         
        </div>
        <div className="border-2 border-gray-300 p-4 mb-4">
          <strong className="text-xl">Nearby Drivers :</strong>
          <hr className="border-gray-400 mb-4" />
          <div className="h-48 overflow-y-auto">
            {nearbyDrivers.map((driver) => (
              <div key={driver.id} className="p-4 border border-gray-300 mb-2">
                <div className="text-xl font-semibold">{driver.name}</div>
                <div>{driver.email}</div>
                <div>{driver.phone}</div>
                {/* Add other driver details as needed */}
              </div>
            ))}
          </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default CaseDetails;





  // <div>
    //   <div className='text-center text-2xl'>Case Details</div>

    //   <div key={dispatch.dispatch_entry_id} className="border-2 border-gray-300 text-center">
    //     <div>Dispatch Entry ID: {dispatch.dispatch_entry_id}</div>
    //     <div>
    //       <strong>Account Details:</strong>
    //       <div>Account ID: {dispatch.account_id.account_id}</div>
    //       <div>Name: {dispatch.account_id.name}</div>
    //       <div>Create Date: {dispatch.account_id.create_date}</div>
    //       <div>Address: {dispatch.account_id.address}</div>
    //       <div>Email: {dispatch.account_id.email}</div>

    //     </div>
    //     <div>
    //       <strong>Asset Details:</strong>
    //       <div>Asset ID: {dispatch.asset_id.asset_id}</div>
    //       <div>License Plate: {dispatch.asset_id.license_plate}</div>
    //       <div>Create Date: {dispatch.asset_id.create_date}</div>
    //       <div>Customer ID: {dispatch.asset_id.customer_id}</div>
    //       <div>Vehicle ID: {dispatch.asset_id.vehicle_id}</div>

    //     </div>
    //     <div>
    //       <strong>Case Details:</strong>
    //       <div>Case ID: {dispatch.case_id.case_id}</div>
    //       <div>Dispatch Entry ID: {dispatch.case_id.dispatch_entry_id}</div>
    //       <div>CSR ID: {dispatch.case_id.csr_id}</div>

    //     </div>
    //     <div>
    //       <strong>Company Details:</strong>
    //       <div>Company ID: {dispatch.company_id.company_id}</div>
    //       <div>Address : {dispatch.company_id.address}</div>
    //       <div>Type :{dispatch.company_id.company_type}</div>
    //     </div>
    //     <div>
    //       <strong>Customer Details:</strong>
    //       <div>Customer ID : {dispatch.customer_id.customer_id}</div>
    //       <div> Name : {dispatch.customer_id.name}</div>
    //       <div>Email ID : {dispatch.customer_id.email}</div>
    //       <div>Phone No. :{ dispatch.customer_id.phone}</div>
    //     </div>
    //     <div>
    //       <strong>Reason Details:</strong>
    //       <div>Reason ID : {dispatch.reason_id.reason_id}</div>
    //       <div>Reason : {dispatch.reason_id.name}</div>
    //     </div>
    //     <div>
    //       <strong>Location :</strong>
    //       <div>pickup location : {dispatch.pickup_location}</div>
    //       <div>drop location : {dispatch.dropoff_location}</div>
    //     </div>
    
    //   </div>
    // </div>