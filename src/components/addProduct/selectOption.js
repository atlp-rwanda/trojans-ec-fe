/* eslint-disable react/prop-types */
import React from "react";

export function SelectOption(props) {
  return (
    <select
      className={props.className}
      name={props.name}
      data-testid={props["data-testid"]}
      {...props.register}
    >
      <option value="" className="">
        {props.default}
      </option>
      {props.options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export function OnChangeSelectOption(props) {
  return (
    <select
      className={props.className}
      name={props.name}
      data-testid={props["data-testid"]}
      {...props.register}
      onChange={props.onChange}
      value={props.value}
    >
      <option value="" className="">
        {props.default}
      </option>
      {props.options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
