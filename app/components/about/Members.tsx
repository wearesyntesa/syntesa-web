import { FaLinkedinIn, FaGithub,  FaUserCircle } from "react-icons/fa";

type Member = {
    name: string;
    role: string;
    urlImg: string;
    class: string;
    link: string[];
}

interface MembersProps {
    members: Member[];
}

export default function Members({ members }: MembersProps) {
    return (
        <div>
            <div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member) => (
                    <div key={member.name} className="flex sm:flex-col-reverse flex-row items-center gap-2 bg-white dark:bg-gray-800 dark:bg-opacity-25 border border-gray-300 dark:border-gray-800 rounded-xl shadow-sm">
                        <div className="sm:py-2 px-2 flex sm:flex-row flex-col sm:w-full h-full sm:border border 
                        sm:border-t-gray-300 sm:border-l-0 sm:border-r-0 sm:border-b-0 sm:h-16 items-center
                        border-t-0 border-l-0 border-r-gray-300 border-b-0
                        sm:dark:border-t-gray-800 dark:border-r-gray-800">
                            {member.link.map((link, id) => (
                                <a key={id} href={link} className="cursor-pointer sm:w-full w-8 sm:h-8 h-full justify-center items-center flex">
                                    { link.includes("linkedin") ? 
                                    <FaLinkedinIn key={link} className="text-gray-400 dark:text-gray-500 text-2xl" />
                                    :
                                    <FaGithub key={link} className="text-gray-400 dark:text-gray-500 text-2xl" />
                                    }
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 flex-1">
                            {/* <img src={member.urlImg} alt={member.name} className="w-24 h-48" /> */}
                            <FaUserCircle className="w-24 h-48 text-gray-400 dark:text-gray-500" />
                            <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">{member.name}</div>
                            <div className="text-sm font-light text-gray-600 dark:text-gray-400 text-center">Class of {member.class}</div>
                            <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 text-center">{member.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

