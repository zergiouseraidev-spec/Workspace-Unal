
import { Router } from "express"

const router = Router()

const hora = new Date().toLocaleTimeString('es-CO')

router.get("/contactos", (req, res) => res.render("contactos.ejs", {etiqueta: 'Pagina de contactos empresariales'}))
router.get("/sobre_nosotros", (req, res) => res.render("sobre_nosotros.ejs", {etiqueta: 'como conduzo'}))
router.get("/login", (req, res) => res.render("login.ejs", {etiqueta: 'Vista de inicio de sesión'}))
router.get("/menu", (req, res) => res.render("menu.ejs", {etiqueta: 'menu empresarial'}))
router.get("/", (req, res) => res.render("index.ejs", {etiqueta: 'Mi primer sitio web con nodeJS', hora:hora}))

export default router


const macbook = {

}

// ruta get para el login (unica con mensaje incluidos)
router.get("/login", (req, res) => {
    res.render("login.ejs", {etiqueta: 'Vista de inicio de sesión', mensaje: 'Bienvenido a la página de inicio de sesión'});
});

//ruta del post para procesar el login
router.post("/login", req, res) => {
    const { usuario, contrasena } = req.body;

    if (usuario === "admin" && contrasena === "1234") {
        return res.redirect("/menu");
    }
    return res.render("login.ejs", {etiqueta: 'Vista de inicio de sesión', mensaje: 'Usuario o contraseña es incorrecto'
    });
});

// boton crear usuario
router.get("/crear_usuario", (req, res) => {
    res.send("Aqui se mostrara el formulario para crear un nuevo usuario");
}); 

// 4. Enlace para restablecer la contraseña
router.get("/restablecer_contrasena", (req, res) => {
    res.send("Aqui vista para enviar el correo de recuperacion de contraseña");
});

// 5. Enlace para recordar usuario

