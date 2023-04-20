/* eslint-disable react/prop-types */
import React from "react";

function InputField(props) {
    const {
        label,
        type,
        name,
        placeholder,
        register,
        className,
        data_testid,
        inputError,
        labelClassName,
        labelTestId,
    } = props;
    return (
        <div>
            {label && name && (
            <label htmlFor={name}
            data-testid={labelTestId}
            className={labelClassName || ""}>
                {label}
            </label>
            )}
            <input type={type || "text"}
            name={name || ""}
            id={name || ""}
            placeholder={placeholder}
            {...register}
            className={className}
            data-testid={data_testid}
            />
            {inputError && (
            <p className="error">
                {inputError.message}
            </p>
            )}
        </div>
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
