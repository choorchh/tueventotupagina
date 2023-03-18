 // Fecha y hora de finalización de la cuenta regresiva (12 de junio de 2024 a las 00:00:00)
 var countDownDate = new Date("June 12, 2024 00:00:00").getTime();

 // Actualiza el tiempo restante cada segundo
 var x = setInterval(function() {

   // Calcula el tiempo restante
   var now = new Date().getTime();
   var distance = countDownDate - now;

   // Calcula los días, horas, minutos y segundos restantes
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Muestra el tiempo restante en el elemento HTML
   document.getElementById("reloj").innerHTML = days + "d " + hours + "h "
   + minutes + "m " + seconds + "s ";

   // Si la cuenta regresiva ha terminado, muestra un mensaje
   if (distance < 0) {
     clearInterval(x);
     document.getElementById("reloj").innerHTML = "la fecha ya paso";
   }
 }, 1000);

const formatoHora = (hours) =>{
    if(hours < 10){
        hours = `0${hours}`;
    }
    return hours;
}
setInterval(mostrarReloj, 1000);