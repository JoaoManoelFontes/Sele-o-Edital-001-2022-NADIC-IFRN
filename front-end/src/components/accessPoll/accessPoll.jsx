import React from 'react';
import {useLocation} from 'react-router-dom';

export default function CreatePoll(){

    const state = useLocation();
    console.log(state);
    return(
        <div>sla</div>
        
    )
}