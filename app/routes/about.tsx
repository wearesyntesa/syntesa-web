import Members from "~/components/about/Members";
import Layout from "~/components/Layout";
import { members } from "~/constants/index_contents";

export default function About() {
    return (
        <Layout>
            <div className="min-h-[70vh] pt-20 bg-gradient-to-br from-gray-50/80 via-white to-gray-50/80
                dark:from-black dark:via-gray-900 dark:to-black ">
                <div className="max-w-6xl mx-auto px-6">
                    {/* <h1 className="text-4xl font-bold text-gray-900 dark:text-white">About</h1> */}

                    <article className="mt-8 flex flex-col md:flex-row space-y-4 items-center md:space-y-0 md:space-x-4">
                        <div className="flex-none md:w-80 w-64 bg-slate-300 rounded-lg">
                            <img
                                src="/images/logo.jpg"
                                alt="Syntesa Logo"
                                className="w-full md:h-80 h-64 object-cover rounded-md shadow-sm"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">We are Syntesa</h2>
                            <p className="text-gray-600 dark:text-gray-300 pt-4">
                                Syntesa is a community of students who are passionate about technology and innovation. We aim to provide a platform for students to learn and grow together. We believe that by sharing knowledge and experiences, we can create a better future. <br/>
                                
                            </p>
                        </div>
                    </article>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Laboratory Assistant</h2>
                        <Members members={members}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}