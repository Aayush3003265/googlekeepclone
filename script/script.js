const addButton = document.querySelector('#add');
const bodyDiv = document.querySelector('.bodyDiv')

const newNote = (text = '') => {
    
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('divvv');

    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
        <div class="operation">
        <button class="edit">
        <i class="fa-solid fa-file-pen "></i>
        </button>
        <button class="delete">
        <i class="fa-solid fa-trash "></i>
        </button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
         `;
    note.insertAdjacentHTML('afterbegin', htmlData);

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main'); // Corrected to mainDiv
    const textArea = note.querySelector('textarea');

    // Deleting a note
    deleteBtn.addEventListener('click', () => {
        note.remove();
    });

    mainDiv.appendChild(note);
    bodyDiv.appendChild(mainDiv);
};
    

addButton.addEventListener('click', newNote);



