export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently building my first SaaS, that improves people's eating habits.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Advanced Expense Tracker",
    des: "An advanced budget tracking app to help you avoid unnecessary expenses and save more.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/pg.svg", "/c.svg"],
    link: "https://expense.heybiplab.in/",
  },
  {
    id: 2,
    title: "New Edge Blog App.",
    des: "Here you'll find a variety of articles and tutorials on topics such as web development, software engineering, and programming languages.",
    img: "/p2.svg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/nodejs.svg",
      "/firebase.svg",
      "/mongodb.svg",
    ],
    link: "https://blogs.heybiplab.in/",
  },
  {
    id: 3,
    title: "A real-time chat app.",
    des: "A simple real-time chat app to seamlessly connect and chat with your friends.",
    img: "/p3.svg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/nodejs.svg",
      "/socketio.svg",
      "/mongodb.svg",
    ],
    link: "https://chat.heybiplab.in/",
  },
  {
    id: 4,
    title: "Beautiful Color Palette",
    des: "It has a beautiful colour palette with a great colour collection, allowing users to create one.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://color.heybiplab.in/",
  },
];

export const testimonials = [
  {
    quote:
      "Biplab is an exceptional colleague who always supports and helps me solve tough tasks. His positive attitude and strong coding skills make him a valuable team member. He explains complex concepts clearly and fosters a collaborative, productive environment. His dedication and composure under pressure are inspiring, making him a great asset to our team.",
    name: "Joyoti Bhattacharya",
    title: "Shopify Developer at Bitpastel",
    img: "/joyotiProfile.svg",
  },
  {
    quote:
      "I had the pleasure of working with Biplab Mondal during our IBM internship as frontend developers. Biplab showcased exceptional technical skills, a keen eye for detail, and quickly grasped new technologies. His positive, proactive attitude and reliability make him a valuable asset. Highly recommended!",
    name: "Joydip Banerjee",
    title: "Application Developer AWS at IBM",
    img: "/maleProfile.svg",
  },
  {
    quote:
      "Biplab has a complete knowledge of every technologies he has worked on.",
    name: "Mousumi Sengupta",
    title: "Software Engineer at Bitpastel",
    img: "/femaleProfile.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "bitpastel",
    img: "/bitpastel.svg",
    nameImg: "/bitpastel.svg",
  },
  {
    id: 2,
    name: "ibm",
    img: "/ibm.svg",
    nameImg: "/ibm.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer - Bitpastel",
    desc: "Worked as a full-stack web developer in MERN stack. Also, I have experience in web scraping and Angular.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer Intern - Bitpastel",
    desc: "I had the opportunity to contribute to multiple projects and learn about cutting-edge technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Engineer Intern - IBM",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelance App Dev Project",
    desc: "Helping friends set up their business online and managing their social media.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: "1",
    img: "/twit.svg",
    link: "https://twitter.com/heybiplab",
  },
  {
    id: "2",
    img: "/git.svg",
    link: "https://github.com/heybiplab",
  },
  {
    id: "3",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/heybiplab/",
  },
  {
    id: "4",
    img: "/whatsapp.svg",
    link: "https://wa.me/918629940525?text=Hi%20there%2C%20hope%20you%20are%20doing%20well.",
  },
];
