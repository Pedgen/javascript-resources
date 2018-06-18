/**
 *  Generate a stack of card based on this list,
 *  There is a class name .card but you may make
 *  changes in the HTML and CSS.
 *  Use either .insertAdjecantHTML or innerHTML
 *  If you have already used these to create cards,
 *  try doing the same thing but with .appendChild
 *  and .createElement
 */

 let list = [
  {
    title: 'PlainJS - DOM Manipulation',
    href: 'https://plainjs.com/javascript/manipulation/',
    color: 'lightsalmon',
    tags: ['javascript', 'dom'],
    dateAdded: '2018-03-12'
  },
  {
    title: 'Chrome Developers Tools - Debug',
    href: 'https://developers.google.com/web/tools/chrome-devtools/javascript/',
    color: 'blue',
    tags: ['chrome', 'debug'],
    dateAdded: '2018-02-27'
  },
  {
    title: 'Code Quizzes - JavaScript',
    href: 'http://www.codequizzes.com/javascript',
    color: 'lightsalmon',
    tags: ['javascript', 'quiz', 'beginner'],
    dateAdded: '2017-09-23'
  },
  {
    title: 'Code Analogies - Tutorials',
    href: 'https://www.codeanalogies.com/',
    color: 'lightsalmon',
    tags: ['javascript', 'tutorials'],
    dateAdded: '2018-06-11'
  },
  {
    title: 'Baffled Nerd - Tutorials',
    href: 'http://www.bafflednerd.com/learn-javascript-online/',
    color: 'lightsalmon',
    tags: ['javascript', 'tutorials'],
    dateAdded: '2017-08-30'
  },
  {
    title: 'JavaScript.info - Modify Document',
    href: 'http://javascript.info/modifying-document',
    color: 'lightsalmon',
    tags: ['javascript', 'dom'],
    dateAdded: '1989-09-30'
  },
  {
    title: 'PlainJS - Events',
    href: 'https://plainjs.com/javascript/events/',
    color: 'blue',
    tags: ['javascript', 'events', 'dom'],
    dateAdded: '2018-04-01'
  }
];

const container = document.querySelector("#resources");

for(let resources of list) {
  // if (resources.tags.includes("javascript"))

  let card = `
  <div class="card" style="background-color:${resources.color}">
      <p class="title">${resources.title}</p>
      <p class="tags">${resources.tags} </p>
      <p class="dateAdded">${resources.dateAdded}</p>
      <a href="${resources.href}">${resources.href}</a>
  </div>`
  container.insertAdjacentHTML("afterbegin", card);
};

const button = document.querySelector("#button");
const main = document.querySelector("main");
const divs = document.querySelectorAll("div");
const tags = document.querySelectorAll(".tags");

button.addEventListener("click", function() {
  main.classList.toggle("hide-show");
});

//tags.classList.add("hide-show");

for (let div of divs) {
    div.addEventListener("click", function(){
      for(let tag of tags){
        tag.classList.toggle("hide-show");
      }
    });
}
