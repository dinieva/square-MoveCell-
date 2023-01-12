const square = document.querySelector('.square-body');
const blocks = document.querySelectorAll('.block');
const resetBtn = document.querySelector('.btn-reset');

square.addEventListener('click', (e) => {

    if (e.target.closest('.arrow')) {
        let direction = e.target.closest('.arrow').classList[1];
        let block = e.target.closest('.block');

        if (direction === 'right') {
            if (block.nextElementSibling) {
                block.nextElementSibling.after(block);

            }
        } else if (direction === 'left') {
            if (block.previousElementSibling) {
                block.previousElementSibling.before(block);
            }

        } else if (direction === 'bottom') {
            let clone = block.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.cloneNode(true) //нижняя клетка

            if (clone) {

                block.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.replaceWith(block);

                block.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.before(clone);
            }

        } else if (direction === 'top') {

            let clone = block.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.cloneNode(true) //верхняя клетка
            if (clone) {
                block.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.replaceWith(block);
                block.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.after(clone);
            }
        }
    }
});

resetBtn.addEventListener('click', () => {
    console.log('reset');
    while (square.hasChildNodes()) {
        square.removeChild(square.firstChild);
    }
    for (let i = 0; i < blocks.length; i++) {
        square.append(blocks[i]);
    }
});

/*  
let cell1 = block.previousElementSibling
let cell2 = cell1.previousElementSibling
let cell3 = cell2.previousElementSibling
let cell4 = cell3.previousElementSibling
let cell5 = cell4.previousElementSibling

if (cell1 !== 'null' && cell2 !== 'null' && cell3 !== 'null' && cell3 !== 'null' && cell5 !== 'null') {
    cell5.replaceWith(block);
    block.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.after(cell5);
}
 */