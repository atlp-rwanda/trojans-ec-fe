/* eslint-disable react/prop-types */
import React from "react";

function InputField(props) {
    return (<input type={props.type} name={props.name} placeholder={props.placeholder} {...props.register} className={props.className} data-testid={props["data-testid"]} />  );
}

export default InputField;