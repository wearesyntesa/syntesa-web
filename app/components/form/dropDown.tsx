interface DropDownProps {
    label: string;
    id: string;
    options: Array<string>;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
}

export default function DropDown({ label, id, options, onChange, value }: DropDownProps) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {label}
            </label>
            <select id={id} name={id} required
                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-black dark:text-white bg-slate-200 text-black dark:bg-opacity-50 bg-opacity-50"
                onChange={onChange}
                value={value}>
                <option value="">Select Prodi</option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
        </div>
    )
}