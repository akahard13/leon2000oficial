import React from 'react';

const InputDiv = ({ label_text, type, name, id, value, onChange, className, placeholder, disable }) => {
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
                placeholder={placeholder}
                className={`shadow appearance-none bg-gray-100 rounded border-gray-300 w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${className}`}
                disabled={disable}
            />
        </div>
    );
};

export default InputDiv;
