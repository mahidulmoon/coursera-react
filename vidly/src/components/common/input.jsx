import React from 'react';

const Input = ({name,value,label,onChange,error}) =>{
    return (
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <input autoFocus name={name} onChange={onChange} value={value} id={name} type="text" className="from-consol"/>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;