const { io } = require('../server')


io.on('connection', (client) => {
    console.log('Usuario conectado')

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        message: 'Bienvenido a esta aplicacion'
    })


    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })

    //Escuchar el cliente
    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);

        client.broadcast.emit('enviarMensaje', {
            servidor: {
                mensaje
            }
        })






        // if (mensaje.usuario) {
        //     callback({
        //         response: 'Todo salio bien'
        //     })
        // } else {
        //     callback({
        //         response: 'Todo salio mal'
        //     })
        // }
    })

})