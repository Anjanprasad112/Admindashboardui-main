import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from '../App'
import Main from '../components/Main'
import Login from '../components/auth/Login'
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
import ProtectedRoute from '../pages/ProtectedRoute';





const Router = () => {
  const isAuthenticated = !!localStorage.getItem('jwtToken'); 
    return (
      <div>
        <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<App />}>
            {isAuthenticated&&<Route path="/dashboard" element={<Main />} />}
            {!isAuthenticated && <Route index path="/" element={<Login />} />}
            {!isAuthenticated && <Route index path="/register" element={<Register />} />}

            {isAuthenticated && <ProtectedRoute path="/accounts" component={<Accounts />} />}
            {isAuthenticated && <ProtectedRoute path="/cases/:dispatch_entry_id" component={<CaseDetails />} />}
            {isAuthenticated && <ProtectedRoute path="/accounts/:account_id" component={<AccountDetails />} />}
            {isAuthenticated && <ProtectedRoute path="/settings" component={<Settings />} />}
            {isAuthenticated && <ProtectedRoute path="/addaccount" component={<AddAccount />} />}
            {isAuthenticated && <ProtectedRoute path="/maps/:mapsid" component={<ShowMaps />} />}
    
            <Route path="*" element={<Error />} />
          </Route>
        </Routes> */}
        <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<Main />} />
              <Route index path="/login" element={<Login />} />
              <Route index path="/register" element={<Register />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/newcase" element={<NewCase />} />
              <Route path="/maps" element={<Maps />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route
                path="/cases/:dispatch_entry_id"
                element={<CaseDetails />}
              />
              <Route
                path="/accounts/:account_id"
                element={<AccountDetails />}
              />
              <Route path="settings" element={<Settings />} />
              <Route path="/addaccount" element={<AddAccount />} />
              <Route path="/maps/:mapsid" element={<ShowMaps />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default Router