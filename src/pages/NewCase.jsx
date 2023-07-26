// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// const NewCase = () => {
//   const [is_scheduled, setIs_scheduled] = useState(false);
//   const [caseid, setCase] = useState('');
//   const [partner_caseid, setPartner_caseid] = useState('');
//   const [partner_service_id, setPartner_service_id] = useState('');
//   const [account_id, setAccount_id] = useState('');
//   const [source, setSource] = useState('');
//   const [service_type_id, setService_type_id] = useState('');
//   const [reason_id, setReason_id] = useState('');
//   const [customer_id, setCustomer_id] = useState('');
//   const [asset_id, setAsset_id] = useState('');
//   const [dispatch_status_id, setDispatch_status_id] = useState(''); 
//   const [repair_status, setRepair_status] = useState('');
//   const [csr_id, setCsr_id] = useState('');
//   const [company_id, setCompany_id] = useState('');
//   const [scheduled_date, setScheduled_date] = useState('');
//   const [invoice_id, setInvoice_id] = useState('');
//   const [payment_id, setPayment_id] = useState('');
//   const [payment_status, setPayment_status] = useState('');
//   const [pickup_location, setPickup_location] = useState('');
//   const [dropoff_location, setDropoff_location] = useState('');
//   const [eta, setEta] = useState('');
//   const [ata, setAta] = useState('');



//   const [uniacc, setUniacc] = useState([]);
//   const [services, setServices] = useState([]);
//   const [reasons, setReasons] = useState([]);


//   const handleCheckboxChange = (event) => {
//     setIs_scheduled(event.target.checked);
//   };

//   const data = {
//     caseid,
//     partner_caseid,
//     partner_service_id,
//     account_id,
//     source,
//     service_type_id,
//     reason_id,
//     customer_id,
//     asset_id,
//     dispatch_status_id,
//     repair_status,
//     csr_id,
//     company_id,
//     scheduled_date,
//     is_scheduled,
//     invoice_id,
//     payment_id,
//     payment_status,
//     pickup_location,
//     dropoff_location,
//     eta,
//     ata,
//   };

//   useEffect(() => {
//     axios
//     .get('http://127.0.0.1:8000/accounts/')
//     .then((response) => 
//     // console.log(response.data)
//     setUniacc(response.data.map((acc) => 
//     ({

//       value:  acc.account_id,
//     })

//     )))
//     .catch((error) => {
//         console.error(error);
//     }
//     );

//     //service types
//     axios
//     .get('http://127.0.0.1:8000/service-types/')
//     .then((response) =>
//     setServices(response.data.map((acc) => 
//     ({
//       value:acc.service_type_id,
//     })))
//     )


//     axios
//     .get('http://127.0.0.1:8000/reasons/')
//     .then((response)=>
//     setReasons(response.data.map((acc) => 
//     ({
//       value: acc.reason_id
//     })
//     ))
//     )
   
//   }, [])


//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if(
//       !caseid ||
//       !partner_caseid ||
//       !partner_service_id ||
//       !account_id ||
//       !source ||
//       !service_type_id ||
//       !reason_id ||
//       !customer_id ||
//       !asset_id ||
//       !dispatch_status_id ||
//       !repair_status ||
//       !csr_id ||
//       !company_id ||
//       !scheduled_date ||
//       !invoice_id ||
//       !payment_id ||
//       !payment_status ||
//       !pickup_location ||
//       !dropoff_location ||
//       !eta ||
//       !ata
//     ) {
//       alert('Please fill all the input fields');
//       return;
//     }
    
//     axios.post('http://127.0.0.1:8000/dispatch-entry-assets/', data)
//       .then((response) => {
//         console.log(response);
//         alert('New case created successfully');
//       })
//       .catch((error) => {
//         console.error('Error submitting form:', error); 
//       });
//   };
//   console.log(uniacc)

//   return (
//     <div className="container mx-auto px-auto">
//       <h1 className='text-center text-3xl font-bold p-2'>CREATE NEW CASE</h1>
//     <form onSubmit={handleSubmit} className="mx-auto px-auto">
//       <div className='flex flex-row items-center justify-center'>
//       <div className="m-2 mx-6 w-1/4 inline-block">
//         <label htmlFor="caseid" className=" text-gray-700 font-bold mb-2">
//           Caseid fetch:
//         </label>
//         <input
//           type="text"
//           id="caseid"
//           value={caseid}
//           onChange={(e)=>setCase(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter Case"
//         />
//       </div>


//       <div className="m-2 mx-6 w-1/4 inline-block">
//         <label htmlFor="partner_caseid" className=" text-gray-700 font-bold mb-2">
//         partner_caseid:
//         </label>
//         <input
//           type="text"
//           id="partner_caseid"
//           value={partner_caseid}
//           onChange={(e)=>setPartner_caseid(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter partner_caseid"
//         />
//       </div>
//       <div className="m-2 mx-6 w-1/4 inline-block">
//         <label htmlFor="partner_service_id" className=" text-gray-700 font-bold mb-2">
//         partner_service_id:
//         </label>
//         <input
//           type="text"
//           id="partner_service_id"
//           value={partner_service_id}
//           onChange={(e)=>setPartner_service_id(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter partner_service_id"
//         />
//       </div>
//       </div>
//       <div className='flex items-center justify-center'>
//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="account_id" className=" text-gray-700 font-bold mb-2">
//         account_id:
//         </label>
//         <select
//           type="text"
//           id="account_id"
//           value={account_id}
//           onChange={(e)=>setAccount_id(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter account_id"
//         >
//          <option value="">select Account_Id</option>
//             {uniacc.map((acc) => (
              
