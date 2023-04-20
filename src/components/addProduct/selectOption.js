/* eslint-disable react/prop-types */
import React from "react";

export default function SelectOption(props) {
  return (
    <select
      className={props.className}
      name={props.name}
      data-testid={props["data-testid"]}
      {...props.register}
    >
      <option value="">---select category</option>
      {props.options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
