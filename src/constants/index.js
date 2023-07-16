import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    championsports,
    ecumondo,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    wizme

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "feedbacks",
      title: "Feedback",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React  Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend developer",
      company_name: "Champions Sport",
      icon: championsports,
      iconBg: "#fff",
      date: "May 2022 - Present",
      points: [
        "Worked in the Back-office products to create new modules helping operators to better control their sportsbook increasing accessibility and ease of use using react, redux, and typescript.",
        "Redesigned the backoffice UI with Figma using MUI design library and then the migration of the code to the new design using React, redux, MUI, and typescript.",
        "Built and developed multiple features in a one-stop-solution creating bonus and promotions tools to help operators increase revenues using Vue, Vuex ",
        "Globalized settings options throughout the application using redux for a better user experience.",
        "Built and developed reusable components, charts, and templates to reduce development time with react, and typescript."
      ],
    },
    {
      title: "Frontend developer",
      company_name: "Ecumondo",
      icon: ecumondo,
      iconBg: "#1e4d74",
      date: "March 2021 - May 2022",
      points: [
        "Worked with 6 team colleagues to build the core components library using React with typescript.",
        "Developed and discussed best solutions to build reusable components that other developers can depend on it using React with typescript",
        "Planned with my team the migration from ExtJS framework to React.js in an efficient, time-saving method.",
        "Developed user interfaces in the cosmetic-factory app using react, typescript handling EQL requests.",
      ],
    },
    {
      title: "Frontend developer",
      company_name: "Wizme",
      icon: wizme,
      iconBg: "#fff",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Wizme Booking Wizard.Responsible for developing reusable components for login, customer data submission, Venue query submission, and offers page using atomic design pattern in an Agile Team   React, Redux.",
        "Wizme landing page. Redesigned and Coded the new Landing page with a modern responsive design using React. Next Js improving the website's SEO rank.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "It is rare that you come across with such a talent as Majd. I had the pleasure of working with him as his Career Coach for some months and was particularly impressed to see how focused, ambitious and disciplined he is",
      name: "Marisa Veiga Lobato-Schlereth",
      designation: "Diversity Partner",
      company: "Imagine Foundation",
      image: "https://media.licdn.com/dms/image/D4E03AQEm3aHFMSj6Vw/profile-displayphoto-shrink_800_800/0/1688028645741?e=1694649600&v=beta&t=yDPL2ZRAcK3JAYex8EvN5xnN-Tt84-8lKybSnQLVu8E",
    },
    
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Majd does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Majd optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  