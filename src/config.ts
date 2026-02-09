export const config = {
    developer:{
        name: "Theodore",
        fullname: "Theodore A. Ladera",
        title: "Aspiring Software Developer | Web Developer | Applied AI Enthusiast",
    },
    social:{
        github: "Subatomi",
        email: "theodoreladera.tl@gmail.com",
        location: "Cebu, Philippines",
    },
    about:{
        title: "About Me",
        description: "I am a passionate and driven aspiring software developer with a strong interest in web development and applied AI. With a solid foundation in programming languages such as JavaScript, Python, and Java, I am eager to contribute my skills and knowledge to create solutions. I am constantly seeking opportunities to learn and grow in the field of software development, and I am excited to embark on a career that allows me to make an impact in society."
    },
    achievements:[
        {
            title: "13th TOPCIT Level III Industry Standard",
            fulltitle:"Level III Industry Standard - 13th Test of Practical Competency in IT. (TOPCIT)",
            date: "Jan 2026",
            description: "Achieved Level III Industry Standard in the 13th Test of Practical Competency in IT (TOPCIT), demonstrating a high level of proficiency and practical skills in the field of information technology and the ability to maintain TOPCIT Level III Industry Standard for 2 years."
        },

        {
            title: "AWS Cloud Architecting - Training Badge",
            fulltitle:"AWS Academy Graduate - Cloud Architecting - Training Badge", 
            date: "Sep 2025",
            description: "Achieved AWS Academy Graduate - Cloud Architecting - Training Badge, demonstrating a solid foundation in cloud computing principles and practices."
        },
        
        {
            title: "PhilNITS FE Certification",
            fulltitle:"PhilNITS Fundamental Information Technology Engineers (FE) Certification",
            date: "Nov 2025",
            description: "Achieved PhilNITS Fundamental Information Technology Engineers (FE) Certification, demonstrating a solid foundation in information technology principles and practices."
        },

        {
            title: "AWS Cloud Foundations - Training Badge",
            fulltitle:"AWS Academy Graduate - Cloud Foundations - Training Badge",
            date: "Nov 2025",
            description: "Achieved AWS Academy Graduate - Cloud Foundations - Training Badge, demonstrating a solid foundation in cloud computing principles and practices."
        },

        {
            title: "12th TOPCIT Level III Industry Standard",
            fulltitle:"Level III Industry Standard - 12th Test of Practical Competency in IT. (TOPCIT)",
            date: "Jul 2025",
            description: "Achieved Level III Industry Standard in the 12th Test of Practical Competency in IT (TOPCIT), for the first time."
        },
    ],
    projects:[
        {
            id: 1,
            title: "Probability Bomber",
            category: ["Web Development", "Gamification", "EdTech", "School Project"],
            technologies: ["React Js", "PhaserJS", "Firebase Authentication and Database", "HTML", "CSS", "Tailwind"],
            image: "", 
            description: "A Bomberman‑inspired gamified platform that teaches probability through interactive gameplay. Players solve level‑based challenges using point scoring, power‑ups, and real-time feedback, which reinforces concepts and motivates continued practice.",
            link: "",
        },
        {
            id: 2,
            title: "SkillStacker",
            category: ["Web Development", "Internship Project"],
            technologies: ["C#", ".NET 6.0", "Razor Pages", "Tailwind CSS", "Entity Framework Core", "SQL Server (SSMS)"],
            image: "",
            description: "SkillStacker is an admin-side C# web application built for Alliance Software Inc.'s Summer Bridge Program. It provides administrators with CRUD management for users, training categories, trainings, and training topics. The project uses .NET 6.0 with Razor Pages for UI, Tailwind for styling, Entity Framework Core for data access, and SQL Server (SSMS) for the database. Key features include login, password reset/change, user master screens (list/add/edit/delete/view), training category management, trainings and topic management (list/add/edit/delete/view), search and view training, and training rating. Scope: admin-side only, implemented per provided functional specifications.",
            link: "",
        },
        {
            id: 3,
            title: "Litterbox",
            category: ["Web Development", "School Project"],
            technologies: ["Django", "Python", "Tailwind CSS", "SQLite", "JavaScript", "TinyMCE", "FullCalendar"],
            image: "",
            description: "Litterbox is a student blog management system that empowers students to create, share, and interact through blog posts. Core features include secure user authentication (register, login, email verification, password reset), profile management, full CRUD for posts with categories and tags, search/filter/sort, commenting with replies and likes, calendar events and reminders, and admin tools for moderation.",
            link: "",
        },
        
        {
            id: 4,
            title: "Space Horizon",
            category: ["Game", "School Project"],
            technologies: ["Java"],
            image: "",
            description: "A retro-style Java shooting game inspired by classic Air Force arcade titles. Players face waves of enemies by shooting and dodging enemy attacks",
            link: "",
        },
        
        {
            id: 5,
            title: "BuriedBornes",
            category: ["Game", "School Project"],
            technologies: ["Java"],
            image: "",
            description: "A Java-only game RPG inspired by BuriedBornes: a turn-based game where players battle enemies endlessly until they exit or their character dies.",
            link: "",
        },
        {
            id: 6,
            title: "TechnoSpace",
            category: ["Web Development", "School Project"],
            technologies: ["ASP.NET", "ReactJS", "Azure", "MySQL", "HTML", "CSS", "Tailwind", "Bootstrap"],
            image: "",
            description: "A dedicated online marketplace for students and faculty of Cebu Institute of Technology–University. Users can post items, browse listings, negotiate prices, and manage transactions within a trusted campus community. Features include product categorization, user authentication, responsive design, and a focus on sustainable reuse of items.",
            link: "",
        }
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