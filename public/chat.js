const url='http://localhost:3000'
const config={
    Headers:{
        Authentication:localStorage.getItem('token')
    }
}
const sendMessage = document.getElementById('sendMessage');
sendMessage.addEventListener('click',async(e)=>{
    e.preventDefault();
    const inputChat = document.getElementById('inputChat');
    const message={
        message:inputChat.value,
    }
    const data=await axios.post(`${url}/sendMessage`,message,config);
    console.log(data);
    
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