import React from "react";

const InputGroup = ({name, onBlur, onChange, label, formErrors, formBlur, type = 'text', className = ''}) => {
    return <div className={`InputGroup ${className}`}>
        <label htmlFor={name} className="Label">
            {label}
        </label>
        <input name={name} type={type} className={`Input ${formErrors[name] ? 'Error' : ''}`} onBlur={onBlur}
               onChange={onChange}/>
        {formErrors[name] && formBlur[name] && <div className="ErrorText">{formErrors[name]}</div>}
    </div>
}

export default InputGroup;
