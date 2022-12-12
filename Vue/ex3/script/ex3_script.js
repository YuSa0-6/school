<div class="text">hello</div>
const data = {
    name1: 'hello',
    name2: 'world'
};

const $el = document.querySelector('.name1');
const $e1 = document.querySelector('.name2');
data.name1 = '福田';
data.name2 = '侑汰';
$el.innerText = data.name1;
$el.innerText = data.name2;