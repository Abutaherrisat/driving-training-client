import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faList, faCommentDots, faPlus, faUserPlus, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { UserContext } from '../../../App';
import logo from '../../../images/logo-1.png'
const Sidebar = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://sleepy-oasis-89562.herokuapp.com/isAdmin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser.email])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-12 py-5 px-4 bg-dark" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li className='bg-dark'>
                    <Link to="/home" >
                        <img style={{ height: '50px' }} src={logo} alt="" />
                    </Link>
                </li>
                <div>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/order/:`${name}`" className="text-white">
                            <FontAwesomeIcon className='icon' icon={faCartPlus} /> <span>Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/orderList" className="text-white">
                            <FontAwesomeIcon className='icon' icon={faList} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/review" className="text-white">
                            <FontAwesomeIcon className='icon' icon={faCommentDots} /> <span>Review</span>
                        </Link>
                    </li>
                </div>
                {
                     isAdmin && <div>
                     <li>
                         <Link style={{textDecoration:'none'}} to="/orderDetails" className="text-white">
                             <FontAwesomeIcon className='icon' icon={faListAlt} /> <span>Order Details</span>
                         </Link>
                     </li>
                     <li>
                         <Link style={{textDecoration:'none'}} to="/addservice" className="text-white">
                             <FontAwesomeIcon className='icon' icon={faPlus} /> <span>Add Service</span>
                         </Link>
                     </li>
                     <li>
                         <Link style={{textDecoration:'none'}} to="/makeadmin" className="text-white">
                             <FontAwesomeIcon className='icon' icon={faUserPlus} /> <span>Make Admin</span>
                         </Link>
                     </li>
                     <li>
                         <Link style={{textDecoration:'none'}} to="/manageService" className="text-white">
                             <FontAwesomeIcon className='icon' icon={faPencilAlt} /> <span>Manage Service</span>
                         </Link>
                     </li>
                 </div> 
                }


            </ul>
        </div>
    );
};

export default Sidebar;