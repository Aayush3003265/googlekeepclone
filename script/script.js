const addButton = document.querySelector('#add');
const bodyDiv = document.querySelector('.bodyDiv')

const newNote = (text = '') => {
        // console.log(text);
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('divvv');

    const htmlData = `
    <div class="note">
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
        </div>
         `;
    mainDiv.insertAdjacentHTML('afterbegin', htmlData);
    // console.log(note);

    const editBtn = mainDiv.querySelector('.edit');
    const deleteBtn = mainDiv.querySelector('.delete');
    const main = mainDiv.querySelector('.main'); // Corrected to mainDiv
    const textArea = mainDiv.querySelector('textarea');

    // Deleting a note
    deleteBtn.addEventListener('click', () => {
        mainDiv.remove();
    });

    // toggle using edit button
    textArea.value = text;
    main.innerHTML = text;

     textArea.addEventListener('change',(event)=>{
        const value = event.target.value;
        // console.log(value);
        main.innerHTML = value;
        console.log(value);
     })


    editBtn.addEventListener('click', ()=>{
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
        
    })

    // mainDiv.appendChild(note);
    bodyDiv.appendChild(mainDiv);
};
    

addButton.addEventListener('click', ()=>{
    newNote('')
});




