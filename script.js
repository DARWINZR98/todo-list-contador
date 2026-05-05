let input = document.getElementById("inputTarea");
let botonAgregar = document.getElementById("btnAgregar");
let lista = document.getElementById("lista");
let cont = document.getElementById("contador");

let contador=0;//variable para contar las tareas
let tareas1 = JSON.parse(localStorage.getItem("tareas")) || [];//aqui estoy recuperando lo que esta en el localStorage

mostrarLista();

function mostrarLista(){
        tareas1.forEach((totalTareas) => {

            crearLista(totalTareas);

            //console.log(totalTareas);
            contador = tareas1.length;
            cont.textContent = "Tareas: "+ contador;
        })
}


function crearLista(nomTarea){
    let li = document.createElement("li");//crea el elemento li para las lista
    li.textContent = nomTarea.tareaNom;//agrega lo que esta en el input a al li
    lista.appendChild(li);

    if(nomTarea.estado == true){
        li.style.textDecoration = "line-through";  
    } 

    //agregar el boton eliminar a cada elemento de la lista.
    let btnEliminar = document.createElement("button");//crea un boton
    btnEliminar.classList.add("btn-eliminar");//pone un nombre a la class del boton
    btnEliminar.textContent = "❌";//contedino del boton
    li.appendChild(btnEliminar);//agrega el boton al elemento de la lista  

    btnEliminar.addEventListener("click", () => {
        li.remove();
        contador--;//baja el contador
        cont.textContent = "Tareas: " + contador;//muestra el contador 
        eliminarStorage(nomTarea);
    });

    let btnCompletada = document.createElement("button");
    btnCompletada.textContent = "✔";
    li.appendChild(btnCompletada);

    btnCompletada.addEventListener("click", () =>{
        nomTarea.estado = !nomTarea.estado;
        if(nomTarea.estado == true){
            li.style.textDecoration = "line-through";   
        }else{
            li.style.textDecoration = "none"; 
        }
        localStorage.setItem("tareas", JSON.stringify(tareas1));
    
    });

}


function eliminarStorage(eliminarTarea) {
        tareas1 = tareas1.filter((item) => item !== eliminarTarea);
        localStorage.setItem("tareas", JSON.stringify(tareas1));
} 


function guardar(){

    let tarea = input.value;//atrapa lo que esta en el input
    let estadoTareas = {
        tareaNom: tarea,
        estado: false
    };

    tareas1.push(estadoTareas);
    localStorage.setItem("tareas", JSON.stringify(tareas1));
    crearLista(estadoTareas);
}


botonAgregar.addEventListener("click", () =>{
    //verifica si el input esta vacio.
    if(input.value == ""){
        alert("vacio");
    }else{

    guardar();

    contador++;//contador de las tareas
    cont.textContent = "Tareas: "+ contador;//muetras el contador
    input.value = "";//limpia el input

    }
});








//tips
/* //guardar datos
localStorage.setItem("nombre","darwin");

//obtener datos
let dato = localStorage.getItem("nombre");
console.log(dato);

//eliminar
localStorage.removeItem("nombre");

//para guardar arrays/objetos
JSON.stringify();
JSON.parse();
 */

/* let tareas = [];

tareas.push(tarea);

localStorage.setItem("tareas", JSON.stringify(tareas));

let tareasGuardadas = JSON.parse(localStorage.getItem("tareas")); */