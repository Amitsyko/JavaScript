console.log("Hey i am the console of the Magic Notes");
showNotes();

//if user add a note, add to the localStorage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {


    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notesObj);

    showNotes();
});

//Function to show elements from localStorage

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
                    <div class="noteCard col-sm-6 mb-3 lg-12 mb-sm-0 col-lg-4 my-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Note - ${index + 1}</h5>
                                <p class="card-text">${element}</p>
                                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete Notes</button>
                            </div>
                        </div>
                    </div>
                `
    });

    let noteElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        noteElm.innerHTML = html;
    } else {
        noteElm.innerHTML = `Nothing to show! Use "Add a Notes" sections above to the notes`;
    }
}

//Function to Delete Notes 

function deleteNote(index) {
    // console.log("i am deleting", index);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


/*-------Search element for Search button--------*/

let search = document.getElementById('srchBtn');
search.addEventListener('input', function () {
    let inputVal = search.value.toLowerCase();
    // console.log("Input value is fired !", inputVal);

    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function (element) {
        let cardText = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardText);
        if (cardText.includes(inputVal)){
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})

/* 

Further Features :-

1- Add titles
2- Mark a note as important
3- Seprate note by user
4- Sync and host with web server