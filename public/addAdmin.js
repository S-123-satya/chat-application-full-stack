const url = 'http://localhost:3000'
const config = {
    headers: {
        Authorization: localStorage.getItem('token'),
    }
}
window.addEventListener('DOMContentLoaded',async()=>{
    console.log(`hello add event`);
    let groupid=localStorage.getItem('groupAdminPage');
    console.log(groupid);
    let id = groupid.match(/(\d+)/);
    console.log(id[0]);
    const data=await axios.get(`${url}/group/user/${id[0]}`,config);
    console.log(data);
})