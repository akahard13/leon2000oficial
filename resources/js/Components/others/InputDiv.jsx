import React from 'react';

const InputDiv = ({ label_text, type, name, id, value, onChange, className }) => {
    return (
        <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
                {label_text}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
            />
        </div>
    );
};

export default InputDiv;
