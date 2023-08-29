const url = 'http://localhost:3000'
const config = {
    headers: {
        Authorization: localStorage.getItem('token'),
    }
}
const inputtdl = document.querySelector('.textarea')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')
window.addEventListener('DOMContentLoaded', async () => {
    console.log(`hello add event`);
    let groupid = localStorage.getItem('groupAdminPage');
    console.log(groupid);
    let id = groupid.match(/(\d+)/);
    console.log(id[0]);
    const data = await axios.get(`${url}/group/user/${id[0]}`, config);
    console.log(data);
    console.log(`15`);
const listtdl = document.querySelector('.todolist')
    console.log(data?.data?.userList);
    await data?.data?.userList.map(async (ele) => {
        await addTodo(ele,listtdl);
    })
})


async function clickButton(e) {
    e.preventDefault()
    // addTodo()
    const searchName = document.querySelector('.textarea')

    // const searchName = document.getElementById('searchName');
    const data = await axios.get(`${url}/user?name=${searchName.value}`)
    const listOfUsers = document.getElementById('listOfUsers');
    listOfUsers.innerHTML = "";
    console.log(data);
    data?.data?.data.map(ele => {
        addTodo(ele,listOfUsers);
    })
}

// adding todoList
function addTodo({ name, id },listtdl) {
    console.log(name);
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.id = id;
    item.innerText = name;
    console.log(item);
    itemall.appendChild(item)
    console.log(itemall);

    // if (inputtdl.value === '') return

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)

    listtdl.appendChild(itemall)
    inputtdl.value = ''
}

// checking and delete todoList 
function okdel(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)