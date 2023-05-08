/* eslint-disable react/prop-types */
import React from "react";

export function SelectOption(props) {
  const {
    className,
    name,
    data_testid,
    register,
    options,
    selectError,
    label,
    labelClassName,
    defaultSelected,
  } = props;
  return (
    <div>
      {label && name && (
      <label htmlFor={name}
      className={labelClassName || ""}>
          {label}
      </label>
      )}
      <select
        className={className}
        name={name}
        data-testid={data_testid}
        {...register}
      >
        {defaultSelected && <option value="">{defaultSelected}</option>}
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      {selectError && <p className="error">{selectError.message}</p>}
    </div>
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
