import React from "react";

import './CounterContorol.css'

const CounterContorol = (props)=>(
    <div className="counter-control" onClick={props.clicked}>
        {props.label}
    </div>
)

export default CounterContorol