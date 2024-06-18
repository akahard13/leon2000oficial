import React from 'react';

const SelectDiv = ({ label_text, name, id, value, onChange, className, children }) => {
    return (
        <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
                {label_text}
            </label>
            <select
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                className={`shadow appearance-none bg-gray-100 rounded border-gray-300 w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${className}`}
            >
                {children}
            </select>
        </div>
    );
};

export default SelectDiv;
