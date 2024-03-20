import React, { useState, useEffect } from 'react';

const ShipmentList = () => {
    // State to store the fetched shipments
    const [shipments, setShipments] = useState([]);

    // Fetch shipments data from the API when the component mounts
    useEffect(() => {
        const fetchShipments = async () => {
            try {
                const response = await fetch('https://onesystem-api.azurewebsites.net/api/airshipment/WEEK');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setShipments(data); // Update state with the fetched data
            } catch (error) {
                console.error("Failed to fetch shipments data:", error);
            }
        };

        fetchShipments();
    }, []); // Empty dependency array means this effect runs only once, after initial render

    return (
        <div>
            <h2>Shipment List</h2>
            <ul>
                {shipments.map((shipment, index) => (
                    <li key={index}>
                        <h3>Shipment TRX No: {shipment.trxNo}</h3>
                        <p>AWB No: {shipment.awbNo}</p>
                        <p>Job No: {shipment.jobNo}</p>
                        <p>MAWB No: {shipment.mawbNo}</p>
                        <p>Customer Name: {shipment.customerName}</p>
                        <p>Destination: {shipment.destName}</p>
                        <p>Commodity: {shipment.commodityDescription}</p>
                        {/* Render additional shipment details as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShipmentList;
