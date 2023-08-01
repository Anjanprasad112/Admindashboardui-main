import React from 'react'
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom"
import App from '../App'
import Main from '../components/Main'
import Login from '../components/auth/Login'
import Logout from '../components/auth/Logout'
import Register from '../components/auth/Register'
import Error from '../pages/Error'
import Cases from '../pages/Cases'
import NewCase from '../pages/NewCase'
import Maps from '../pages/Maps'
import ShowMaps from '../pages/ShowMaps'
import Accounts from '../pages/Accounts'
import AddAccount from '../pages/AddAccount'
import AccountDetails from '../pages/AccountDetails'
import Settings from '../pages/Settings'
import CaseDetails from '../pages/CaseDetails'
import PrivateRoute from '../pages/PrivateRoute';


const Router = () => {
  // const isAuthenticated = !!localStorage.getItem('accessToken'); 
  const isAuthenticated = !!localStorage.getItem("access_token");
    return (
      <div>
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<App />}>
            {isAuthenticated ? (
          <Route path="/dashboard" element={<Main />} />
        ) : (
          <Route path="/dashboard" element={<Navigate to="/" />} />
        )}
              {/* <PrivateRoute path="/dashboard" element={<Main />} isAuthenticated={isAuthenticated}/> */}
              <Route index path="/" element={<Login />} />
              <Route index path="/register" element={<Register />}/>
              <Route index path="/logout" element={<Logout />}/>
              {isAuthenticated ? (
          <Route path="/cases" element={<Cases />} />
        ) : (
          <Route path="/cases" element={<Navigate to="/" />} />
        )}

              {/* <Route path="/cases" element={<Cases />}  /> */}
              {/* <Route path="/cases" element={<Cases />} /> */}
              {isAuthenticated ? (
          <Route path="/NewCase" element={<NewCase />} />
        ) : (
          <Route path="/NewCase" element={<Navigate to="/" />} />
        )}
              
              {/* <Route path="/newcase" element={<NewCase />} /> */}
              {isAuthenticated ? (
          <Route path="/maps" element={<Maps />} />
        ) : (
          <Route path="/maps" element={<Navigate to="/" />} />
        )}
              {/* <Route path="/maps" element={<Maps />} /> */}
              {isAuthenticated ? (
          <Route path="/accounts" element={<Accounts />} />
        ) : (
          <Route path="/accounts" element={<Navigate to="/" />} />
        )}
              {/* <Route path="/accounts" element={<Accounts />} /> */}
              {isAuthenticated ? (
          <Route path="/cases/:dispatch_entry_id" element={<CaseDetails />} />
        ) : (
          <Route path="/cases/:dispatch_entry_id" element={<Navigate to="/" />} />
        )}
              {/* <Route
                path="/cases/:dispatch_entry_id"
                element={<CaseDetails />}
              /> */}

{isAuthenticated ? (
          <Route path="/accounts/:account_id" element={<AccountDetails />} />
        ) : (
          <Route path="/accounts/:account_id" element={<Navigate to="/" />} />
        )}
              {/* <Route
                path="/accounts/:account_id"
                element={<AccountDetails />}
              /> */}
              {isAuthenticated ? (
          <Route path="/settings" element={<Settings />} />
        ) : (
          <Route path="/settings" element={<Navigate to="/" />} />
        )}
              {/* <Route path="settings" element={<Settings />} /> */}
              {isAuthenticated ? (
          <Route path="/addaccount" element={<AddAccount />} />
        ) : (
          <Route path="/addaccount" element={<Navigate to="/" />} />
        )}
              {/* <Route path="/addaccount" element={<AddAccount />} /> */}
              {isAuthenticated ? (
          <Route path="/maps/:mapsid" element={<ShowMaps />} />
        ) : (
          <Route path="/maps/:mapsid" element={<Navigate to="/" />} />
        )}
              {/* <Route path="/maps/:mapsid" element={<ShowMaps />} /> */}
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default Router


// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import App from "../App";
// import Main from "../components/Main";
// import Login from "../components/auth/Login";
// import Logout from "../components/auth/Logout";
// import Register from "../components/auth/Register";
// import Error from "../pages/Error";
// import Cases from "../pages/Cases";
// import NewCase from "../pages/NewCase";
// import Maps from "../pages/Maps";
// import ShowMaps from "../pages/ShowMaps";
// import Accounts from "../pages/Accounts";
// import AddAccount from "../pages/AddAccount";
// import AccountDetails from "../pages/AccountDetails";
// import Settings from "../pages/Settings";
// import CaseDetails from "../pages/CaseDetails";
// // import PrivateRoute from "./PrivateRoute";

// const Router = () => {
//   const isAuthenticated = !!localStorage.getItem("access_token");

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<App />}>
//             {/* Non-private routes */}
//             <Route index element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/logout" element={<Logout />} />

//             {/* Private routes */}
//             {isAuthenticated ? (
//               <Route path="/dashboard" element={<Main />} />
//             ) : (
//               <Navigate to="/" />
//             )}
//             {isAuthenticated ? (
//               <Route path="/cases" element={<Cases />} />
//             ) : (
//               <Navigate to="/" />
//             )}
//             {isAuthenticated ? (
//               <Route path="/NewCase" element={<NewCase />} />
//             ) : (
//               <Navigate to="/" />
//             )}
//             {isAuthenticated ? (
//               <Route path="/maps" element={<Maps />} />
//             ) : (
//               <Navigate to="/" />
//             )}
//             {isAuthenticated ? (
//               <Route path="/accounts" element={<Accounts />} />
//             ) : (
//               <Navigate to="/" />
//             )}
//             {isAuthenticated ? (
//               <Route path="/cases/:dispatch_entry_id" element={<CaseDetails />} />
//             ) : (
//               <Navigate to="/" />
//             )}
//             {isAuthenticated ? (
//               <Route path="/accounts/:account_id" element={<AccountDetails />} />
//             ) : (
//               <Navigate to="/" />
//             )}
//             <Route path="settings" element={<Settings />} />
//             <Route path="/addaccount" element={<AddAccount />} />
//             <Route path="/maps/:mapsid" element={<ShowMaps />} />
//             <Route path="*" element={<Error />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default Router;
