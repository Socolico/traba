let boton = document.getElementById("enviar-btn");
boton.addEventListener('click',function(){

    let errores = [];
    let nombre = document.getElementById("nombre-txt").value;
    let Email = document.getElementById("Email-txt").value;
    let number = document.getElementById("number-txt").value;
    let mensaje = document.getElementById("descripcion-txt").value;

    if(nombre === ''){
        errores.push("Debe ingresar nombre");
    }
    if(Email === ''){
        errores.push("Debe ingresar Email");
    }
    if(number === ''){
        errores.push("Debe ingresar su numero ");
    }
    if(mensaje === ''){
        errores.push("Debe ingresar su mensaje");
    }

   
    let erroresDiv = document.getElementById("errores-div");

   
    erroresDiv.innerHTML = '';
    
    if(errores.length === 0){
        Swal.fire({
            title: 'Mensaje enviado',
            text: 'gracias por contactarnos',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }
    else{
    let ol = document.createElement('ol');
    ol.classList.add('alert','alert-warning');
    errores.forEach(e=>{
        let li = document.createElement('li');
        li.innerText = e;
        ol.appendChild(li);
    });
    erroresDiv.appendChild(ol);

}

});