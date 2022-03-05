const experienceList = [
  {
    id: 1,
    symbol: "hfla",
    company: "Hack for LA",
    image:
      "https://res.cloudinary.com/dgbnqrc5j/image/upload/v1646186721/Experience/HackforLA_j4shyf.png",
    location: "Los Angeles, CA",
    url: "https://www.hackforla.org",
    github: "https://github.com/Abel-Zambrano/website",
    tech: ["JavaScript", "Jekyll", "Docker", "SASS", "HTML", "CSS"],
    summary:
      "Hack for LA is volunteer organization that builds digital products, programs and services with community partners and local government to address issues in the Los Angeles region.",
    contributions: [
      "Develop a JavaScript parser to update a search filter header with proper title. There was a conflict with parsed HTML attributes that had spaces and this saved time for redeveloping an entire dynamic page",
      "Restructered website layout so that all pages have a fixed footer positioned to the bottom of the page and to have a consistent look for the page footer no matter the width of the page (all breakpoints)",
      "Review Pull Requests and assure changes are correct and provide solutions",
      "Convert Figma designs into pixel-perfect HTML and CSS",
      "Improved website mobile view by making changes with SASS variables",
    ],
  },
  {
    id: 2,
    symbol: "aovfe",
    company: "Army of Volunteers for Earth",
    image:
      "https://res.cloudinary.com/dgbnqrc5j/image/upload/v1646186721/Experience/ArmyofVolunteers_weuimm.png",
    location: "San Jose, CA",
    url: "https://armyofvolunteers.org/",
    github: null,
    tech: ["Wordpress", "Elementor", "Google Forms", "HTML", "CSS"],
    summary:
      "Army of Volunteers for Earth is non-profit organization that operates worldwide. Their mission is to combat climate change and develop a global marketing network for climate friendly products and technologies.",
    contributions: [
      "Improved website UI design by coding HTML and CSS edits to meet deadlines",
      "Added Kanban for project tracking and agile development",
      "Improved responsive web design for cross-browser compatibility",
      "Communicate with the President of the organization and web team for website improvements and developing documentation for simple web edits for new users",
      "Integrated SSL Certificate and tested for mixed content, fixed 100% of errors",
    ],
  },
  {
    id: 3,
    symbol: "anjs",
    company: "AN Janitorial Services",
    image:
      "https://res.cloudinary.com/dgbnqrc5j/image/upload/v1646186720/Experience/ANJanitorial_pwght0.png",
    location: "San Leandro, CA",
    url: "https://www.anjanitorialservice.com/",
    github: "https://github.com/Abel-Zambrano/an-janitorial-service",
    tech: ["React", "JavaScript", "EmailJS", "SASS", "HTML", "CSS"],
    summary:
      "AN Janitorial Service is a private owned businees that services the San Francisco Bay Area region. They provide janitorial servies in the resedinetal and commerial sector.",
    contributions: [
      "Develop an email form using emailjs, emails are submitted directly to the owner.",
      "Improved site speed performance by using and Gatsby Image component",
      "Redeveloped website styling with best practice. Converted CSS to SASS to reduce 20% of front-end styling code",
      "Created reusable code and used JavaScript to display content from arrays",
    ],
  },
];

export default experienceList;
