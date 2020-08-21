// Your code goes here
/*
mouseover
keydown
wheel
load
focus
resize
scroll
select
dblclick
drag / drop
*/

// Event Handlers
let onClick = (event) => (event.target.style.color = 'purple');

let onDbClick = (event) => (event.target.style.backgroundColor = 'blue');

let onMouseOver = (event) => (event.target.textContent = 'Whooop Changed it!');

// Grabbing the respective nodes on the DOM and adding event listeners
let logo = document.querySelector('.logo-heading');
logo.addEventListener('click', onClick);

let introBox = document.querySelector('.intro');
introBox.addEventListener('dblclick', onDbClick);

let h2Title = document.querySelector('.text-content h2');
h2Title.addEventListener('mouseover', onMouseOver);
