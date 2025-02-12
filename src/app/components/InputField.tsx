import React from "react";


export type InputFieldProps ={
    id:string;
    name:string
    type:string;
    label:string;
    placeholder:string;
}

export const InputField: React.FC<InputFieldProps> = ({
    id, name, type, label, placeholder,
}) => {
    return (
        <div className="flex flex-col space-y-1">
            <label htmlFor={id}>
                {label}

            </label>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}

                className="rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:outline-none 
            focus-within:ring-2 focus:ring-red-500 focus:border-transparent">
            </input>

        </div>
    );
};
