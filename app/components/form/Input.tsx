
interface InputTextProps {
    label: string;
    id: string;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export default function InputText({ label, id, type = 'text', onChange, value }: InputTextProps) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {label}
            </label>
            <input
                id={id}
                name="name"
                type={type}
                required
                className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-black dark:text-white bg-slate-200 text-black dark:bg-opacity-50 bg-opacity-50"
                onChange={onChange}
                value={value}
                />
        </div>
    )
}