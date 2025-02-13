interface FileUploaderProps {
    label: string;
    id: string;
    description: string;
    file: File | null;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileUploader({ label, id, description, file, onChange }: FileUploaderProps) {
    const renderPdf = (file: File | null) => {
        if (!file) return null;
        const url = URL.createObjectURL(file);
        return (
            <iframe
                src={url}
                className="w-full h-64 mt-4 border border-gray-300 rounded-md shadow-sm"
                title="PDF Preview"
            />
        );
    };
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            {label}
            </label>
            <label htmlFor={id} className="text-sm text-gray-600 dark:text-gray-400 py-3 px-2 w-full cursor-pointer bg-slate-200 bg-opacity-50 dark:bg-black dark:bg-opacity-50 rounded-md">
                {file ? file.name : description}
            </label>
            <input
                id={id}
                name={id}
                type="file"
                accept=".pdf"
                required
                className="hidden"
                onChange={onChange}
            />
            {renderPdf(file)}
        </div>
    )
}