//               <option key={acc.value} value={acc.value}>
//                 {acc.value}
//                 </option>
//             ))}
         
//         </select>
//       </div>



//       {/* <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="source" className="block text-gray-700 font-bold mb-2">
//           source:
//         </label>
//         <input
//           type="text"
//           id="source"
//           value={source}
//           onChange={(e)=>setSource(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter source"
//         />
//       </div> */}
//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="service_type_id" className=" text-gray-700 font-bold mb-2">
//         service_type_id:
//         </label>
//         <select
//           type="text"
//           id="service_type_id"
//           value={service_type_id}
//           onChange={(e)=>setService_type_id(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter service_type_id"
//         >
//           <option value="">select service_type_id</option>
//           {
//             services.map((acc) => (
//               <option key={acc.value} value={acc.value}>
//                 {acc.value}
//                 </option>
//             ))
//           }
//           </select>
//       </div>
//       </div>
//       <div className='flex items-center justify-center'>
//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="reason_id" className=" text-gray-700 font-bold mb-2">
//         reason_id:
//         </label>
//         <select
//           type="text"
//           id="reason_id"
//           value={reason_id}
//           onChange={(e)=>setReason_id(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter reason_id"
//         >
//           <option>select Reason</option>
//           {
//             reasons.map((acc) => (
//               <option key={acc.value} value={acc.value}>
//                 {acc.value}
//                 </option>
//             ))
//           }
          
//           </select>
//       </div>
//       {/* <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="customer_id" className=" text-gray-700 font-bold mb-2">
//         customer_id fetch:
//         </label>
//         <input
//           type="text"
//           id="customer_id"
//           value={customer_id}
//           onChange={(e)=>setCustomer_id(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter customer_id"
//         />
//       </div> */}
//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="asset_id" className=" text-gray-700 font-bold mb-2">
//         asset_id fetch:
//         </label>
//         <input
//           type="text"
//           id="asset_id"
//           value={asset_id}
//           onChange={(e)=>setAsset_id(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter asset_id"
//         />
//       </div>
//       </div>
//       <div className="flex items-center justify-center">
//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="dispatch_status_id" className=" text-gray-700 font-bold mb-2">
//         dispatch_status_id fetch:
//         </label>
//         <input
//           type="text"
//           id="dispatch_status_id"
//           value={dispatch_status_id}
//           onChange={(e)=>setDispatch_status_id(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter dispatch_status_id"
//         />
//       </div>
//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="repair_status" className=" text-gray-700 font-bold mb-2">
//         repair_status:
//         </label>
//         <input
//           type="text"
//           id="repair_status"
//           value={repair_status}
//           onChange={(e)=>setRepair_status(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter repair_status"
//         />
//       </div>
//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="csr_id" className=" text-gray-700 font-bold mb-2">
//         csr_id fetch:
//         </label>
//         <input
//           type="text"
//           id="csr_id"
//           value={csr_id}
//           onChange={(e)=>setCsr_id(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter csr_id"
//         />
//       </div>
//       </div>
//       <div className='flex items-center justify-center'>
//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="company_id" className=" text-gray-700 font-bold mb-2">
//         company_id fetch:
//         </label>
//         <input
//           type="text"
//           id="company_id"
//           value={company_id}
//           onChange={(e)=>setCompany_id(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter company_id"
//         />
//       </div>
//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="scheduled_date" className=" text-gray-700 font-bold mb-2">
//         scheduled_date :
//         </label>
//         <input
//           type="datetime-local"
//           id="scheduled_date"
//           value={scheduled_date}
//           onChange={(e)=>setScheduled_date(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter scheduled_date"
//         />
//       </div>
//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="is_scheduled" className=" text-gray-700 font-bold mb-2">
//         is_scheduled :
//         </label>
//         <input
//             type="checkbox"
//             name="is_scheduled"
//             id="is_scheduled"
//             checked={is_scheduled}
//             onChange={handleCheckboxChange}
//             className="form-checkbox h-5 w-5 text-indigo-600"
//           />
//       </div>
//       </div>
//       {/* <div className='flex items-center justify-center'>
//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="invoice_id" className=" text-gray-700 font-bold mb-2">
//         invoice_id fetch:
//         </label>
//         <input
//           type="text"
//           id="invoice_id"
//           value={invoice_id}
//           onChange={(e)=>setInvoice_id(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter dispatch_status_id"
//         />
//       </div>
//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="payment_id" className="block text-gray-700 font-bold mb-2">
//         payment_id fetch:
//         </label>
//         <input
//           type="text"
//           id="payment_id"
//           value={payment_id}
//           onChange={(e)=>setPayment_id(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter payment_id"
//         />
//       </div>
//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="payment_status" className=" text-gray-700 font-bold mb-2">
//         payment_status fetch:
//         </label>
//         <input
//           type="text"
//           id="payment_status"
//           value={payment_status}
//           onChange={(e)=>setPayment_status(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter payment_status"
//         />
//       </div>
//       </div> */}
//       <div className='flex items-center justify-center'>
//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="pickup_location" className=" text-gray-700 font-bold mb-2">
//         pickup_location:
//         </label>
//         <input
//           type="text"
//           id="pickup_location"
//           value={pickup_location}
//           onChange={(e)=>setPickup_location(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter pickup_location"
//         />
//       </div>


      

