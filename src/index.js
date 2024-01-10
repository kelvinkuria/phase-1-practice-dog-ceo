const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const breedUrl = 'https://dog.ceo/api/breeds/list/all';

// Challenge 1 - Get random images

fetch(imgUrl)

.then(response => response.json())

.then(data => {

data.message.forEach(url => {

const img = document.createElement('img');

img.src = url;

document.body.appendChild(img);

});

});

// Challenge 2 - Get breeds list

fetch(breedUrl)

.then(response => response.json())

.then(data => {

const ul = document.querySelector('ul');

Object.keys(data.message).forEach(breed => {

const li = document.createElement('li');

li.textContent = breed;

ul.appendChild(li);

});

});

// Challenge 3 - Change color on click

const lis = document.querySelectorAll('li');

lis.forEach(li => {

li.addEventListener('click', () => {

li.style.color = 'purple';

});

});

// Challenge 4 - Filter breeds

const select = document.querySelector('select');

select.addEventListener('change', event => {

const letter = event.target.value;

lis.forEach(li => {

if(li.textContent.startsWith(letter)) {

li.style.display = '';

} else {

li.style.display = 'none';

}

});

});




  



