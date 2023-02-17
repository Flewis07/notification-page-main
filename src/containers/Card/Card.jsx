import React, { useState } from "react";

export default function Car(props){

    const defineStyle = () => {
        if(props.unread){
            return "d-flex unread mt-2";
        } else {
            return "d-flex mt-2";
        }
    }
    
    return(
        <div className={defineStyle()}>
            <div className="avatar">
                <img src={props.avatar} alt="avatar" />
            </div>
            <div className="content">
                <div className="d-flex">
                    <div>
                        <span className="fw-bold">{props.name}</span>
                        <span className="grey-text">{props.event}</span>
                        {
                            props.post !== "" && <span className="grey-text fw-bold">{props.post}</span>
                        }
                        {
                            props.group !== "" && 
                            <span className="dark-blue-text fw-bold d-flex">{props.group}</span>
                        } 
                        {
                            props.unread && <div className="orange-circle"></div>
                        }
                    </div>
                </div>
                <div className="mt-1 mb-1 grey-text">{props.time}</div>
                {
                    props.message !== "" && <div className="message grey-text">{props.message}</div>
                }
            </div>
            {
                props.picture !== "" && <div className="picture"><img src={props.picture} alt="picture" /></div>
            }
        </div>
    )
}