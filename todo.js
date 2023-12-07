var formulario = document.querySelector('#formulario');
var listaTareas = document.querySelector('#listaTareas');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    var input = document.querySelector('#nuevaTarea');

    if (input.value.trim() === ""){
        return;
    }

    var nuevaTarea = document.createElement('li');
    nuevaTarea.addEventListener('dblclick', function(){
        this.parentElement.removeChild(this);
    })

    nuevaTarea.innerHTML = input.value;
    listaTareas.appendChild(nuevaTarea);
    input.value = "";

})