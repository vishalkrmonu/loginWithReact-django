import React from 'react';

const Dashboard = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center">Welcome to the Dashboard!</h2>
            <p className="text-center">You are logged in.</p>
            <div className="text-center">
                <button className="btn btn-info">View Profile</button>
                <button className="btn btn-warning ms-2">Logout</button>
            </div>
        </div>
    );
};

export default Dashboard;
