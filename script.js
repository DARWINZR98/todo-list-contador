let input = document.getElementById("inputTarea");
let botonAgregar = document.getElementById("btnAgregar");
let lista = document.getElementById("lista");
let cont = document.getElementById("contador");

let contador=0;//variable para contar las tareas

botonAgregar.addEventListener("click", () =>{

    //verifica si el input esta vacio.
    if(input.value == ""){
        alert("vacio");
    }else{

    //agregar datos a una lista.
    let tarea = input.value;//atrapa lo que esta en el input
    let li = document.createElement("li");//crea el elemento li para las lista
    li.textContent = tarea;//agrega lo que esta en el input a al li
    lista.appendChild(li);//agrega el elemento a la lista
    
    contador++;//contador de las tareas
    cont.textContent = "Tareas: "+ contador;//muetras el contador
    input.value = "";//limpia el input
    


    //agregar el boton eliminar a cada elemento de la lista.
    let btnEliminar = document.createElement("button");//crea un boton
    btnEliminar.classList.add("btn-eliminar");//pone un nombre a la class del boton
    btnEliminar.textContent = "❌";//contedino del boton
    li.appendChild(btnEliminar);//agrega el boton al elemento de la lista  



    //eliminar elementos de la lista.  
    btnEliminar.addEventListener("click", () => {
        li.remove();
        btnEliminar.remove();
        contador--;//baja el contador
        cont.textContent = "Tareas: " + contador;//muestra el contador
    });


    //tachar tarea completada
    let btnCompletada = document.createElement("button");
    btnCompletada.textContent = "🎯";
    li.appendChild(btnCompletada);


    btnCompletada.addEventListener("click", () =>{
        li.style.textDecoration = "line-through";
    });


    }

});

