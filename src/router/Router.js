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




const Router = () => {
    return (
      <div>
        <BrowserRouter>
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