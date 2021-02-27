let boardList = [];

let overlay = document.querySelector('.overlay');

boardList.push(new Board('Доска 1'));
boardList.push(new Board('Доска 2'));

document.querySelector('#new-board-form').addEventListener('submit', e => {
    e.preventDefault();
    
    let form = e.target;
    
    boardList.push(new Board(form[0].value));
    
    overlay.classList.remove('show');
    overlay.classList.add('hidden');
    
    form.reset();
});

document.querySelector('#add-button').addEventListener('click', e => {
    e.preventDefault();
    overlay.classList.remove('hidden');
    overlay.classList.add('show');
})