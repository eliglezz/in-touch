const loginForm = document.querySelector("form#login");



loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const userObj={
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
    }
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(!res.ok){
            return alert("trumpet sound")
        } else {
            res.json().then(data=>{
                location.href = `/profile/${data.id}`
            })
        }
    })
})