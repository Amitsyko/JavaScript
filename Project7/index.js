console.log("Hey welcome to tut64.js in this tut we can create --Drag and Drop elements-- using JavaScript");

const imgBox = document.querySelector(".imgBox")
const whiteBoxes = document.getElementsByClassName("whiteBox");

// Event listeners for draggable element imgBox
imgBox.addEventListener("dragstart", (e) => {
    console.log("Draged has been start");
    e.target.className += " hold"; //------hold ke aage space lagna jaruri he nhi to code error dega ( space !important)
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0)
});

imgBox.addEventListener("dragend", (e) => {
    console.log("Draged has been end");
    e.target.className = "imgBox";

})

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener("dragover", (e) => {
        e.preventDefault();
        console.log("Dragover ove has been started");
    })


    whiteBox.addEventListener("dragenter", (e) => {
        console.log("Dragenter ove has been started");
        e.target.className += " dashed"; //------dashed ke aage space lagna jaruri he nhi to code error dega ( space !important)
    })


    whiteBox.addEventListener("dragleave", (e) => {
        console.log("Dargleave over has been started");
        e.target.className = "whiteBox";
    })


    whiteBox.addEventListener("drop", (e) => {
        console.log("Drop ove has been started");
        e.target.append(imgBox);
    })
}