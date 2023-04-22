
import './Styles/App.css';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import PatientRegistration from './Pages/Home/MedicalRegistration';
import AuthLayout from './Layouts/AuthLayout';
import GuestLayout from './Layouts/GuestLayout';
import React from 'react';
import Dashboard from './Pages/Dashboard';
import Error404 from './Pages/Error404';
import useAuthContext from './Context/AuthContext';


function App() {
  const { user } = useAuthContext();

  console.log("user" + user)

  return (
    <React.Fragment>
      <Routes>

        {
          user ?
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/patient-registration" element={<PatientRegistration />} />
              <Route
                path="*"
                element={<Error404 />}
              />
            </Route>
            :

            <Route path="/" element={<GuestLayout />}>
              <Route index element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="*"
                element={<Login />}
              />
            </Route>

        }

      </Routes>
    </React.Fragment >

  );
}

export default App;
