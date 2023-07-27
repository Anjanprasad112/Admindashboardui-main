import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


const CaseDetails = () => {
    const { dispatch_entry_id } = useParams();
    const [dispatch, setDispatch] = useState([]);

    useEffect((e) => {
        e.preventDefault();

      async function fetchData() {
        await axios
          .get(`http://127.0.0.1:8000/dispatch-entries/${dispatch_entry_id}/`)
          .then((response) => setDispatch(response.data))
          .catch((error) => {
            console.error(error);
          });
      }

      fetchData();
    }, [dispatch_entry_id]);
    
  
    
    console.log(dispatch)
  return (
    <div>
      <div className='text-center text-2xl'>Case Detials </div>

      <div key={dispatch.dispatch_entry_id} className="border-2 border-gray-300 text-center">
              <div>Dispatch Enrty ID : {dispatch.dispatch_entry_id}</div>
              <div>
                  <strong>Account Details: </strong>
                  <div>
                      {dispatch.account_id.name}    
                    
                  </div>
              </div>
              <div>
                  <strong>Breakdown Issue: </strong>
                  <div>
                      
                  </div>
              </div>

      </div>
    </div>
  );
}

export default CaseDetails