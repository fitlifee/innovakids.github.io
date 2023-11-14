// Obtiene la hora actual
var horaActual = new Date().getHours();
var saludo = document.getElementById("saludo");

// Define los saludos según la franja horaria
if (horaActual >= 0 && horaActual < 12) {
    saludo.innerHTML = '<i class="fas fa-sun text-warning"></i> Hola, ¡Buenos días!';
} else if (horaActual >= 12 && horaActual < 18) {
    saludo.innerHTML = '<i class="fas fa-cloud-sun"></i> Hola, ¡Buenas tardes!';
} else {
    saludo.innerHTML = '<i class="fas fa-moon"></i> Hola, ¡Buenas noches!';
}

// Input con API de whatsapp settings

const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombres').value;
        let apellido = document.getElementById('apellidos').value;
        let mensaje = document.getElementById('mensaje').value;
        let numero= 50587427199;
var win= window.open(`https://wa.me/${numero}?text=Hola!%20quiero%20que%20me%20*impulses%20mi%20negocio*!%0D%0A%0D%0A*Nombre:*%0D%0A-%20${nombre}.%20(${apellido})%0D%0A%0D%0A*Descripción%20del%20emprendimiento:*%0D%0A-%20${mensaje}%0D%0A%0D%0A*Envía%20este%20mensaje%20para%20que%20un%20agente%20gestione%20tu%20solicitud.*`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)