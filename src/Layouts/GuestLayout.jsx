import React, { memo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function GuestLayout() {
    console.log('Guest Layout')

    return (
        <React.Fragment>
            <div className="container">
                <Outlet />
            </div>
        </React.Fragment>
    )

}

export default memo(GuestLayout);