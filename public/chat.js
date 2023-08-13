const url = 'http://localhost:3000'
const config = {
    headers: {
        Authorization: localStorage.getItem('token'),
    }
}
setInterval(async function () {
    const data = await axios.get(`${url}/message/chats`, config);
    const userList = document.getElementById('userList');
    userList.innerHTML = ""
    console.log(data?.data?.data);
    (data?.data?.data).map((ele) => {
        displayMessage(ele?.User?.name, ele?.message, ele?.id);
    })
}, 1000);
const displayMessage = (name, message, id) => {
    const userList = document.getElementById('userList');
    let element = document.createElement('tr')
    element.id = id;
    element.innerHTML = `<td>${name}: ${message}</td>`
    userList.appendChild(element);

}
const sendMessage = document.getElementById('sendMessage');
sendMessage.addEventListener('click', async (e) => {
    e.preventDefault();
    const inputChat = document.getElementById('inputChat');
    const message = {
        message: inputChat?.value,
    }
    const data = await axios.post(`${url}/message`, message, config);
    displayMessage("You", data?.data?.data?.message, data?.data?.data?.id);
    inputChat.value = "";
    inputChat.focus()
})
window.addEventListener('DOMContentLoaded', async() => {
    const message = localStorage.getItem('messages');
    console.log(message);
    const id = message ? message[message?.length - 1]?.id : 1;
    console.log(id);
    const data=await axios.get(`${url}/message/chats?id=${id}`)
})
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