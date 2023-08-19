const url = 'http://localhost:3000'
const config = {
    headers: {
        Authorization: localStorage.getItem('token'),
    }
}
const displayMessage = (name, message, id) => {
    const messageList = document.getElementById('messageList');
    let element = document.createElement('div')
    element.id = id;
    if (name === "You" || name === localStorage.getItem('userName'))
        element.className = "chat__main-msg chat__main-msg-me"
    else
        element.className = "chat__main-msg chat__main-msg-user"
    element.innerHTML = `${name}: ${message}`
    messageList.appendChild(element);

}
const sendMessage = document.getElementById('sendMessage');
sendMessage.addEventListener('click', async (e) => {
    e.preventDefault();
    const inputChat = document.getElementById('inputChat');
    console.log(inputChat.value);
    const message = {
        message: inputChat?.value,
        groupId:JSON.parse(localStorage.getItem('groups')).id,
    }
    const messageList = document.getElementById('messageList');
    let id = 1;
    if (messageList.lastElementChild !== null)
        id = messageList.lastElementChild.id;
    await getDataById(id);
    const data = await axios.post(`${url}/message`, message, config);
    let messages = [];
    if (isMessage()) {
        messages = localStorage.getItem('messages');
        messages = JSON.parse(messages);
    }
    messages.push({ id: data?.data?.data?.id, name: "You", message: data?.data?.data?.message })
    displayMessage("You", data?.data?.data?.message, data?.data?.data?.id);
    inputChat.value = "";
    inputChat.focus()
})
window.addEventListener('DOMContentLoaded', async () => {
    getGroupList();
    await refresh();
})
async function refresh() {
    let id = 1;
    let messages = localStorage.getItem('messages');
    if (messages !== '' && messages !== null) {
        console.log(`hii`);
        // message display
        messages = JSON.parse(messages);
        messages.map(ele => {
            displayMessage(ele?.name, ele?.message, ele?.id);
        })
        id = messages[messages.length - 1]?.id;
    }
    if (messages === '' || messages === null) {
        messages = [];
    }
    console.log(messages);
    console.log(id);
    await getDataById(id);
}
function isMessage() {
    let messages = localStorage.getItem('messages');
    if (messages === '' || messages === null)
        return false;
    return true;
}
async function getDataById(id) {
    let messages = [];
    if (isMessage()) {
        messages = localStorage.getItem('messages');
        messages = JSON.parse(messages);
    }
    const groupId=JSON.parse(localStorage.getItem('groups')).id;
    const data = await axios.get(`${url}/message/chats/?groupId=${groupId}&id=${id}`, config)//we need to pass as a query not as params
    console.log(data);
    (data?.data?.data).map((ele) => {
        console.log(ele);
        const obj = {
            id: ele?.id,
            name: ele?.User?.name,
            message: ele?.message,
        }
        console.log(obj);
        messages.push(obj)
        displayMessage(ele?.User?.name, ele?.message, ele?.id);
    })
    console.log(messages);
    let message = JSON.stringify(messages);
    localStorage.setItem("messages", message)
}
function getGroupList() {
    let list = localStorage.getItem('groups');
    if (list === null && list === undefined)
        return;
    else {
        list = JSON.parse(list)
        console.log(list);
        displayGroup(list)
    }
}
function displayGroup(list) {
    console.log(list);
    const groupList = document.getElementById('groupList');
    console.log(groupList);
    const div=document.createElement('div');
    div.className=`side__lower-contact`;
    const insertBelowThis = document.getElementById('insertBelowThis');
    div.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path
      d="M206.7 378.1c10.23 7.832 24.32 7.832 34.55 0C282.6 346.3 384 259.6 384 173.6C384 65.83 312.3 0 224 0C135.6 0 64 65.83 64 173.6C64 259.6 165.4 346.3 206.7 378.1zM240 236c0-33.13 26.88-60 60-60h24c6.625 0 12 5.375 12 12v8C336 229.1 309.1 256 276 256h-24C245.4 256 240 250.6 240 244V236zM112 196v-8C112 181.4 117.4 176 124 176h24C181.1 176 208 202.9 208 236v8C208 250.6 202.6 256 196 256h-24C138.9 256 112 229.1 112 196zM319.7 352.5c-20.72 20.3-41.57 37.69-58.92 51.03C250.2 411.6 237.2 416 224 416s-26.23-4.43-36.78-12.51c-17.33-13.33-38.17-30.7-58.88-50.99C57.07 355.2 0 413.4 0 485.3C0 500.1 11.94 512 26.66 512H421.3C436.1 512 448 500.1 448 485.3C448 413.4 390.9 355.2 319.7 352.5z" />
  </svg>
  <div class="side__lower-contact-textbox">
    <div class="side__lower-contact-name">${list?.data?.data?.groupname}</div>
    <div class="side__lower-contact-text">Lorem ipsum dolor sit amet...</div>
  </div>`
    
    insertAfter(div,insertBelowThis)
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
// const themeselector=document.getElementById('themeselector');
// const theme =localStorage.getItem('theme');
// changeTheme(theme);
// themeselector.addEventListener('change',(e)=>{
//     localStorage.setItem('theme',e.target.value);
//     changeTheme(e.target.value);
// });

// function changeTheme(theme){
//     if(theme==='dark')
//         document.body.style.backgroundColor='#222';
//     else if(theme==='light')
//     document.body.style.backgroundColor='#e5e5e5';
//     else
//     document.body.style.backgroundColor='#fff';
// }
// window.addEventListener('storage',(e)=>{
//     if(e.key==='theme'){
//         changeTheme(e.newValue);
//         themeselector.value=e.newValue;
//     }
// });
// window.addEventListener('DOMContentLoaded',(e)=>{

// }) 