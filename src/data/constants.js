import quacker from '../images/quacker.png';
import mail from '../images/mail.png';
import commerce from '../images/commerce.png';
import weather from '../images/weather.png';
import portfolio from '../images/portfolio.png';
import blackjack from '../images/blackjack.png';
import tictactoe from '../images/tictactoe.png';
import finance from '../images/finance.png';
import resume from './Raiyan-Khan-Resume.pdf';

export const Bio = {
  name: "Raiyan Khan",
  roles: [
    "an Aspiring Developer",
    "a Passionate Learner",
    "a Problem Solver",
    "a Tech Enthusiast",
  ],
  description:
    "I am a second-year Computer Engineering Student at the University of British Columbia in Vancouver, BC. I am passionate about learning new technologies and building projects that can help people in their day-to-day lives. To learm more about me, just keep scrolling!",
  github: "https://github.com/raiyan-2002",
  resume:
    `${resume}`,
  linkedin: "https://www.linkedin.com/in/raiyan02/",
};

export const skills = [
  {
    title: "Languages",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Java",
        image:
        "https://www.vectorlogo.zone/logos/java/java-icon.svg",
      },
      {
        name: "C",
        image:
        "https://cdn.worldvectorlogo.com/logos/c-1.svg",
      },
      {
        name: "C++",
        image:
        "https://cdn.worldvectorlogo.com/logos/c.svg",
      },
      {
        name: "SQL",
        image:
        "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "Verilog",
        image:
          "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/verilog.png",
      },
      {
        name: "ARM v7",
        image:
          "https://cdn.worldvectorlogo.com/logos/arm-26082.svg",
      },
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      {
        name: "React JS",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Node JS",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "React Bootstrap",
        image:
          "https://icon.icepanel.io/Technology/svg/React-Bootstrap.svg",
      },
      {
        name: "Django",
        image:
          "https://www.svgrepo.com/show/305963/django.svg",
      },
      {
        name: "Flask",
        image:
          "https://cdn.worldvectorlogo.com/logos/flask.svg",
      },

    ],
  },

  {
    title: "Other Tools",
    skills: [
      {
        name: "Git",
        image:
          "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
      },
      {
        name: "IntelliJ",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1024px-IntelliJ_IDEA_Icon.svg.png",
      },
      {
        name: "Arduino",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/2560px-Arduino_Logo.svg.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
    ],
  },
];

