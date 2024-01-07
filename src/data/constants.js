import quacker from '../images/quacker.png';
import mail from '../images/mail.png';
import commerce from '../images/commerce.png';
import weather from '../images/weather.png';
import portfolio from '../images/portfolio.png';
import blackjack from '../images/blackjack.png';
import tictactoe from '../images/tictactoe.png';

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
    "https://drive.google.com/file/d/1ffZrcMcn8UatXGIaautbbqpV7ADNaETA/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
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
    id: 0,
    title: "Stock Trading Simulator",
    date: "May 2023",
    description:
      "Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. \nAdmin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials:	#Email: testemployee@gmail.com	#Password- 123@Testemployee",
    image:
      "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
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
    id: 1,
    title: "Mail App",
    date: "July 2023",
    description:
      "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
    image:
      `${mail}`,
    tags: ["Python", "JavaScript", "HTML", "CSS", "Django"],
    category: "web app",
    github: "https://github.com/raiyan-2002/Mail",
  },
  {
    id: 2,
    title: "Quacker",
    date: "August 2023",
    description:
      "Designed and developed the Vexa project, a project management app that helps users and teams stay organized and on track. Implemented key features such as task tracking, team collaboration, and time tracking to improve productivity and project outcomes and also invite team/project members. The plan is to add a community of users where they can find developers and other team members and chat system implementation.",
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
    id: 3,
    title: "eCommerce Site",
    date: "July 2023",
    description:
      "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
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
      "App Is Currently In Playstore 100+ Downloads. This Project proposes an “Expense Tracking App”. Keep track of your personal expenses and compare them to your monthly income with the budget planner. It has Google Drive Cloud API for Backup of User Room Database. Made with Kotlin in MVVM Architecture & Live Data.",
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
    id: 7,
    title: "Internet of Things (IoT) Data Analytics",
    date: "November 2023 - December 2023",
    description:
      "A WhatsApp clone made with React JS, Firebase, and Material UI. It has Phone Authentication, Real-time Database. It has a chat room where users can chat with each other. It has a sidebar where users can see all the chat rooms and can create a new chat room. It has a login page where users can log in with their Google account.",
    image:
    "https://news.mit.edu/sites/default/files/images/202011/MIT-Tiny-AI-01.jpg",
    tags: ["Java", "Network Programming"],
    category: "network",
    github: "https://github.com/raiyan-2002/IOT",
  },
  {
    id: 8,
    title: "Simple RISC Machine",
    date: "October 2023 - December 2023",
    description:
      " A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",
    image:
     "https://i.ytimg.com/vi/aPXMkTJxD_s/maxresdefault.jpg",
    tags: ["SystemVerilog", "ARM v7", "FPGA"],
    category: "hardware",
    github: "https://github.com/raiyan-2002/RISC",
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
    github: "https://github.com/rishavchanda/Breaking-Bad",
  },
];
