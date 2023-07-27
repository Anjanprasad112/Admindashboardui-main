import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NewCase() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [make, setMake] = useState("");
  const [vehicle_class, setVehicle_class] = useState("");
  const [vehicle_type, setVehicle_type] = useState("");
  const [uniqueNames, setUniqueNames] = useState([]);
  const [uniqueNamesone, setUniqueNamesone] = useState([]);
  const [uniqueNamestwo, setUniqueNamestwo] = useState([]);
  const [uniqueNamesthree, setUniqueNamesthree] = useState([]);
  const [breakdown_issue, setBreakdownIssue] = useState("");
  const [ratesid, setRatesid] = useState([]);
  const [price, setPrice] = useState([]);
  const [dropoff_location, setDrop_location] = useState([]);
  const [pickup_location, setPickup_location] = useState([]);
  const [license_plate, setLicense_plate] = useState([]);
  const [partner_service_id, setPartner_service_id] = useState([]);

  const account_id = 1;
  const account_name = "A2Z ASSIST";
  const account_company_id = 1001;

  // const [customers, setCustomers] = useState([]);
  // const [vehicleRegNumber, setVehicleRegNumber] = useState("");
  // const [breakdownIssue, setBreakdownIssue] = useState("");
  // const [location, setLocation] = useState("");
  const [whatsapp_number, setWhatsapp_number] = useState("");
  // const [assistanceTime, setAssistanceTime] = useState('');
  // const [comments, setComments] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();

  const data1 = {
    breakdown_issue,
    make,
    account_company_id,
    account_id,
    account_name,
  };
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/vehicles/")
      .then((response) => {
        // console.log(response.data);
        const flattenedData = response.data.flat();
        const uniqueNamesSet = new Set(
          flattenedData.map((item) => item.vehicle_class)
        );
        const uniqueNamesArray = [...uniqueNamesSet];
        setUniqueNames(uniqueNamesArray);

        const uniqueNamesSetone = new Set(
          flattenedData.map((item) => item.make)
        );
        const uniqueNamesArrayone = [...uniqueNamesSetone];
        setUniqueNamesone(uniqueNamesArrayone);

        const uniqueNamesSettwo = new Set(
          flattenedData.map((item) => item.vehicle_type)
        );
        const uniqueNamesArraytwo = [...uniqueNamesSettwo];
        setUniqueNamestwo(uniqueNamesArraytwo);
      })

      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://127.0.0.1:8000/rate-items/")
      .then((response) => {
        // console.log(typeof(response.data));
        const flattenedDataone = response.data.flat();
        // console.log(flattenedDataone[1].premium_2w)
        const uniqueNamesSetthree = new Set(
          flattenedDataone.map((item) => item.name)
        );
        const uniqueNamesArraythree = [...uniqueNamesSetthree];
        setUniqueNamesthree(uniqueNamesArraythree);
        // for (let i = 0; i < flattenedDataone.length; i++) {
        //   if(account_id===flattenedDataone[i].name){
        //     console.log(flattenedDataone[i].rate_item_id)
        //     setRatesid(flattenedDataone[i].rate_item_id)
        //     setPrice(flattenedDataone[13].budget_2w)
        //   }
        // }
        // console.log(ratesid)
        // console.log(flattenedDataone[ratesid])
        // setPrice(flattenedDataone[ratesid].a)
        // const a='premium_2w'
        // console.log(flattenedDataone[ratesid].premium_2w)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/default-rate/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data1),
  //   })
  //     .then(
  //       (response) => {
  //         console.log(response.json());
  //         // setPrice(response)
  //       }
  //       // setPrice(response.data.price)
  //     )

  //     .catch((error) => console.log(error));
  // }, [make, breakdown_issue]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !phone ||
      !email ||
      !whatsapp_number ||
      !make ||
      !breakdown_issue ||
      !pickup_location ||
      !license_plate
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // console.log(data);
    const data = {
      name,
      phone,
      email,
      whatsapp_number,
      breakdown_issue,
      make,
      pickup_location,
      license_plate,
      partner_service_id,
    };

    // const data2={
    //   asset_id,
    //   partner_service_id,
    //   account_id,
    //   service_type_id,
    //   reason_id,
    //   customer_id,
    //   dispatch_status_id,
    //   csr_id,
    //   company_id,
    //   pickup_location,
    //   dropoff_location
    // }

    await fetch("http://127.0.0.1:8000/web-portal/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => console.log(response))
      .then(() => {
        setName("");
        setPhone("");
        setEmail("");
        setWhatsapp_number("");
        // setBreakdown_issue("");
        setMake("");
        setPickup_location("");
        setLicense_plate("");
        setShowSuccessPopup(true);
        
      })
      .catch((error) => console.log(error));

    // await axios
    // .get("http://127.0.0.1:8000/customers/")
    // .then((response) => {
    //   // console.log(response.data);
    //   setCustomer_id(response.data.customer_id);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });

    // await fetch("http://127.0.0.1:8000/dispatch-entry-assets/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data1),
    // })

    // .then((response) =>
    // console.log(response))
    // // response.json())
    // .then(() => {
    //   setMake("");
    //   setVehicle_class("");
    //   setVehicle_type("");
    //   setLicense_plate("");
    // })
    // .catch((error) => console.log(error));

    // await axios
    // .get("http://127.0.0.1:8000/dispatch-entry-assets/")
    // .then((response) => {
    //   // console.log(response.data);
    //   setAsset_id(response.data.asset_id);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });

    // // partner_service_id,
    // // account_id,
    // // reason_id,
    // // customer_id,
    // // dispatch_status_id,
    // // pickup_location,
    // // dropoff_location
    // // await axios
    // // .post("http://127.0.0.1:8000/dispatch-entries/",
    // // {
    // //   partner_service_id,
    // //   account_id,
    // //   reason_id,
    // //   customer_id,
    // //   dispatch_status_id,
    // //   pickup_location,
    // //   dropoff_location
    // // })
    // // .then((response) => {
    // //   console.log(response.data);
    // // })
    // // .catch((error) => {
    // //   console.log(error);
    // // });

    // await fetch("http://127.0.0.1:8000/dispatch-entries/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data2),
    // })

    // .then((response) =>
    // console.log(response))
    // // response.json())
    // .then(() => {
    //   setReason_id("");
    //   setPickup_location("");
    //   setDrop_location("");
    // })
    // .catch((error) => console.log(error));

    // setShowSuccessPopup(true);
    // navigate("/end");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <div className="text-2xl text-red-500 text-center font-semibold tracking-widest">
        A2Z ASSIST
      </div> */}
      {/* <h2 className="text-2xl font-bold mb-4">Create New Ticket</h2> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Contact Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your contact number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="whatsapp_number"
          >
            Whatsapp Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="whatsapp_number"
            type="tel"
            placeholder="Enter your whatsapp number"
            value={whatsapp_number}
            onChange={(e) => setWhatsapp_number(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="partner_service_id"
          >
            Partner Service
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="partner_service_id"
            type="number"
            placeholder="Enter your partner_service_id"
            value={partner_service_id}
            onChange={(e) => setPartner_service_id(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="breakdown_issue"
          >
            Breakdown Issue
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="breakdown_issue"
            placeholder="Select Vehicle Class"
            value={breakdown_issue}
            onChange={(e) => setBreakdownIssue(e.target.value)}
          >
            <option value="">Select Breakdown Issue</option>
            {uniqueNamesthree.map((name, index) => (
              <option key={index}>{name}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="make"
          >
            Vehicle Make
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="make"
            placeholder="Select Vehicle make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          >
            <option value="">Select Vehicle Make</option>
            {uniqueNamesone.map((name, index) => (
              <option key={index}>{name}</option>
            ))}
          </select>
        </div>

        {/* <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="vehicle_class"
          >
            Vehicle Class
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="vehicle_class"
            placeholder="Select Vehicle Class"
            value={vehicle_class}
            onChange={(e) => setVehicle_class(e.target.value)}
          >
            <option value="">Select Vehicle Class</option>
           {uniqueNames.map((name, index) => (
          <option key={index}>{name}</option>
        ))}
            
          </select>
        </div>


       


        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="vehicle_type"
          >
            Vehicle Type
          </label>
           <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="vehicle_type"
            type="number"
            placeholder="Select Vehicle type"
            value={vehicle_type}
            onChange={(e) => setVehicle_type(e.target.value)}
          >
            <option value="">Select Vehicle Type</option>
           {uniqueNamestwo.map((name, index) => (
          <option key={index}>{name}</option>
        ))}
            
          </select>
        </div> */}

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="license_plate"
          >
            License Plate
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="license_plate"
            type="text"
            placeholder="Enter License Plate Number"
            value={license_plate}
            onChange={(e) => setLicense_plate(e.target.value)}
          />
        </div>

        {/* <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="vehicle_type"
          >
            pickup location
          </label>
           <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="vehicle_type"
            type="text"
            placeholder="Select Vehicle type"
            value={dropoff_location}
            onChange={(e) => setDrop_location(e.target.value)}
         />
            
        </div> */}

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pickup_location"
          >
            Pickup Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pickup_location"
            type="text"
            placeholder="Enter pickup location"
            value={pickup_location}
            onChange={(e) => setPickup_location(e.target.value)}
          />
        </div>

        {/* <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2">
          Approx service fee: {price}
        </div> */}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
      {showSuccessPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded">
            <p className="text-lg font-bold mb-4">
              New Task Created Successfully
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setShowSuccessPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewCase;
