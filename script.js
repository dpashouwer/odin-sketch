
const container = document.querySelector('#container');

// w/in each container, create 4 divs

function createRow (){
    const newDivContainer = document.createElement('div');
    for (let i = 0; i < 4; i++) {
        var newDiv = document.createElement('div'); 
        newDiv.classList.add('DivContainerItem'); 
        newDivContainer.appendChild(newDiv); 
    }; 
    newDivContainer.classList.add('DivContainer');
    container.appendChild(newDivContainer); 
}

for (let i = 0; i < 4; i++) {
    createRow();
}

/*
const divBox = document.querySelector('.DivContainerItem'); 
divBox.addEventListener('mouseover', function (e) {
    e.target.style.background = "yellow"; 
});
*/

document.querySelectorAll('.DivContainerItem').forEach(item => {
    item.addEventListener('mouseover', function (e) {
        e.target.style.background = "yellow";
    })
})

