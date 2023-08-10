const url='http://localhost:3000'
const save=async ()=>{
    // e.preventDefault();
    const name = document.getElementById('name');
    const phoneNumber = document.getElementById('phoneNumber');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const obj={
        name:name.value,
        phone:phoneNumber.value,
        email:email.value,
        password:password.value
    }
    try {
        const result=await axios.post(`${url}/signup`,obj);
        console.log(result);
        alert(result?.data?.message)
    } catch (error) {
        console.log(error);
    }
}