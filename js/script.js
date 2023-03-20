// Fecha y hora de finalización de la cuenta regresiva (12 de junio de 2024 a las 00:00:00)

var countDownDate = new Date("June 12, 2024 00:00:00").getTime();

// Actualiza el tiempo restante cada segundo
var x = setInterval(function () {
    // Calcula el tiempo restante
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Calcula los días, horas, minutos y segundos restantes
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el tiempo restante en el elemento HTML
    document.getElementById("reloj").innerHTML =
        days +
        " Días " +
        hours +
        " Hs " +
        minutes +
        " Min " +
        seconds +
        " Seg ";

    // Si la cuenta regresiva ha terminado, muestra un mensaje
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("reloj").innerHTML = "la fecha ya paso";
    }
}, 1000);

const formatoHora = (horas) => {
    if (horas < 10) {
        horas = `0${horas}`;
    }
    return horas;
};
setInterval(mostrarReloj, 1000);

// simpleparallax background
const background = document.getElementsByTagName("body");

new simpleParallax(background.style.backgroundImage, { scale: 5, delay: 0.6 });


// evento google calendar

function createEvent() {
  // Obtener la fecha y hora del evento
  var date = new Date('2024-06-12T09:00:00-07:00');
  var endDate = new Date('2024-06-12T10:00:00-07:00');
  
  // Crear la URL del evento de Google Calendar
  var url = 'https://www.google.com/calendar/event?action=TEMPLATE&dates=' +
            date.toISOString().replace(/-|:|\.\d+/g, '') + '/' + endDate.toISOString().replace(/-|:|\.\d+/g, '') +
            '&text=Mi+evento+en+Google+Calendar&details=Descripción+del+evento.&location=Lugar+del+evento';
  
  // Abrir la ventana para crear el evento en Google Calendar
  window.open(url);
}