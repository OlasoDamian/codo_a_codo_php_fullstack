/*
Funciones de pagina principal
 */
function calcularPrecioFinal(){
    let cantEnt=document.getElementById("cantEntradas").value;
    let desc=document.getElementById("porcDescuento").value;
    let descTotal=(cantEnt*1000)*desc/100;
    let precioFin=(cantEnt*1000)-descTotal;
    document.getElementById("precioFinal").value=precioFin;
}

/*
Funciones de pagina ticket 
*/
function calcularPrecioFinal_ticket(){
    let cantEnt=document.getElementById("cantEntradas").value;
    if (cantEnt>0){
        let desc=document.getElementById("porcDescuento").value;
        let descTotal=(cantEnt*1000)*desc/100;
        let precioFin=(cantEnt*1000)-descTotal;
        document.getElementById("precioFinal").value="Total a Pagar: $ "+ precioFin;
    }else{
        cantidadMayorQueCero()
    }

}
function cantidadMayorQueCero(){
    let cantEnt=document.getElementById("cantEntradas").value;
    let alertContainer = document.getElementById('alertContainer');
    if (cantEnt>0){
        document.getElementById("cantEntradas").classList.remove('border-danger');
        alertContainer.innerHTML = '';
    }else{
        document.getElementById("cantEntradas").classList.add('border-danger');
        document.getElementById("precioFinal").value="Total a Pagar: $ ";
        alertContainer.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          La cantidad debe ser mayor que cero.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;     
    }

}
function selecionDesdeCard(id){
    let categoria = id;
    switch(categoria){
        
        case 1: document.getElementById("porcDescuento").value=80;
        break;
        case 2: document.getElementById("porcDescuento").value=50;
        break;
        case 3: document.getElementById("porcDescuento").value=15;
        break;
    }
}
function validar_Nombre() {
    let input = document.getElementById('nombre');
    let value = input.value.trim(); 
  
    let alertContainerNombre = document.getElementById('alertContainerNombre');
    input.classList.remove('border-danger');
    alertContainerNombre.innerHTML = ''; 
  
    if (value === '') {
        input.classList.add('border-danger');
        alertContainerNombre.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          Por favor, ingresa un nombre válido.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;
    } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        input.classList.add('border-danger');
        alertContainerNombre.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          El nombre solo debe contener letras.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;
    }
  }
  function validar_Apellido() { 

    let input = document.getElementById('apellido');
    let value = input.value.trim();
    let alertContainerApellido = document.getElementById('alertContainerApellido');
    input.classList.remove('border-danger');
    alertContainerApellido.innerHTML = '';
    if (value === '') {
        input.classList.add('border-danger')
        alertContainerApellido.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          Por favor, ingresa un apellido válido.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;
    } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        input.classList.add('border-danger');
        alertContainerApellido.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          El apellido solo debe contener letras.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;
    }
}

function validar_Email() {
    let input = document.getElementById('email');
    let value = input.value.trim(); 
  
    let alertContainerEmail = document.getElementById('alertContainerEmail');
    alertContainerEmail.innerHTML = ''; 
    input.classList.remove('border-danger');
    if (value === '') {
        input.classList.add('border-danger');
        alertContainerEmail.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          Por favor, ingresa un correo electrónico válido.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;
    } else if (!validateEmail(value)) {
        input.classList.add('border-danger');
        alertContainerEmail.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          El correo electrónico ingresado no es válido.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;
    }
  }
  
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

function borrarte_Form(){
    document.getElementById("formulario").reset();
    document.getElementById("nombre").classList.remove('border-danger');
    document.getElementById("alertContainerNombre").innerHTML="";
    document.getElementById("apellido").classList.remove('border-danger');
    document.getElementById("alertContainerApellido").innerHTML="";
    document.getElementById("email").classList.remove('border-danger');
    document.getElementById("alertContainerEmail").innerHTML="";
    document.getElementById("cantEntradas").classList.remove('border-danger');
    document.getElementById("alertContainer").innerHTML="";
       
}
