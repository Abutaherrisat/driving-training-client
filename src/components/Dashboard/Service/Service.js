import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import OrderedItems from './OrderedItems';

const Service = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(orders)
    useEffect(() => {
        fetch(`https://sleepy-oasis-89562.herokuapp.com/orders?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(result => {
            setOrders(result)
        })
    }, [loggedInUser.email])
    return (
        <div className="row container-fluid">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <Topbar></Topbar>
                <div style={{width: '100%'}} className="row mt-5">
                    {
                        orders.map(order => <OrderedItems key={order._id} order={order}></OrderedItems>)
                    }
                </div>                
            </div>
        </div>
    );
};

export default Service;