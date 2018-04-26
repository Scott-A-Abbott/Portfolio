import contactList from '../images/work/contact_list.png';
import flexnotes from '../images/work/flexnotes.png';
import environmindful from '../images/work/environmindful.png';
import matchTwo from '../images/work/match_two.png';
import portfolio from '../images/work/create_react_portfolio.png';
import wirtanen from '../images/work/wirtanen-demo.png';
import aquest from '../images/work/aquest.png';
import React from 'react'

export default [
    {
        name: 'Wirtanen',
        info: `My first personal project. Developed with React on the front end, Node.js + Express for my server, a Postgresql database,
               Glamor/Glamorous for styling, and Redux to handle state. The app is a basic template for an interactive story.
               The greatest challenges came in conditionally rendering based on the user's input. I used JSON binary to store
               my local state to the database in an effort to emulate 'saving' in a video-game.`,
        img: wirtanen,
        alt: 'Wirtanen',
        codeLink: "https://github.com/Scott-A-Abbott/Wirtanen-demo",
        demoLink: "https://youtu.be/4f6GE1NubSk"
    },
    {
        name: 'Aquest Clone',
        info: 'When I first set out to brainstorm ideas for a group project, I began with browsing through Awwwards.com for inspiration. There, I happened upon a site that had recieved Site of the Year, and was the homepage of a componany that had recieved dozens of like awards: Aquest.it. A React app that uses redux to handle shared state, Node.js with express for our backend, and a postgreSQL database. Glamor/Glamorous allowed each group member to freely style a component without worry of interfering with one another. The toughest part, but most rewarding, was orchestrating React-Motion to handle a majority of the animations.',
        img: aquest,    
        alt: 'AQuest',
        codeLink: "https://github.com/AQuestClone/AQuestClone",
        demoLink: "demo"
    },
    // {
    //     name: 'Match Two!',
    //     info: 'Match Two! is a comic book themed, memory match game. This project was built using jQuery, Bootstrap, scalable vector graphics (SVG), Photoshop, and Illustrator.',
    //     img: matchTwo,
    //     alt: 'Match Two',
    //     codeLink: "https://github.com/brucean52/memory-match-js",
    //     demoLink: "https://brucean52.github.io/memory-match-js/"
    // },
    // {   
    //     name: 'Contact List',
    //     info: 'Contact list is a mobile responsive technical demo using a model-view-controller (MVC) architecture, jQuery, Ajax, and Flexbox. A PHP back end was used to perform CRUD operations to a MySQL database. Contacts are sortable by name, and the app is fully mobile responsive.',
    //     img: contactList,
    //     alt: 'Contact List',
    //     codeLink: "https://github.com/brucean52/contact_list",
    //     demoLink: "http://contact-list.brucedev.net/"
    // },
    // {
    //     name: 'Create React Portfolio',
    //     info: 'A simple portfolio template using React, Nodemailer and Material Design.',
    //     img: portfolio,
    //     alt: 'Portfolio',
    //     codeLink: "https://github.com/brucean52/create-react-portfolio",
    //     demoLink: ""
    // },
];