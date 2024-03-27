import { ChangeEventHandler } from "react";

export type Option = {
    label: string;
    value: string;
}

type SelectProps = {
    label: string;
    options: Option[];
    value?: string;
    onChange: ChangeEventHandler<HTMLSelectElement>
}

export default function Select({ label, value, options, onChange }: SelectProps) {

    const selectId = `select-${Date.now()}-${Math.random()}`

  return (
    <div>
      <label
        htmlFor={selectId}
        className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={selectId}
        onChange={onChange}
        value={value}
        defaultValue={
          ''
        }
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={''}>{label}</option>
        {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </div>
  );
}
