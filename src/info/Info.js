import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Aboya",
    lastName: "Cyril",
    initials: "js", 
    position: "Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
           
        },
        {
            emoji: '🌎',
            text: 'Cote divoire'
        },
        {
            emoji: "💼",
            text: "Etudiant ifran"
        },
        {
            emoji: "📧",
            text: "cyrilaboya@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Lvrdsantana",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/cyril-aboya-1518a6247/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "Bonjour ! je suis Aboya Cyril etudiant en B2 developpement ifran",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'lire',
            emoji: '📖'
        },
        {
            label: 'Boxe(pieds poing)',
            emoji: '🥊'
        },
        {
            label: 'film',
            emoji: '🎥'
        },
        {
            label: 'cuisine',
            emoji: '🌶'
        }

    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock2
        },
        {
            title: "Project 2",
            live: "",
            source: "",
            image: mock2
        },
        {
            title: "Project 3",
            live: "",
            source: "",
            image: mock3
        },
        {
            title: "Project 4",
            live: "",
            source: "",
            image: mock4
        },
        {
            title: "Project 5",
            live: "",
            source: "",
            image: mock5
        }
    ]
}