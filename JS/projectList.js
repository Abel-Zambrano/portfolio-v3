const projectList = [
  {
    id: 1,
    type: "project",
    symbol: "toshi",
    company: "Papertoshi",
    image:
      "https://res.cloudinary.com/dgbnqrc5j/image/upload/v1646186720/Experience/Papertoshi_k4a1le.png",
    location: "San Francisco, CA",
    url: "https://papertoshi.com/",
    github: "https://github.com/Abel-Zambrano/papertoshi",
    tech: ["React", "Redux", "Styled-Components", "TypeScript"],
    summary:
      "Papertoshi is a cyrpto trading simulator. It was inspired by stock trading simulators better known as “Paper Trading.” Papertoshi is designed for informative purposes by providing current crypto market data so that a user may practice trading crypto without financial risk.",
    contributions: [
      "Create an up to date market price list using the coingecko API",
      "Develop reusable componets, DRY code",
      "Establish a trading platform that uses Redux for state management and JavaScript functions to execute accurate transactions of dollar values tide to each different crypto asset",
      "Website works across all platforms(desktop, tablet and mobile)",
      "In Progess: Connect trading platform to backend and provide user profiles",
    ],
  },
];

export default projectList;
