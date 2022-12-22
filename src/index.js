import app from './app.js'
import { PORT } from './config.js'

// poner a escuchar el servidor
app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ' + PORT)
})