export const projects = [
  {
    id: 2,
    title: "Quacker",
    date: "August 2023",
    description:
      "This is a Twitter clone that I built using Django, Python and JavaScript. Users can post \"Quacks\", like other posts, and follow other users. This project gave me valuable insight on how to use asynchonous API calls from the front-end to the back-end to update Django models which store data pertaining to users and their posts.",
    image:
      `${quacker}`,
    tags: [
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "Django",
      "Bootstrap",
    ],
    category: "web app",
    github: "https://github.com/raiyan-2002/Quacker",
  },
  {
    id: 0,
    title: "Stock Trading Simulator",
    date: "May 2023",
    description:
      "This stock trading platform allows users to buy and sell stock shares, and look up their market values in real time! I developed this using the Flask framework in Python, and a SQL database to store user information. It's a great way to simluate stock trading without any risk!",
    image:
      `${finance}`,
    tags: [
      "Python",
      "SQL",
      "Flask",
      "HTML",
      "CSS",
      "APIs"
    ],
    category: "web app",
    github: "https://github.com/raiyan-2002/Finance",
  },
  {
    id: 7,
    title: "Internet of Things (IoT) Data Analytics",
    date: "November 2023 - December 2023",
    description:
      "This project designed the back-end of an Internet of Things (IoT) server, which simulates sending data from switches and sensors to a server, to which clients can send data analytics and configuration requests to. The server was designed using the java.net library, and can serve multiple clients concurrently.",
    image:
    "https://news.mit.edu/sites/default/files/images/202011/MIT-Tiny-AI-01.jpg",
    tags: ["Java", "Network Programming"],
    category: "network",
    github: "https://github.com/raiyan-2002/IOT",
  },
  {
    id: 9,
    title: "Personal Portfolio Website",
    date: "December 2023 - January 2024",
    description:
      "This project was built using React, and it helped me grasp the fundamentals of the library. The goal of this project was to make an aesthetically pleasing portfolio which had all of my projects and skills in the same place. (If it wasn't abundantly clear, this is the website you are on right now).",
    image:
    `${portfolio}`,
    tags: ["JavaScript", "React JS", "HTML", "CSS", "React Bootstrap"],
    category: "web app",
    github: "https://github.com/raiyan-2002/personal-portfolio",
  },
  {
    id: 1,
    title: "Mail App",
    date: "July 2023",
    description:
      "This project is a single - page web application that allows users to send, receive, and reply to emails from other users. The main goal of this project was to build fluency in front - end development, as I mainly used JavaScript for the functionality of the app. I used HTTP request methods in API calls using JavaScript to modify JSON data pertaining to each email and developed a dynamic interface which allows users to compose and view their emails without a refresh of the page.  ",
    image:
      `${mail}`,
    tags: ["Python", "JavaScript", "HTML", "CSS", "Django"],
    category: "web app",
    github: "https://github.com/raiyan-2002/Mail",
  },
  {
    id: 3,
    title: "eCommerce Site",
    date: "July 2023",
    description:
      "This is an eBay style eCommerce site which allows users to put items up for auctioning, and bid on other items. Owners of an item have the ability to choose a category for their listed items, set a starting bid, and choose when to close the auction. Buyers can place bids (granted they are larger than the current bid or starting bid) and can leave comments on items.",
    image:
    `${commerce}`,
    tags: ["Python", "HTML", "CSS", "Django"],
    category: "web app",
    github: "https://github.com/raiyan-2002/eCommerceSite",
  },
  {
    id: 4,
    title: "Weather App",
    date: "April 2023",
    description:
      "This is a weather app that I made using a weather API. It taught me on how to use APIs in Python, and how to parse JSON data. Users can simply type in a city in the search bar and find lots of relevant temperature and weather information about that city. Using flask sessions, users are able to set their desired units of measurement and default city, and the app will remember their preferences. ",
    image:
    `${weather}`,
    tags: ["Python", "HTML", "CSS", "Bootstrap", "Flask", "APIs"],
    category: "web app",
    github: "https://github.com/raiyan-2002/Weather",
  },
  {
    id: 5,
    title: "Terminal Blackjack",
    date: "June 2023",
    description:
      "This was a very simple little project I made to get a grasp on the some object-oriented programming concepts in Python. It is a simple game of blackjack that is played entirely in the terminal, and it is a great way to pass time. The terminal will give sufficient instructions on how to play the game once the program has been executed.",
    image:
    `${blackjack}`,
    tags: ["Python"],
    category: "other",
    github: "https://github.com/raiyan-2002/BlackJack",
  },
  {
    id: 6,
    title: "Tic-Tac-Toe",
    date: "August 2023",
    description:
      "This game was a quick and easy way for me to learn Java syntax and get comfortable with GUIs through the swing library. It also served as a small introduction to object-oriented programming in Java.",
    image:
    `${tictactoe}`,
    tags: ["Java"],
    category: "other",
    github: "https://github.com/raiyan-2002/TicTacToe",
  },
  {
    id: 8,
    title: "Simple RISC Machine",
    date: "October 2023 - December 2023",
    description:
      "This hardware project led to the development of a simple computer which is capable of storing 16 bit ARM v7 instructions in memory, and executing them. ModelSim and Quartus were used to simluate and synthesize the Verilog design, and it was run on a SoC-DE1 FPGA board.",
    image:
     "https://i.ytimg.com/vi/aPXMkTJxD_s/maxresdefault.jpg",
    tags: ["SystemVerilog", "ARM v7", "FPGA"],
    category: "hardware",
    github: "https://github.com/raiyan-2002/RISC",
  },
];
