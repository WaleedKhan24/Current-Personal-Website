import {
    react,
    reactNative,
    nextjs,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    dspot,
    urbanblooms,
    timhortons,
    git,
    figma,
    threejs,
    project1,
    project2,
    me,
    CV_Duncan,
    
} from "../assets"

export const CVDuncan = CV_Duncan

export const myGithub = "https://github.com/WaleedKhan24"

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "cv",
        title: "Résume",
    },

    {
        id: "contact",
        title: "Contact",
    },
]

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "UI & UX Developer",
        icon: react,
    },
    {
        title: "Full-Stack Developer",
        icon: reactNative,
    },
    {
        title: "Software Developer",
        icon: nextjs,
    },
]

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
]

const experiences = [
   
    {
        title: "Full-stack Developer",
        company_name: "The Urban Blooms",
        icon: urbanblooms,
        iconBg: "#E6DEDD",
        date: "Jan 2022 - Aug 2022",
        points: [
            "Development of non-commercial website projects using HTML5, CSS3 (SCSS) and JavaScript (JS , React, NextJS, Expo React Native) technologies.",
        ],
    },
    {
        title: "Supervisor",
        company_name: "DSpot Dessert Café",
        icon: dspot,
        iconBg: "#E6DEDD",
        date: "May 2022 - Present",
        points: [
            "Development of non-commercial projects of server applications using JavaScript (NodeJS), Web project assembly tools (Webpack), databases (SQLite) and the HTTP network protocol.",
        ],
    },
    {
        title: "Restaurant Crew Member",
        company_name: "Tim Hortons",
        icon: timhortons,
        iconBg: "#E6DEDD",
        date: "October 2021 - October 2022",
        points: [
            "Development of non-commercial web application projects using TypeScript, NestJS.",
        ],
    },
]

const myWords = [
    {
        text: "Here you can download my Resumé by clicking on the Download button. Looking forward to our collaboration.",
        name: "Waleed Khan",
        designation: "Student",
        company: "University Waterloo",
        image: me,
    },
]

const projects = [
    {
        name: "SavantAI",
        description:
            "AI powered web application that allows users to communicate with an advanced GPT3 model API through an elegant and user-friendly interface",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: project1,
        source_code_link: "https://github.com/WaleedKhan24/SavantAI",
    },
    {
        name: "Feedback Form",
        description:
            "Feedback form used Python on the back-end with a publish to Heroku as an online webpage and used HTML and CSS on the front-end for UI/UX.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "Flask",
                color: "green-text-gradient",
            },
            {
                name: "SQLalchemy",
                color: "pink-text-gradient",
            },
        ],
        image: project2,
        source_code_link: "https://github.com/WaleedKhan24/theurbanblooms-Feedback-Form",
    },
   
   
]

export { services, technologies, experiences, myWords, projects }