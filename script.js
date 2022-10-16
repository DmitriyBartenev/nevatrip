var list = document.querySelector('.time');
var listItem = document.querySelector('.time').querySelectorAll('li');


var time = document.querySelectorAll('.time');
var timeItem = document.querySelectorAll('.time__item');

time.forEach((ul) => {
    var button = ul.appendChild(document.createElement('button'));
    button.classList.add('add_more');
    button.innerHTML = 'Ещё...';
    timeItem.forEach((li) => {
        button.addEventListener('click', () => {
            li.classList.add('open');
            var buttons = document.querySelectorAll('.add_more')
            buttons.forEach(button => button.remove())
        })
    })
})





