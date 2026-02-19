export const config = {
    developer:{
        name: "Theodore",   
        fullname: "THEODORE A. LADERA",
        title: "Aspiring Software Developer | Web Developer | Applied AI Enthusiast",
    },
    social:{
        github: "Subatomi",
        email: "theodoreladera.tl@gmail.com",
        location: "Cebu, Philippines",
    },
    about:{
        position: "Computer Science Student",
        workplace: "Cebu Institute of Technology - University",
        description: "I’m focused on building real-world software while continuously improving my skills in full-stack development, machine learning, and modern software engineering."
    },
    achievements:[
        {
            id: 5,
            title: "13th TOPCIT Level III Industry Standard",
            fulltitle:"Level III Industry Standard - 13th Test of Practical Competency in IT. (TOPCIT)",
            month: "January",
            year: "2026",
            description: "Maintained my Level III Industry Standard in the 13th Test of Practical Competency in IT (TOPCIT)",
            link:"https://drive.google.com/file/d/1sxfdRIqtrjRifCVFlqXl75iTwsl4COvv/view?usp=sharing",
        },

        {
            id: 4,
            title: "AWS Cloud Architecting - Training Badge",
            fulltitle:"AWS Academy Graduate - Cloud Architecting - Training Badge", 
            month: "September",
            year: "2025",
            description: "Achieved AWS Academy Graduate - Cloud Architecting - Training Badge, demonstrating a solid foundation in cloud computing architecting and practices.",
            link:"https://www.credly.com/badges/b5cc6e6f-0196-4eb5-9c26-bd9b92b5993d",
        },
        
        {
            id: 3,
            title: "PhilNITS FE Certification",
            fulltitle:"PhilNITS Fundamental Information Technology Engineers (FE) Certification",
            month: "November",
            year: "2025",
            description: "Achieved PhilNITS Fundamental Information Technology Engineers (FE) Certification, demonstrating a solid foundation in information technology principles and practices.",
            link:"https://philnits.org/passers-fe/",
        },

        {
            id: 2,
            title: "AWS Cloud Foundations - Training Badge",
            fulltitle:"AWS Academy Graduate - Cloud Foundations - Training Badge",
            month: "November",
            year: "2025",
            description: "Achieved AWS Academy Graduate - Cloud Foundations - Training Badge, demonstrating a solid foundation in cloud.",
            link:"https://www.credly.com/badges/80c70c2f-7c1d-4f2a-8b3e-5b8e5b8e5b8e",
        },

        {
            id: 1,
            title: "12th TOPCIT Level III Industry Standard",
            fulltitle:"Level III Industry Standard - 12th Test of Practical Competency in IT. (TOPCIT)",
            month: "July",
            year: "2025",
            description: "Achieved Level III Industry Standard in the 12th Test of Practical Competency in IT (TOPCIT), for the first time.",
            link:"https://drive.google.com/file/d/1R7wMBxSsj3RPUcP1Qpf2wKSpwiTrCXHt/view?usp=sharing",
        },
    ],
    projects:[
        {
            
            id: 7,
            title: "Portfolio Website",
            category: ["Web Development / Personal Project"],
            technologies: ["Vite", "React", "TypeScript", "Tailwind CSS", "PhaserJS", "Firebase Authentication & Realtime Database", "Vercel"],
            image: [
                "./assets/works-images/p_1.png",
                "./assets/works-images/p_2.png",
                "./assets/works-images/p_3.png",
                "./assets/works-images/p_4.png",
            ],      
            description: "Personal portfolio website built with React and Vite. Showcases projects, interactive demos (PhaserJS), and a responsive, accessible UI. Includes animated reveals, image lightbox, client-side routing, and contact links. Deployed on Vercel.",
            link: "",
            repoLink: ["https://github.com/Subatomi/subatomi-portfolio"],
        },
        {
            id: 6,
            title: "Probability Bomber",
            category: ["Web Development / Gamification / EdTech"],
            technologies: ["React Js", "PhaserJS", "Firebase Authentication and Database", "HTML", "CSS", "Tailwind"],
            image: [
                "./assets/works-images/pb_bomber_1.png",
                "./assets/works-images/pb_bomber_2.png", 
                "./assets/works-images/pb_bomber_3.png",
                "./assets/works-images/pb_bomber_4.png", 
                "./assets/works-images/pb_bomber_5.png",
            ],
            description: "A Bomberman‑inspired platform that teaches probability through interactive, level-based gameplay. Players solve challenges using point scoring and power-ups. Real-time feedback reinforces concepts and motivates practice.",
            link: "https://probabilitybomberfrontend.onrender.com",
            repoLink: ["https://github.com/zyle-geralde/ProbabilityBomberFrontEnd", "https://github.com/avrilnigelchua0412/Probability-Bomber-Backend"],
        },
        {
            id: 5,
            title: "SkillStacker",
            category: ["Web Development / Internship Project"],
            technologies: ["C#", ".NET 6.0", "Razor Pages", "Tailwind CSS", "Entity Framework Core", "SQL Server (SSMS)"],
            image: [
                "./assets/works-images/ss_1.png",
                "./assets/works-images/ss_2.png",
                "./assets/works-images/ss_3.png",
                "./assets/works-images/ss_4.png",
                "./assets/works-images/ss_5.png",
            ],
            description: "An admin-side web app for managing users, trainings and categories. Built with C#, .NET 6, Razor Pages and Tailwind. Provides CRUD interfaces and admin workflows for training management.",
            link: "",
            repoLink: ["Privated"],
        },
        {
            id: 4,
            title: "Litterbox",
            category: ["Web Development / School Project"],
            technologies: ["Django", "Python", "Tailwind CSS", "SQLite", "JavaScript", "TinyMCE", "FullCalendar"],
            image: [
                "./assets/works-images/lb.gif",
            ],
            description: "A student blog platform for creating, sharing and interacting through posts. Includes authentication, profile management, and full CRUD for posts with categories and tags. Supports comments, search and calendar events.",
            link: "",
            repoLink: ["https://github.com/rei-naissance/Litterbox"],
        },
        
        {
            id: 3,
            title: "TechnoSpace",
            category: ["Web Development / School Project"],
            technologies: ["ASP.NET", "ReactJS", "Azure", "MySQL", "HTML", "CSS", "Tailwind", "Bootstrap"],
            image: [
                "./assets/works-images/ts_1.png",
                "./assets/works-images/ts_2.png",
                "./assets/works-images/ts_3.png",
                "./assets/works-images/ts_4.png",
                "./assets/works-images/ts_5.png",
                "./assets/works-images/ts_6.png",
                "./assets/works-images/ts_7.png",
            ],
            description: "An online marketplace for students and faculty to buy and sell campus items. Features user authentication, product categorization and responsive design. Focuses on sustainable reuse within the campus community.",
            link: "",
            repoLink: ["https://github.com/zyle-geralde/TechnoSpaceFrontEnd", "Privated"],
        },
        
        {
            id: 2,
            title: "Space Horizon",
            category: ["Game / School Project"],
            technologies: ["Java"],
            image: [
                "./assets/works-images/sh_1.png",
                "./assets/works-images/sh_2.png",
                "./assets/works-images/sh_3.png",
            ],
            description: "A retro-style Java shooting game inspired by classic Air Force arcade titles. Players face waves of enemies by shooting and dodging enemy attacks",
            link: "",
            repoLink: ["Privated"],
        },
        
        {
            id: 1,
            title: "BuriedBornes",
            category: ["Game / School Project"],
            technologies: ["Java"],
            image: [
                "./assets/works-images/bb_1.png",
                "./assets/works-images/bb_2.png",
                "./assets/works-images/bb_3.png",
            ],
            description: "A Java RPG inspired by BuriedBornes with turn-based combat. Players battle enemies and progress until exit or defeat. Focuses on endless combat mechanics and progression.",
            link: "",
            repoLink: ["https://github.com/MeepMe3p/BuriedBornes-Capstone-CSIT227-F2"],
        },
    ],
    contact:{
        email: "theodoreladera.tl@gmail.com",
        number: "+63 947 249 9484",
        linkedin: "https://www.linkedin.com/in/theodore-ladera-954bbb358/",
        github: "https://github.com/Subatomi",
    },
    skills: {
         roles: {
            fullstack: {
                title: "Aspiring Full-Stack Developer",
                tagline: "End-to-end web apps & responsive UIs",
                description: "Designs and implements backend services, data models, deployments, and responsive frontends. Focuses on integrating frontend frameworks with databases and cloud platforms while ensuring accessibility and performance.",
                projects: ["SkillStacker", "TechnoSpace", "Litterbox", "Probability Bomber"],
                tools: ["C#/.NET", "Node.js", "React", "TypeScript", "SQL", "Azure", "Docker", "REST APIs", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "JavaScript"]
            },
            appliedAI: {
                title: "Applied AI Enthusiast",
                tagline: "ML and LLM prototyping",
                description: "Prototypes machine learning and LLM features, builds data pipelines, and integrates AI into products.",
            }
        }
    }
}