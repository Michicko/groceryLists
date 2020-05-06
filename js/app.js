const form = document.querySelector('form');
const addInput = document.querySelector('#add-input');
const groceryContainer = document.querySelector(".grocery-items-container");
const clearBtn = document.querySelector('#clear-btn');


form.addEventListener('submit', addGrocery);
groceryContainer.addEventListener('click', deleteItem);
clearBtn.addEventListener('click', clearItems);

// add grocery item to lists
function addGrocery(e) {
    const item = addInput.value;
    if (item === '') {
        setAlert('Please enter grocery item');
        setTimeout(() => {
            removeAlert()
        }, 2000);
    } else {
        populate(item);
        addInput.value = '';
    }
    e.preventDefault();
}

// remove grocery
function deleteItem(e) {
    if (e.target.classList.contains('del')) {
            e.target.parentElement.remove();
    }
}

function clearItems() {
    const ul = document.querySelector('.item-lists');
    while (ul.firstElementChild) {
        ul.removeChild(ul.firstElementChild);
    }
}

// display item
function populate(item) {
    const itemLists = document.querySelector('.item-lists');
    let html = `
    <li class="grocery-item">
        <p class="item">${item}</p>
        <p class="del">X</p>
    </li>
    `;
    itemLists.innerHTML += html;
}

// show alert
function setAlert(msg) {
    const div = document.createElement('div');
    div.classList = 'alert';
    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector('.add-grocery-list');
    const form = document.querySelector('form');
    removeAlert();
    container.insertBefore(div, form.nextElementSibling);
}

// remove alert
function removeAlert() {
    const form = document.querySelector('form');
    if (form.nextElementSibling) {
        form.nextElementSibling.remove();
    }
}