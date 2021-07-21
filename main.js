let output = document.getElementById('output');
let btn = document.getElementById('btn');

let quotes = [
  'Be yourself; everyone else is already taken. ― Oscar Wilde',
  'You only live once, but if you do it right, once is enough. ― Mae West',
  'Be the change that you wish to see in the world. ― Mahatma Gandhi',
  'For every minute you are angry you lose sixty seconds of happiness. ― Ralph Waldo Emerson',
  'If you judge people, you have no time to love them. ― Mother Teresa',
  'If you can\'t explain it to a six year old, you don\'t understand it yourself. ― Albert Einstein',
  'Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car. ― Garrison Keillor',
  'Sometimes the questions are complicated and the answers are simple. ― Dr. Seuss',
  'All you need is love. But a little chocolate now and then doesn\'t hurt. ― Charles M. Schulz',
  'Life isn\'t about finding yourself. Life is about creating yourself. ― George Bernard Shaw'
];

btn.addEventListener('click', function(){
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  output.innerHTML = randomQuote;
})