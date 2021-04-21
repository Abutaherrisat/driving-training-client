import React, { useEffect, useState } from 'react';
import ManageAllServices from '../ManageAllServices/ManageAllServices';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [services, setProducts] = useState([]);
    const fetchservices = () => {
        fetch('https://sleepy-oasis-89562.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }
    useEffect(() => {
        fetchservices()
    }, [])
    return (
        <div>
            <div className="row  container-fluid">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <div style={{ width: '100%' }} className="row mt-5 table-content">
                        <table className="table table-borderless">
                            <thead className="table-head">
                                <tr className='d-flex justify-content-between'>
                                    <th className="text-secondary" scope="col">Name</th>
                                    <th className="text-secondary w-25" scope="col">Service Details</th>
                                    <th className="text-secondary" scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    services.map(pd => <ManageAllServices key={pd._id} pd={pd}></ManageAllServices>)

                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ManageService;