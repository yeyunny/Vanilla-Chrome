const quotes = [
  {
    quote: "111111",
    author: "1111walt",
  },
  {
    quote: "222222",
    author: "222walt",
  },
  {
    quote: "333333",
    author: "3333walt",
  },
  {
    quote: "444444",
    author: "444walt",
  },
  {
    quote: "5555555",
    author: "5555walt",
  },
  {
    quote: "666666",
    author: "666walt",
  },
  {
    quote: "777777",
    author: "77777walt",
  },
  {
    quote: "8888888",
    author: "8888walt",
  },
  {
    quote: "9999999",
    author: "999walt",
  },
  {
    quote: "heoo101010101e",
    author: "10101010",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 0부터 10까지 랜덤
//Math.random() * 10;

// 반올림
//Math.round()

// 올림
//Math.ceil()

// 내림
//Math.floor()

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
