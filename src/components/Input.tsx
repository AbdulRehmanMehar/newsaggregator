import { ChangeEventHandler } from "react";

type InputProps = {
    label: string;
    value?: string;
    type?: 'text' | 'date';
    onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Input({ label, onChange, value, type }: InputProps) {
    const inputId = `input-${Date.now()}-${Math.random()}`
    return (
         <div>
            <label htmlFor={inputId} className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input type={type || "text"} id={inputId} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={label} value={value || ''} onChange={onChange} />
        </div>
    )
}