import { Navigate, Outlet } from 'react-router-dom';
import useAuthContext from '../Context/AuthContext'

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MiniDrawer from "../Components/Drawer";
import React, {memo, useEffect} from "react";

function AuthLayout() {
  const { user, getUser } = useAuthContext();
  console.log('Auth Layout'+ JSON.stringify(user))


  return user ?

    <React.Fragment>
      <MiniDrawer>
        <Outlet />
      </MiniDrawer>
    </React.Fragment>

    :

    <Navigate to="/" />
}

export default memo(AuthLayout)