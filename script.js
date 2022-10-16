var list = document.querySelector('.time');
var listItem = document.querySelector('.time').querySelectorAll('li');
var schedule = document.querySelector('.card__schedule');

if(listItem.length > 4){
    var button = schedule.appendChild(document.createElement('button'));
    button.classList.add('add_more');
    button.innerHTML = 'Ещё...';
    listItem.forEach((li) => {
        button.addEventListener('click', () => {
            li.classList.add('open');
            button.style.display = 'none';
        })
    })
}





