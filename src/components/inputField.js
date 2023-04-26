/* eslint-disable react/prop-types */
import React from "react";

function InputField(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      {...props.register}
      className={props.className}
      data-testid={props["data-testid"]}
    />
  );
}

function OnChangeInputField(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      {...props.register}
      className={props.className}
      data-testid={props["data-testid"]}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
    />
  );
}

export { InputField, OnChangeInputField };
