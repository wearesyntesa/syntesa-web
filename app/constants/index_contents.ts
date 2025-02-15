import { FaAws, FaMicrosoft } from "react-icons/fa";
import { HiChartBar, HiCode, HiCog, HiServer } from "react-icons/hi";
import { SiDatacamp, SiGooglecloud, SiJunipernetworks, SiRedhat } from "react-icons/si";
import { TypePartner } from "~/components/home/Partners";
import { TypeProject } from "~/components/home/Projects";
import { TypeStudyClub } from "~/components/home/StudyClubs";

export const studyClubs: TypeStudyClub[] = [
    {
        name: "Web Development",
        description: "Master modern web development technologies and build responsive, scalable applications. Learn from industry and work on real-world projects.",
        icon: HiCode
    },
    {
        name: "Data Science",
        description: "Dive into the world of data science, machine learning, and artificial intelligence. Transform raw data into meaningful insights and solutions.",
        icon: HiChartBar
    },
    {
        name: "DevOps",
        description: "Learn to bridge the gap between development and operations. Master continuous integration, deployment, and modern cloud infrastructure.",
        icon: HiServer
    },
    {
        name: "System Administration",
        description: "Develop expertise in managing and securing computer systems and networks. Learn essential skills for modern IT infrastructure.",
        icon: HiCog
    }
];


export const getClubDetails = (clubName: string) => {
    const details = {
        "Web Development": [
            "Frontend & Backend Development",
            "React, Node.js, and Modern Frameworks",
            "UI/UX Design Principles",
            "API Development & Integration"
        ],
        "Data Science": [
            "Machine Learning & AI",
            "Data Analysis & Visualization",
            "Python & R Programming",
            "Big Data Technologies"
        ],
        "DevOps": [
            "CI/CD Pipeline Implementation",
            "Docker & Kubernetes",
            "Cloud Services (AWS, GCP, Azure)",
            "Infrastructure as Code"
        ],
        "System Administration": [
            "Network Configuration & Security",
            "Server Management",
            "Linux Administration",
            "Monitoring & Troubleshooting"
        ]
    };
    return details[clubName as keyof typeof details];
};

export const getClubSchedule = (clubName: string) => {
    const schedules = {
        "Web Development": "Meets every Tuesday & Thursday",
        "Data Science": "Meets every Monday & Wednesday",
        "DevOps": "Meets every Wednesday & Friday",
        "System Administration": "Meets every Monday & Thursday"
    };
    return schedules[clubName as keyof typeof schedules];
};

export const latestProjects: TypeProject[] = [
    {
        title: "AI-Powered Traffic Management",
        description: "Developing intelligent systems for optimizing urban traffic flow",
        status: "Ongoing" as const,
        progress: 75,
    },
    {
        title: "Smart Campus Initiative",
        description: "Creating an IoT-based infrastructure for campus automation",
        status: "Completed" as const,
        progress: 100,
    },
    {
        title: "Blockchain for Education",
        description: "Implementing secure credential verification system",
        status: "Planning" as const,
        progress: 25,
    }
];

export const partnerships: TypePartner[] = [
    {
        name: "DataCamp",
        icon: SiDatacamp,
        description: "Official learning partner for data science education",
        category: "Education"
    },
    {
        name: "Juniper Networks",
        icon: SiJunipernetworks,
        description: "Infrastructure and networking solutions partner",
        category: "Infrastructure"
    },
    {
        name: "Red Hat",
        icon: SiRedhat,
        description: "Open source and cloud technology partner",
        category: "Technology"
    },
    {
        name: "Microsoft",
        icon: FaMicrosoft,
        description: "Cloud and development tools partner",
        category: "Technology"
    },
    {
        name: "AWS",
        icon: FaAws,
        description: "Cloud infrastructure partner",
        category: "Infrastructure"
    },
    {
        name: "Google Cloud",
        icon: SiGooglecloud,
        description: "Cloud and AI technology partner",
        category: "Technology"
    }
];

export const members = [
    {
        name: "Muhammad Istiqlal",
        role: "Cloud Engineer",
        urlImg: "/avatars/istiqlal.jpg",
        class: "2022",
        link: ["https://linkedin.com/in/",""]
    },
    {
        name: "Yunus Dhanzky Handitra",
        role: "Software Engineer",
        urlImg: "/avatars/yunus.jpg",
        class: "2022",
        link: ["https://linkedin.com/in/",""]
    },
    {
        name: "Ahmd Mufahras Li Alfazh Assardew",
        role: "Software Engineer",
        urlImg: "/avatars/mufahras.jpg",
        class: "2022",
        link: ["https://linkedin.com/in/",""]
    },
    {
        name: "Helmy Luqmanulhakim",
        role: "Data Science",
        urlImg: "/avatars/helmy.jpg",
        class: "2022",
        link: ["https://linkedin.com/in/",""]
    },
    {
        name: "Naufal Farras Pratama",
        role: "Data Science",
        urlImg: "/avatars/naufal.jpg",
        class: "2022",
        link: ["https://linkedin.com/in/",""]
    },
    {
        name: "Dyan Dananjaya Tejo Pamungkas",
        role: "Software Engineer",
        urlImg: "/avatars/dyan.jpg",
        class: "2022",
        link: ["https://linkedin.com/in/",""]
    },
    {
        name: "Vincent Louis Fernando",
        role: "Software Engineer",
        urlImg: "/avatars/vincent.jpg",
        class: "2022",
        link: ["https://linkedin.com/in/",""]
    },
    {
        name: "Rayhan Ramadhani Hendra Atmadja",
        role: "Software Engineer",
        urlImg: "/avatars/rayhan.jpg",
        class: "2023",
        link: ["https://linkedin.com/in/",""]
    },
    {
        name: "Cornelius Louis Nathan",
        role: "Software Engineer",
        urlImg: "/avatars/nathan.jpg",
        class: "2023",
        link: ["https://linkedin.com/in/",""]
    },
    {
        name: "Muhammad Raffi Akhdilputra",
        role: "Data Science",
        urlImg: "/avatars/raffi.jpg",
        class: "2023",
        link: ["https://linkedin.com/in/",""]
    },
    {
        name: "Muhammad Nur Azhar Dhiyaulhaq",
        role: "Cloud Engineer",
        urlImg: "/avatars/azhar.jpg",
        class: "2023",
        link: ["https://linkedin.com/in/",""]
    },
    {
        name: "Afrizal Lutfi Eka Arnatha",
        role: "Data Science",
        urlImg: "/avatars/afrizal.jpg",
        class: "2023",
        link: ["https://linkedin.com/in/",""]
    },
]