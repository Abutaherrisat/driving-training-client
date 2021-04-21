import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ManageAllServices = (props) => {
    const { _id, title, description } = props.pd;
    const deleteService = (e, _id) => {
        fetch(`https://sleepy-oasis-89562.herokuapp.com/delete/` + _id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    e.target.parentNode.parentNode.style.display = 'none';
                }
            })
    }
    return (

        <div className="manage-product mb-3">
            
                <td style={{paddingRight:'10px'}}>{title}</td>
                <td style={{paddingRight:'10px'}} className="text-justify">{description}</td>
                <td><p>
                    <button className="btn btn-danger" onClick={(e) => deleteService(e, _id)}><FontAwesomeIcon icon={faTrashAlt} /> Delete</button>
                </p></td>
        </div>
    );
};

export default ManageAllServices;