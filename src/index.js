console.log("Hola mundo!")

import express from "express"
import { dirname, join } from "path"
import { fileURLToPath } from "url"
import rutasdenavegacion from "./routes/index.js"
import indexRoutes from './routes/index.js'
import authRoutes from './routes/autentitacion.js'


const app = express()

//Ruta absoluta para la carpeta views

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname, "views"))

//rutas para llamar la aplicacion
app.use(rutasdenavegacion)
app.use(authRoutes)

//Ruta de la carpeta public para los archivos estaticos (ccss, js, imagenes)
app.use(express.static(join(__dirname, "public")))

//Ruta para inciar el servidor y escuchar en el puerto 5000
app.listen(5000)
console.log("El servidor esta escuchando y esta en el puerto", 5000);

app.set("views", join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(indexRoutes)  