//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="dropoff_location" className=" text-gray-700 font-bold mb-2">
//         dropoff_location:
//         </label>
//         <input
//           type="text"
//           id="dropoff_location"
//           value={dropoff_location}
//           onChange={(e)=>setDropoff_location(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter dropoff_location"
//         />
//       </div>


//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="eta" className=" text-gray-700 font-bold mb-2">
//         eta fetch:
//         </label>
//         <input
//           type="datetime-local"
//           name="eta"
//           id="eta"
//           value={eta}
//           onChange={(e)=>setEta(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter eta"
//         />
//       </div>
//       </div>
//       <div className='flex items-center justify-center'>

//       <div className="m-2 w-1/4 mx-6 inline-block">
//         <label htmlFor="ata" className=" text-gray-700 font-bold mb-2">
//         ata fetch:
//         </label>
//         <input
//           type="datetime-local"
//           name="ata"
//           id="ata"
//           value={ata}
//           onChange={(e)=>setAta(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Enter ata"
//           />
//       </div>
//           </div>
    
    



//       <div className="m-4 flex justify-center items-center">
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//   </div>
//   );
// };

// export default NewCase;


import React, { useState } from 'react';
import axios from 'axios';

const NewCase = () => {
  const [formData, setFormData] = useState({
    partner_service_id: '',
    account_id: '',
    service_type_id: '',
    reason_id: '',
    customer_id: '',
    pickup_location: '',
    dropoff_location: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make a POST request to your Django API endpoint for creating DispatchEntry
      await axios.post('http://127.0.0.1:8000/dispatch-entries/', formData); // Replace with your Django API endpoint URL
      // If successful, you can redirect or show a success message
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle errors appropriately (e.g., show an error message)
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Case</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="case_id" className="block text-sm font-medium text-gray-700">
            Case ID
          </label>
          <input
            type="text"
            name="case_id"
            id="case_id"
            value={formData.case_id}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Case ID"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="partner_service_id" className="block text-sm font-medium text-gray-700">
            Partner Service ID
          </label>
          <input
            type="text"
            name="partner_service_id"
            id="partner_service_id"
            value={formData.partner_service_id}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Partner Service ID"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="account_id" className="block text-sm font-medium text-gray-700">
            Account ID
          </label>
          <input
            type="text"
            name="account_id"
            id="account_id"
            value={formData.account_id}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Account ID"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="service_type_id" className="block text-sm font-medium text-gray-700">
            Service Type ID
          </label>
          <input
            type="text"
            name="service_type_id"
            id="service_type_id"
            value={formData.service_type_id}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Service Type ID"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reason_id" className="block text-sm font-medium text-gray-700">
            Reason ID
          </label>
          <input
            type="text"
            name="reason_id"
            id="reason_id"
            value={formData.reason_id}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Reason ID"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="customer_id" className="block text-sm font-medium text-gray-700">
            Customer ID
          </label>
          <input
            type="text"
            name="customer_id"
            id="customer_id"
            value={formData.customer_id}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Customer ID"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="asset_id" className="block text-sm font-medium text-gray-700">
            Asset ID
          </label>
          <input
            type="text"
            name="asset_id"
            id="asset_id"
            value={formData.asset_id}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Asset ID"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dispatch_status_id" className="block text-sm font-medium text-gray-700">
            Dispatch Status ID
          </label>
          <input
            type="text"
            name="dispatch_status_id"
            id="dispatch_status_id"
            value={formData.dispatch_status_id}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Dispatch Status ID"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="csr_id" className="block text-sm font-medium text-gray-700">
            CSR ID
          </label>
          <input
            type="text"
            name="csr_id"
            id="csr_id"
            value={formData.csr_id}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter CSR ID"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company_id" className="block text-sm font-medium text-gray-700">
            Company ID
          </label>
          <input
            type="text"
            name="company_id"
            id="company_id"
            value={formData.company_id}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Company ID"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pickup_location" className="block text-sm font-medium text-gray-700">
            Pickup Location
          </label>
          <input
            type="text"
            name="pickup_location"
            id="pickup_location"
            value={formData.pickup_location}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Pickup Location"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dropoff_location" className="block text-sm font-medium text-gray-700">
            Dropoff Location
          </label>
          <input
            type="text"
            name="dropoff_location"
            id="dropoff_location"
            value={formData.dropoff_location}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Dropoff Location"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-opacity-50 rounded-md text-white font-medium"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCase;
