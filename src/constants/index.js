import {
    awsccp,
    awsccp_pdf,
    rwdd,
    jsads,
    javascript,
    html,
    css,
    java,
    cpp,
    agile,
    aws,
    mysql,
    sql,
    reactjs,
    nextjs,
    nodejs,
    mongodb,
    git,
    ozmo,
    attentionassistant,
    techblog,
    quotemachine,
    jscalculator,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About'
    },
    {
        id: 'experience',
        title: 'Experience'
    },
    {
      id: 'projects',
      title: 'Projects'
    },
    {
        id: 'contact',
        title: 'Contact'
    },
];

const services = [
  {
    title: "AWS Certified Cloud Practitioner",
    icon: awsccp,
    hasLink: true,
    link: awsccp_pdf
  },
  {
    title: "Responsive Web Design Developer",
    icon: rwdd,
    hasLink: true,
    link: "https://www.freecodecamp.org/certification/ehols001/responsive-web-design"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    icon: jsads,
    hasLink: true,
    link: "https://www.freecodecamp.org/certification/ehols001/javascript-algorithms-and-data-structures"
  }
];

const skills = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C++",
      icon: cpp,
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
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Agile",
      icon: agile,
    },
  ];
  
  const experiences = [
    {
      title: "Senior Content Developer",
      company_name: "Ozmo Inc.",
      icon: ozmo,
      iconBg: "#fff",
      date: "February 2020 - May 2021",
      points: [
        "Designed and implemented interactive self-support XML emulators.",
        "Led small cross-functional teams, managing workloads and delegating tasks to ensure project deadlines were met",
        "Managed project version control and build automation using a Content Management System, SVN, and Jenkins",
        "Developed training exercises and continuously improved best practices for quality assurance as a member of the Quality Assurance team.",
        "Mentor for many new content developers.",
        "Leveraged JSON, Jira, and Agile."
      ],
    },
    {
      title: "Mid Content Developer",
      company_name: "Ozmo Inc.",
      icon: ozmo,
      iconBg: "#fff",
      date: "May 2019 - February 2020",
      points: [
        "Designed and implemented interactive self-support XML emulators.",
        "Developed training exercises and continuously improved best practices for quality assurance as a member of the Quality Assurance team.",
        "Leveraged JSON, Jira, and Agile."
      ],
    },
    {
      title: "Associate Content Developer",
      company_name: "Ozmo Inc.",
      icon: ozmo,
      iconBg: "#fff",
      date: "July 2018 - May 2019",
      points: [
        "Designed and implemented interactive self-support XML emulators.",
        "Leveraged JSON, Jira, and Agile."
      ],
    },
  ];

  const projects = [
    {
      name: "Attention Assistant",
      description:
        "Organizational Java desktop application meant to help adolescents with ADHD stay focused. This application was developed by myself and six others for our senior project.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "sqlite",
          color: "green-text-gradient",
        },
        {
          name: "opencv",
          color: "pink-text-gradient",
        },
        {
          name: "gradle",
          color: "orange-text-gradient",
        },
        {
          name: "jtest",
          color: "blue-text-gradient",
        },
      ],
      image: attentionassistant,
      project_link: "https://www.cs.odu.edu/~cpi/old/411/coppers22/",
      source_code_link: "https://github.com/ehols001/AttentionAssistant",
    },
    {
      name: "Educational Tech Blog",
      description:
        "A personal tech blog that contains various how-to and informational posts about different technologies.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "vercel",
          color: "green-text-gradient",
        },
      ],
      image: techblog,
      project_link: "https://nextjs-blog-ehols001.vercel.app/",
      source_code_link: "https://github.com/ehols001/nextjs-blog",
    },
    {
      name: "Random Quote Machine",
      description:
        "A quote machine using javascript and react that allows you to cycle through random quotes and tweet them directly to your twitter account.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        },
      ],
      image: quotemachine,
      project_link: "http://evanholsterrqm.com.s3-website-us-east-1.amazonaws.com/",
      source_code_link: "https://github.com/ehols001/Random-Quote-Machine",
    },
    {
      name: "JavaScript Calculator",
      description:
        "The title says it all for this one; a javascript calculator with basic calculator functionality.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        },
      ],
      image: jscalculator,
      project_link: "http://evanholsterjscalc.com.s3-website-us-east-1.amazonaws.com/",
      source_code_link: "https://github.com/ehols001/JavaScript-Calculator",
    },
  ];

  export { services, skills, experiences, projects }