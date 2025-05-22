const quotes = [
    {
    quote: 'Begone with The Thunderclap',
    author: 'Uchiha Sasuke',
    background: 'sasuke.jpg'
    },
    {
    quote: 'Nothing happened',
    author: 'Roronoa Zoro',
    background: 'zoro.jpg'
    },
    {
    quote: "Nah, I'd Win",
    author: 'Satoru Gojo',
    background: 'gojo.png'
    },
    {
    quote: "I'm Pickle Ri-i-i-ick!",
    author: 'Rick Sanchez',
    background: 'rick.jpg'
    },
    {
    quote: 'Oh my god, they killed Kenny!',
    author: 'Stan Marsh',
    background: 'stan.jpg'
    },
    {
    quote: "I'm ugly and I'm proud!",
    author: 'Patrick Star',
    background: 'patrick.jpg'
    },
    {
    quote: 'Tiny Boy Little Boy Baby Boy I need you',
    author: 'Dee Reynolds',
    background: 'dee.jpg'
    },
    {
    quote: "It's hard to step on ants without crushing them",
    author: 'Aizen Sosuke',
    background: 'aizen.png'
    },
    {
    quote: "You'll laugh at your fears when you find out who you really are",
    author: 'Piccolo',
    background: 'piccolo.jpg'
    },
    {
    quote: "Don't let this distract you from the fact that bungee gum has the properties of rubber and gum",
    author: 'Hisoka Morow',
    background: 'hisoka.jpg'
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote + " - ";
author.innerText = todaysQuote.author;

const bgImage = document.createElement("img");

bgImage.src = `img/${todaysQuote.background}`

document.body.appendChild(bgImage);