var socket = io()
    //Los on son para escuchar suscesos
socket.on('connect', function() {
    console.log('Conectado al servidor')
})
socket.on('disconnect', function() {
        console.log('Perdimos conexion con el servidor');
    })
    //Los emits son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Daniel Lopez',
    message: 'Hola mundo'
}, function(response) {
    console.log(response);
})

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
})