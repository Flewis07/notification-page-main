import React from "react";

export default function header(props) {
    return (
        <div className='d-flex pb-4'>
            <div className="notif-title me-3">{props.title}</div>
            <div className="notifNbr text-light">{props.nbr}</div>
            <div className="read text-end">{props.read}</div>
        </div>
    )
}