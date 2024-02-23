// let data = fetch('https://jsonplaceholder.typicode.com/posts',
// {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body : JSON.stringify({})
// })    
// function optenerPost2(){
//     let posts = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// }
// ASYNC AWAIT - ME PERMITE ESPERAR LA RESPUESTA DE UNA PETICION ASINCRONA
async function optenerPosts(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })    
    console.log("await", data);
    let posts = await data.json();
    console.log(posts);

    // console.log("string", JSON.stringify(posts));
    // let new_json = JSON.parse(JSON.stringify(posts));
    // console.log("new_json", new_json);
    return posts;
}

function crearChat(texto, id){
    let nuevoChat = document.createElement("div");
    nuevoChat.className = "chat";
    nuevoChat.id = id;
    nuevoChat.innerText = texto;
    return nuevoChat;
}

async function crearListoDeChats(){
    // mando a traer los post dummys a una api con get
    let misPosts =  await optenerPosts()
    
    // mando a traer el div donde quiero poner los chats
    let divListados = document.getElementById("listado-chats");
    if(divListados != null){
        // transformamos los dicccionarios a un div de chat
        misPosts.map(post=>{
            let nuevoChat = crearChat(post.title, post.id);
            return nuevoChat
        })
        // recorremos los nuevos chats y los agremos al div de listados
        .forEach(element => {
            divListados.appendChild(element);
        });
    }

}

document.body.style.height = "100vh"
document.body.style.width = "100vw"
document.body.style.margin = "0px"

// Contenedor General
let divContenedor = document.createElement("div")
divContenedor.id = "contenedor"
divContenedor.style.height = "100%"
divContenedor.style.width = "100%"
divContenedor.style.display = "grid"
divContenedor.style.margin = "0"
divContenedor.style.gridTemplateColumns = "20% 80%"
divContenedor.style.gridTemplateRows = "85% 15%"
divContenedor.style.backgroundColor = "#fdffb6"
// divContenedor.style.border = "1px solid black"
// divSend.style.border = "1px solid black"
document.body.appendChild(divContenedor)


// Listado de chats
let divContChats = document.createElement("div")
divContChats.id = "ContenedorChats" 
divContChats.style.display = "flex"
divContChats.style.height = "100%"
divContChats.style.width = "100%"
divContChats.style.flexDirection = "column"
divContChats.style.backgroundColor = "#9cadce"
divContChats.style.overflowY = "scroll"
divContChats.style.border = "1px solid black"
divContenedor.appendChild(divContChats)


// Cuadro de Mensajes
let divMsg = document.createElement("div")
divMsg.id = "ContenedorMensajes"
divMsg.style.display = "flex" 
divMsg.style.height = "100%"
divMsg.style.width = "100%"
divMsg.style.flexDirection = "column"
divMsg.style.backgroundColor = "#7ec4cf" 
divMsg.style.marginBottom = "800px"
divMsg.style.border = "1px solid black"
divMsg.style.overflow = "scroll"
divContenedor.appendChild(divMsg)


// Cuadro de Usuario
let divContuser = document.createElement("div")
divContuser.id = "ContenedorUsuario"
divContuser.style.display = "flex"
divContuser.style.height = "100%"
divContuser.style.width = "100%"
divContuser.style.backgroundColor = "#daeaf6"
divContuser.style.flexDirection = "column"
divContuser.style.border = "1px solid black"
divContuser.style.alignItems = "center"
divContenedor.appendChild(divContuser)

let Userimg = document.createElement("img")
Userimg.id = "Profile-Pic"
Userimg.src = "pp.jpg"
Userimg.style.height = "50px"
Userimg.style.width = "50px"
Userimg.style.borderRadius = "50%"
Userimg.style.marginTop = "30px"
divContuser.appendChild(Userimg)

let username = document.createElement("div")
username.style.height = "50px"
username.style.width = "50px"
username.style.marginTop = "30px"
username.style.flexDirection = "row"
username.innerText = "Pablo Cesar Lopez Medina"
// divContuser.appendChild(username)


