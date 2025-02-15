import { useState } from "react";
import Layout from "~/components/Layout";
import { Link } from "@remix-run/react";
import InputText from "~/components/form/Input";
import DropDown from "~/components/form/DropDown";
import FileUploader from "~/components/form/FileUploader";

export default function Programs() {

    const [name, setName] = useState('');
    const [nim, setNim] = useState('');
    const [prodi, setProdi] = useState('');
    const [email, setEmail] = useState('');
    const [kelas, setKelas] = useState('');
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [transkripFile, setTranskripFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [isTrueData, setIsTrueData] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: React.Dispatch<React.SetStateAction<File | null>>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isTrueData) return;
        setLoading(true);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('nim', nim);
        formData.append('prodi', prodi);
        formData.append('email', email);
        formData.append('kelas', kelas);
        formData.append('cv', cvFile as Blob);
        formData.append('transkrip', transkripFile as Blob);


        // send form data to server

        // set isSubmitted to true if completed
        setIsSubmitted(true);

    
        console.log(formData.get('kelas'));
        setLoading(false);
    }

    const kelasOptions = [
        "2024A",
        "2024B",
        "2024C",
        "2024D",
        "2024E",
        "2024F",
        "2024G",
    ]

    const prodiOptions = [
        "Teknik Informatika",
        "Sistem Informasi",
        "Pendidikan Teknologi Informasi",
    ]


    return (
        <Layout>
            <div className="min-h-[70vh] pt-20 bg-gradient-to-br from-gray-50/80 via-white to-gray-50/80
                dark:from-black dark:via-gray-900 dark:to-black pb-24">
                { isSubmitted ? (
                    <div className="h-[70vh] max-w-6xl mx-auto p-6 flex flex-col justify-center items-center" role="alert">
                        <p className="font-bold">Application submitted!</p>
                        <p>We will contact you via email if you are accepted.</p>
                        <Link to="/" className="mt-4 text-blue-500 hover:underline">Back to Home</Link>
                    </div>                        
                ) : (
                    <div className="max-w-6xl mx-auto p-6">
                        <div className="mt-8 p-12">
                            <form className="space-y-6 max-w-xl mx-auto"
                                onSubmit={handleSubmit}>
                                <div>
                                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Apply</h1>
                                    <p className="text-gray-600 dark:text-gray-300 pt-4">
                                        Fill in the form below to apply for the program. Make sure to provide accurate information. We will contact you via email if you are accepted.
                                    </p>
                                </div>
                                <InputText
                                    label="Name"
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    />
                                <InputText
                                    label="Email"
                                    id="email"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    />
                                <InputText
                                    label="NIM"
                                    id="nim"
                                    type="number"
                                    onChange={(e) => setNim(e.target.value)}
                                    value={nim}
                                    />
                                <DropDown
                                    label="Prodi"
                                    id="prodi"
                                    options={prodiOptions}
                                    onChange={(e) => setProdi(e.target.value)}
                                    value={prodi}
                                    />
                                
                                <DropDown
                                    label="Kelas"
                                    id="kelas"
                                    options={kelasOptions}
                                    onChange={(e) => setKelas(e.target.value)}
                                    value={kelas}
                                    />

                                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                                    <FileUploader
                                        label="CV"
                                        id="cv"
                                        description="Upload your CV here"
                                        file={cvFile}
                                        onChange={(e) => handleFileChange(e, setCvFile)}
                                    />

                                    <FileUploader
                                        label="Transkrip"
                                        id="transkrip"
                                        description="Upload your transcript here"
                                        file={transkripFile}
                                        onChange={(e) => handleFileChange(e, setTranskripFile)}
                                    />
                                </div>

                                <div className="flex">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        name="terms"
                                        required
                                        className="mr-2"
                                        onChange={(e) => setIsTrueData(e.target.checked)}
                                    />
                                    <p>
                                        I declare that the information provided is true and accurate.
                                    </p>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className={`w-full flex justify-center py-2 px-4 border font-bold border-gray-300 dark:border-gray-400 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500  text-black ${isTrueData ? 'cursor-pointer hover:bg-slate-200 bg-white' : 'cursor-not-allowed text-gray-400 dark:text-gray-500'}`}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}