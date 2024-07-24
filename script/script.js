const addButton = document.querySelector('#add');

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
    document.body.appendChild(mainDiv)
};

addButton.addEventListener('click', newNote);












// const addButton = document.querySelector('#add');

// const newNote = (text = '') => {
//     const mainDiv = document.createElement('div');
//     mainDiv.classList.add('flex');

//     const note = document.createElement('div');
//     note.classList.add('note', 'relative', 'bg-slate-600', 'h-[300px]', 'w-[400px]', 'flex', 'mx-16');

//     const htmlData =`
//         <div class="operation absolute top-2 left-[300px]">
//             <button class="edit"><i class="fa-solid fa-file-pen text-3xl hover:bg-blue-500 rounded-lg"></i></button>
//             <button class="delete"><i class="fa-solid fa-trash text-3xl hover:bg-red-500 rounded-lg"></i></button>
//         </div>
//         <div class="main hidden"></div>
//         <textarea class="absolute bg-black text-white right-[30px] top-[70px] p-[80px]">${text}</textarea>`
//     ;
//     note.insertAdjacentHTML('afterbegin', htmlData);

//     const editBtn = note.querySelector('.edit');
//     const deleteBtn = note.querySelector('.delete');
//     const main = note.querySelector('.main');
//     const textArea = note.querySelector('textarea');



//     // Editing a note


//     // Deleting a note
//     deleteBtn.addEventListener('click', () => {
//         note.remove();
//     });

//     mainDiv.appendChild(note);
//     document.body.appendChild(mainDiv);
// };

// addButton.addEventListener('click', () => newNote());