// Mandar mensajes
let divSend = document.createElement("div")
divSend.id = "SendMsg"
divSend.style.display = "flex"
divSend.style.height = "100%"
divSend.style.width = "100%"
divSend.style.backgroundColor = "#d1cfe2"
divSend.style.flexDirection = "column"
divSend.style.border = "1px solid black"
divContenedor.appendChild(divSend)

// campo de texto
let chatbox = document.createElement("textarea")
chatbox.id = "chatbox"
chatbox.style.width = "90%"
chatbox.setAttribute("maxlength", "140")
divSend.appendChild(chatbox)

chatbox.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        showMsg(); 
        chatbox.value = "";
    }

});

// Boton enviar
const btn = document.createElement("button")
btn.id = "BtnEnviar"
btn.innerText = "Enviar"
btn.style.height = "30px"
btn.style.width = "80px"
btn.style.border = "1px solid black"
divSend.appendChild(btn)

btn.addEventListener("click", showMsg)

btn.addEventListener("mouseover", function(){
    btn.style.height = "40px"
    btn.style.width = "90px"
})

btn.addEventListener("mouseout", function(){
    btn.style.height = "30px"
    btn.style.width = "80px"
})


// Funcion para mostrar mensajes enviados 
function showMsg(){
    let nuevoMsg = document.createElement("div")
    nuevoMsg.id = "Mensaje"
    nuevoMsg.style.minHeight = "60px"
    nuevoMsg.style.width = "100%"
    nuevoMsg.style.border = "1px solid black"
    nuevoMsg.innerText = "holahola"
    nuevoMsg.style.marginTop = "5px"
    nuevoMsg.style.backgroundColor = "#daeaf6"


    divMsg.appendChild(nuevoMsg)
    divMsg.scrollTop = divMsg.scrollHeight
}

// Usuario en listado de chats
function createUser(Name){
    let user = document.createElement("div")
    user.style.minHeight = "60px"
    user.style.display = "flex"
    user.style.width = "90%"
    user.style.backgroundColor = "#d1cfe2"
    user.style.alignSelf = "center"
    user.style.marginTop = "5px"
    user.style.borderRadius = "5%"
    user.innerText = Name
    divContChats.appendChild(user)
    
    let ProfilePic = document.createElement("img")
    ProfilePic.src = "pp.webp"
    ProfilePic.style.display = "stretch"
    ProfilePic.style.height = "50px"
    ProfilePic.style.width = "50px"
    ProfilePic.style.borderRadius = "50%"
    ProfilePic.style.flexDirection = "row-reverse"

    // user.appendChild(ProfilePic)
    
}

createUser("Pablo")
createUser("Cesar")
createUser("Lopez")
createUser("Medina")
createUser("Ashley")
createUser("Yarely")
createUser("Castellanos")
createUser("Coto")
createUser("Diego")
createUser("Garcia")
createUser("Fernando")
createUser("Enrique")
createUser("Echeverria")
createUser("Leal")
createUser("Francis")
createUser("Gabriela")
createUser("Aguilar")
createUser("Leal")

// Boton cambiar tema
let tema = document.createElement("button")
tema.id = "BtnTema"
tema.innerText = "Tema"
tema.style.height = "30px"
tema.style.width = "80px"
tema.style.border = "1px solid black"
tema.style.alignItems = "center"
divSend.appendChild(tema)

let n = 1
tema.addEventListener("click", function(){

    if(n == 1){

        divContuser.style.backgroundColor = "#4c0027"
        divContChats.style.backgroundColor = "#1a1a40"
        divMsg.style.backgroundColor = "#1e5128"
        divSend.style.backgroundColor = "#1a1a40"

        n = 2

    }else{
        divContuser.style.backgroundColor = "#daeaf6"
        divContChats.style.backgroundColor = "#9cadce"
        divMsg.style.backgroundColor = "#7ec4cf"
        divSend.style.backgroundColor = "#d1cfe2"

        n = 1

    }
})

tema.addEventListener("mouseover", function(){
    tema.style.height = "40px"
    tema.style.width = "90px"
})

tema.addEventListener("mouseout", function(){
    tema.style.height = "30px"
    tema.style.width = "80px"
})