var button = document.querySelector('.add_more');
var listItem = document.querySelector('.time').querySelectorAll('li');


listItem.forEach((li) => {
    button.addEventListener('click', () =>{
        li.classList.toggle('')
    })
}) 



