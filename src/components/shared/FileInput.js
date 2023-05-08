/* eslint-disable react/prop-types */
import React from "react";

function FileInput(props) {
    const {
        label,
        type,
        name,
        placeholder,
        className,
        data_testid,
        inputError,
        labelClassName,
        multiple,
        onChange,
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
            className={className}
            data-testid={data_testid}
            multiple={multiple? multiple : false}
            onChange={onChange}
            />
            {inputError && (
            <p className="error">
                {inputError.message}
            </p>
            )}
        </div>
    );
}

export default FileInput;