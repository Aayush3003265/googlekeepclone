const addButton = document.querySelector('#add')

const newNote = (text = '') =>{
    const note = document.createElement('div');
    note.classList.add('note');
     note.setAttribute('class', 'relative bg-slate-600 h-[300px] w-[400px] mx-16')
    const htmlData = `
        <div class="operation absolute top-2 left-[300px]">
            <button class="edit"><i class="fa-solid fa-file-pen text-3xl hover:bg-blue-500 rounded-lg"></i></button>
            <button class="delete"><i class="fa-solid fa-trash text-3xl hover:bg-red-500  rounded-lg"></i></button>
            <textarea type="text-area" placeholder="type here" class="absolute bg-black text-white right-[10px] top-[60px] p-[80px]"></textarea> 
        </div>
    `;
    note.insertAdjacentHTML('afterbegin', htmlData)
    document.body.appendChild(note);
}




addButton.addEventListener('click', newNote);