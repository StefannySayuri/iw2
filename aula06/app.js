function dados(){
    const ds = [
        {id:1,login:"Sayuri",senha:"101510",email:"fannysayuri@gmail.com"},
        {id:2,login:"Yuri",senha:"151015",email:"fannysayuri1015@gmail.com"},
        {id:3,login:"Sayu",senha:"15102007",email:"fannysayuri1510@gmail.com"},
        {id:4,login:"Yurikan",senha:"151007",email:"stefannysayuri@gmail.com"}
    ]
    return ds
}

function login(user,password){

    const usuarios = dados()

    for(let i=0;i<usuarios.length;i++){

    if(user == usuarios[i].login && password == usuarios[i].senha){
        console.log("Você logou!")
        alert("você logou")
        break
    }
}
}

function logar(){
    let lg = document.getElementById("login").value
    let sn = document.getElementById("senha").value

    login(lg,sn)
}
