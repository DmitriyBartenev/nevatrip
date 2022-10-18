var time = document.querySelectorAll('.time');
var timeItem = document.querySelectorAll('.time__item');
var button = document.querySelector('.add_more');

var timeElem = document.querySelector('.time')

/* time.forEach((ul,id) => {
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
}) */

time.forEach(ul => {

    var children = ul.children;
    var lastChild = ul.lastElementChild

    if(children.length < 6){
        lastChild.style.display = 'none';
    }

    lastChild.addEventListener('click', () => {
               
        for(let i = 0; i <= children.length; i++){
            children[i].classList.add('open');
            lastChild.remove();
        }    
    })
})









