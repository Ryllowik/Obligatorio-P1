class Usuario {
    constructor(tip, nom, ape, user, pass, hab) {
        this.tipo = tip;
        this.nombre = nom;
        this.apellido = ape;
        this.username = user;
        this.password = pass;
        this.habilitado = hab;
    }
}
class Receta {
    constructor(id, aut, tit, img, tie, mg, nmg, verMg, verNmg, elab) {
        this.id = id;
        this.autor = aut;
        this.titulo = tit;
        this.imagen = img;
        this.tiempo = tie
        this.meGusta = mg;
        this.noMegusta = nmg;
        this.verificarMg = verMg
        this.verificarMg = verNmg
        this.elaboracion = elab;
    }
}

let usuarios = [
    new Usuario('chef', 'Franco', 'Waller', 'chef', 'chef-01', true),
    new Usuario('colaborador', 'Alisson', 'Lima', 'alima', 'a-lima', true),
    new Usuario('colaborador', 'Amelia', 'Mestre', 'amestre', 'a-mestre', true),
    new Usuario('colaborador', 'Nicolas', 'Olano', 'nolano', 'n-olano', true),
    new Usuario('colaborador', 'Cono', 'Aragones', 'caragones', 'c-aragones', true),
    new Usuario('colaborador', 'Patricia', 'Mestre', 'pmestre', 'p-mestre', true),]
let recetas = [
    new Receta(0, 'Franco Waller', 'Fainá de queso y panchos', 'receta1.jpg', 30, 6, 2, false, false, `En un bol batir huevos,agregar leche,queso rallado,harina,royal y revolver.Cortar panchos y agregarlos a la mezcla.Llevar a horno a 180 por 20 minutos`),
    new Receta(1, 'Franco Waller', 'Salsa blanca', 'receta2.jpg', 40, 8, 6, false, false, `Hervir leche en una olla.En una taza agregar aceite,harina y mezclar.Cuando la leche hierve agregar la mezcla y comenzar a revolver.`),
    new Receta(2, 'Franco Waller', 'Tuco', 'receta3.jpg', 45, 10, 1, false, false, `Poner la carne a freír, agregar la cebolla,el ajo y dejar cocinar,agregar una taza de agua caliente y agregar el puré de tomate.Dejar cocinar 20 min.`),
    new Receta(3, 'Franco Waller', 'Brochetas de cerdo', 'receta4.jpg', 80, 4, 6, false, false, `Cortar la carne en cubos y dejar marinar por 1 hora.Armar palillos con 3 y con 2 trozos de carne y llevar al horno.`),
    new Receta(4, 'Alisson Lima', 'Relleno para tacos', 'receta5.jpg', 20, 2, 6, false, false, `Cortar morrón,cebolla,zanahoria y saltear en una sartén.Cortar el lomo y agregar al salteado.Una vez cocida la carne agregar queso crema e integrar`),
    new Receta(5, 'Amelia Mestre', 'Bizcochuelo', 'receta6.jpg', 70, 6, 0, false, false, `Agregar huevos,azúcar en un recipiente, batir y agregar aceite,vainilla,harina. Vertir en molde y poner en el horno`),
    new Receta(6, 'Patricia Mestre', 'Chaw mien', 'receta7.jpg', 30, 0, 0, false, false, `Hervir agua para cocinar los fideos.Picamos las verduras.Luego Picamos la carne revoler todo.Saltear las verduras y la carne.Mezclar con la pasta`),
    new Receta(7, 'Nicolas Olano', 'Galletitas', 'receta8.jpg', 25, 0, 0, false, false, `Mezclar harina,azucar,huevos y manteca para preparar la maza, mezclar trozos de chocolate en la masa.Cortar la masa y poner en el horno`),
    new Receta(8, 'Alisson Lima', 'Cocada', 'receta9.jpg', 20, 0, 0, false, false, `Mezcle todos los ingredientes a fuego lento hasta que se despegue del fondo de la olla.Estire la cocada sobre una asadera.Espere que se enfríe.`),
    new Receta(9, 'Amelia Mestre', 'Onigiri', 'receta10.jpg', 30, 0, 0, false, false, `Hervir una taza de arroz,dejar que se enfrie y armar bolas de arroz,Formar un triangulo y agregar un pedazo de alga`),
    new Receta(10, 'Alisson Lima', 'Masas secas', 'receta11.jpg', 50, 0, 0, false, false, `Batir manteca,azúcar,yema y vainilla.Agregar harina,hasta formar la masa y dejar en heladera por 30min.Estirar la masa y cortar.Hornear por 10min.`),
    new Receta(11, 'Patricia Mestre', 'Carbonara', 'receta12.jpg', 10, 0, 0, false, false, `Batir huevos y agregar parmesano rallado.Saltear cebolla,tocino.Cocinar la pasta,colocar la pasta agregar tocino y cebolla y un chorro de aceite.`),
    new Receta(12, 'Alisson Lima', 'Pizza', 'receta13.jpg', 60, 0, 0, false, false, `Hacer la masa.Fritar los vegetles y agregar el pure de tomate.Estirar la masa y agregar la salsa, agregar queso y poner en el horno.`),
    new Receta(13, 'Cono Aragones', 'Tortas fritas', 'receta14.jpg', 40, 0, 0, false, false, `Colocar los ingredientes y agregar agua hasta formar una masa.Amasar por 10 min.Repartir en bollitos. Estirar las en forma redondas.Fritar en grasa`),
    new Receta(14, 'Nicolas Olano', 'Milasenas de berenjena', 'receta15.jpg', 35, 0, 0, false, false, `Pelar y cortar las berenjenas.Empanar por harina y avena.Pasarla por el huevo y a la freírlos en el sartén.`),
    new Receta(15, 'Nicolas Olano', 'Pan', 'receta16.jpg', 30, 0, 0, false, false, `Poner harina en un bowl con sal ya mezclado, en el medio hacer un hueco para agregar el agua con la levadura y el aceite disuelto.poner en el horno`),
    new Receta(16, 'Cono Aragones', 'Papas fritas', 'receta17.jpg', 15, 0, 0, false, false, `Pelar papas.Cortarlas en tiras.Fritarlas en una sarten. colarlas y agregar sal a gusto`),
    new Receta(17, 'Amelia Mestre', 'Pascualina', 'receta18.jpg', 30, 0, 0, false, false, `Hervir espinaca,picar y saltear con cebolla,morron,sal,condimento a gusto.Rellenar una tapa de masa colocar huevos tapo con la otra tapa de masa llevo a horno`),
    new Receta(18, 'Cono Aragones', 'Tarta de jamon y queso', 'receta19.jpg', 40, 0, 0, false, false, `Colocar la masa tapa en la asadera.Colocar una capa de jamon y una de queso.Llevar al horno por 30min`),
    new Receta(19, 'Alisson Lima', 'Tortilla de papas', 'receta20.jpg', 30, 0, 0, false, false, `Pelar y picar las papas.Fritarlas,luego dejar enfriar.Mezclar con huevo de cocinar en sarten.`),
]
let username
let password
let usuarioLogeado

$("#btnInicioSesion").click(function iniciarSesion() {
    username = $("#txtUsuario").val()
    password = $("#txtContraseña").val()
    if (username === "" && password === "") {
        alert("Por favor ingrese usuario y contraseña")
    } else {
        for (let i = 0; i < usuarios.length; i++) {
            if (username === usuarios[i].username && password === usuarios[i].password && !usuarios[i].habilitado) {
                alert("Usuario deshabilitado")
                break
            }
            if (username === usuarios[i].username && password === usuarios[i].password && usuarios[i].habilitado) {
                $("#inicioSesion").css("display", "none")
                $("#registerUser").css("display", "block")
                $("#volverMenu").css("display", "block")
                //muestra la seccion correspondiente al usuario logeado y esconde el resto
                switch (usuarios[i].tipo) {
                    case 'chef':
                        $(".chefUser").css("display", "block")
                        usuarioLogeado = `${usuarios[i].nombre} ${usuarios[i].apellido}` //guarda el usuario logeado
                        alert(usuarioLogeado)
                        mostrarListaRecetas()
                        mostrarUsuarios()
                        break;
                    case 'colaborador':
                        $(".chefUser").css("display", "none")
                        $(".colabUser").css("display", "block")
                        usuarioLogeado = `${usuarios[i].nombre} ${usuarios[i].apellido}`//guarda el usuario logeado
                        alert(usuarioLogeado)
                        break;
                }
                break
            } else {
                //alerta si el usuario ingresado no es correcto
                if (i === usuarios.length - 1) {
                    alert('usuario y/o contraseña incorrectos')
                }
            }
        }
    }

})

$("#btnUserfinal").click(function () {
    $("#finalUser").css("display", "block")
    $("#volverMenu").css("display", "block")
    $("#inicioSesion").css("display", "none")
    mostrarRecetas()
})

$("#btnBuscar").click(function () {
    let txtBuscar = $("#buscarReceta").val().toLowerCase()
    if (txtBuscar === "") {
        alert("ungrese un titulo o elaboracion para buscar")
    } else {
       buscarReceta(txtBuscar) 
    }
})

$("#btnClear").click(function () {
    mostrarRecetas()
})

$("#btnVolver").click(function () {
    $("#finalUser").css("display", "none")
    $("#registerUser").css("display", "none")
    $("#volverMenu").css("display", "none")
    $("#inicioSesion").css("display", "block")
})

$("body").on("click", ".meGusta", function () {
    let index = $(this).attr("data-index")
    meGusta(index)
    listaRecetascont()
})

$("body").on("click", ".noMegusta", function () {
    let index = $(this).attr("data-index")
    noMegusta(index)
    listaRecetascont()
})

$("#btnReceta").click(function () {
    let title = $("#txtTitulo").val()
    let image = $("#fleImg").val().replace("C:\\fakepath\\", "") //obtiene el nombre del archivo en lugar de la ruta
    let time = Number($("#txtTiempo").val())
    let recipe = $("#txtElab").val()
    if (title === "" || image === "" || time === "" || recipe === "") {
        alert("Por favor llene todos los campos")
    } else {
        registrarReceta(title, image, time, recipe)
        mostrarRecetas()
        mostrarListaRecetas()
    }

})

$("#btnRegistrar").click(function () {
    let nombre = $("#txtNombre").val().toLowerCase()
    let apellido = $("#txtApellido").val().toLowerCase()
    if (nombre === "" || apellido === "") {
        alert("Por favor llene todos los campos")
    } else {
        registrarUsuario(nombre, apellido)
    }

})
$("body").on("click", ".habilitar", function () {
    let index = $(this).attr("data-index")
    habilitarUsuario(index)
    mostrarRecetas()
    listaRecetascont()
})
$("body").on("click", ".deshabilitar", function () {
    let index = $(this).attr("data-index")
    deshabilitarUsuario(index)
    mostrarRecetas()
    listaRecetascont()
})

$("#btnBuscarTiempo").click(function () {
    let tiempoAbuscar = $("#txtBuscarTiempo").val()
    if (tiempoAbuscar === "") {
        alert("Por favor ingrese un valor")
    } else {
        tiempoAbuscar = Number(tiempoAbuscar)
        if (isNaN(tiempoAbuscar)) {
            alert("Por favor ingrese un valor numerico")
        } else {
            buscarTiempo(tiempoAbuscar)
        }
        
    }
})

$("#btnOrdenarTiempo").click(function () {
    ordenarRecetasTiempo()
})

$("#btnOrdenarRendimiento").click(function () {
    ordenarRecetasRendimiento()
})

$("#btnOrdenarLimpiar").click(function () {
    mostrarListaRecetas()
})

function habilitarUsuario(index) {
    usuarios[index].habilitado = true
    $(`#usuario${index}`).find(".status").html(`Status: Habilitado`)
}

function deshabilitarUsuario(index) {
    usuarios[index].habilitado = false
    $(`#usuario${index}`).find(".status").html(`Status: Deshabilitado`)
}

function buscarTiempo(tiempo) {
    let cantidadMayor = 0
    let cantidadMenor = 0
    for (let i = 0; i < recetas.length; i++) {
        if (tiempo > recetas[i].tiempo) {
            cantidadMayor = cantidadMayor + 1
        } else {
            cantidadMenor = cantidadMenor + 1
        }
    }
    $("#mayorTiempo").html(`${cantidadMayor} recetas mayores a ${tiempo} minutos`)
    $("#menorTiempo").html(`${cantidadMenor} recetas menores o iguales a ${tiempo} minutos`)
}

function ordenarRecetasTiempo() {
    let tiempoMayor = 0
    let tiempoMenor = Number.POSITIVE_INFINITY
    $("#listaRecetascont").html("")
    //busca el tiempo mayor y el menor de entre todas las recetas
    for (let i = 0; i < recetas.length; i++) {
        if (recetas[i].tiempo > tiempoMayor) {
            tiempoMayor = recetas[i].tiempo
        }
        if (recetas[i].tiempo < tiempoMenor) {
            tiempoMenor = recetas[i].tiempo
        }
    }
    // mientras el tiempo mayor y el menor no seas iguales recorre el arreglo buscando una receta con ese tiempo
    while (tiempoMayor >= tiempoMenor) {
        for (let i = 0; i < recetas.length; i++) {
            //si encuentra un tiempo que coincida muestra la receta
            if (recetas[i].tiempo === tiempoMayor) {
                let rendimiento
                if (recetas[i].meGusta + recetas[i].noMegusta === 0) {
                    rendimiento = `No corresponde`
                } else {
                    rendimiento = `${Math.round((recetas[i].meGusta * 100) / (recetas[i].meGusta + recetas[i].noMegusta))}% rendimiento`
                }
                $("#listaRecetascont").append(`
                    <div class="col-12 my-3 bg-light">
                        <div class="row">
                            <div class="col-2 my-auto">
                                <h4>${recetas[i].titulo}</h4>
                            </div>
                            <div class="col-2 my-auto">
                                <img src="img/${recetas[i].imagen}" class="w-100" alt="">
                            </div>
                            <div class="col-2 my-auto">
                                <h4>${recetas[i].tiempo} minutos de preparacion</h4>
                            </div>
                            <div class="col-2 my-auto">
                                <h4>${recetas[i].meGusta} Me gusta</h4>
                            </div>
                            <div class="col-2 my-auto">
                                <h4>${recetas[i].noMegusta} No me gusta</h4>
                            </div>
                            <div class="col-2 my-auto">
                                <h4>${rendimiento}</h4>
                            </div>
                        </div>
                    </div>
                `)
            }

        }
        //resta uno al tiempo maximo en caso de no encontrar una receta con ese tiempo
        tiempoMayor = tiempoMayor - 1
    }
}

function ordenarRecetasRendimiento() {
    let rendimientoMayor = 100
    $("#listaRecetascont").html("")
    while (rendimientoMayor > 0) {
        for (let i = 0; i < recetas.length; i++) {
            let rendimientoNumero = Math.round((recetas[i].meGusta * 100) / (recetas[i].meGusta + recetas[i].noMegusta))
            //busca una receta que coincida con el rendimiento mayor y la mustra en caso de encontrarla
            if (recetas[i].meGusta + recetas[i].noMegusta !== 0 && rendimientoNumero === rendimientoMayor) {
                let rendimiento = `${rendimientoNumero}% rendimiento`
                $("#listaRecetascont").append(`
                    <div class="col-12 my-3 bg-light">
                        <div class="row">
                            <div class="col-2 my-auto">
                                <h4>${recetas[i].titulo}</h4>
                            </div>
                            <div class="col-2 my-auto">
                                <img src="img/${recetas[i].imagen}" class="w-100" alt="">
                            </div>
                            <div class="col-2 my-auto">
                                <h4>${recetas[i].tiempo} minutos de preparacion</h4>
                            </div>
                            <div class="col-2 my-auto">
                                <h4>${recetas[i].meGusta} Me gusta</h4>
                            </div>
                            <div class="col-2 my-auto">
                                <h4>${recetas[i].noMegusta} No me gusta</h4>
                            </div>
                            <div class="col-2 my-auto">
                                <h4>${rendimiento}</h4>
                            </div>
                        </div>
                    </div>
                `)
            }
        }
        rendimientoMayor = rendimientoMayor - 1
    }
}

function registrarReceta(tit, img, time, recipe) {
    //verifica que el tiempo ingresado sea un numero y en caso de que lo sea agrega la nueva receta
    if (!isNaN(time)) {
        //si el usuario es el chef agrega la receta al inicio del arreglo
        if (usuarioLogeado === "Franco Waller") {
            recetas.unshift(new Receta(recetas.length, usuarioLogeado, tit, img, time, 0, 0, false, false, recipe))
            alert("Se ha registrado la receta con exito")
        }
        //si el usuario es colaborador agrega la receta al final del arreglo
        else {
            recetas.push(new Receta(recetas.length, usuarioLogeado, tit, img, time, 0, 0, false, false, recipe))
            alert("Se ha registrado la receta con exito")
        }
    } else {
        alert("ingrese un valor de tiempo valido")
    }

}

function registrarUsuario(name, lastname) {
    //crea el usuario a partir de la primera letra del nombre y el apellido
    let usuario = `${name.charAt(0)}${lastname}`
    let numero = 1
    let usuarioTemp = usuario
    //chequea si ya existe un usuario asi y en caso de que lo haga le agrega un nuemero al final
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarioTemp === usuarios[i].username) {
            usuarioTemp = `${usuario}${numero}`
            numero = numero + 1
        }
    }
    usuario = usuarioTemp
    let contrasena = `${name.charAt(0)}-${lastname}`
    name = `${name[0].toUpperCase()}${name.slice(1)}`//Capitaliza el nombre, agrega mayuscula a la primera letra
    lastname = `${lastname[0].toUpperCase()}${lastname.slice(1)}`//Capitaliza el nombre, agrega mayuscula a la primera letra
    //agrega el usuaio al arreglo
    usuarios.push(new Usuario('colaborador', name, lastname, usuario, contrasena, true))
    alert(`Usuario Creado \nUsuario: ${usuario} \nContraseña: ${contrasena}`)
    mostrarUsuarios()
}

function mostrarUsuarios() {
    $("#usuarioCont").html("")
    let status
    for (let i = 1; i < usuarios.length; i++) {
        if (usuarios[i].habilitado === true) {
            status = "Habilitado"
        } else {
            status = "Deshabilitado"
        }
        $("#usuarioCont").append(`
            <div class="d-flex bg-light my-3 p-3" id="usuario${i}">
                <h6 class="mr-5">${usuarios[i].nombre} ${usuarios[i].apellido}</h6>
                <h6 class="mr-5 status">Status: ${status}</h6>
                <button class="btn btn-success mr-5 habilitar" data-index="${i}">Habilitar</button>
                <button class="btn btn-danger mr-5 deshabilitar" data-index="${i}">Deshabilitar</button>
            </div>
        `)
    }

}

function mostrarRecetas() {
    $("#recetasCont").html("")
    let index
    for (let i = 0; i < recetas.length; i++) {
        let autor = recetas[i].autor
        let nombre = autor.split(" ")
        console.log(autor)
        console.log(nombre)
        //obtiene el index del autor
        for (let j = 0; j < usuarios.length; j++) {
            if (nombre[0] === usuarios[j].nombre && nombre[1] === usuarios[j].apellido) {
                index = j
                console.log(j)
                break
            }
        }
        console.log(index)
        console.log(usuarios[index])
        //chequea si el autor esta habilitado
        //escribe, siguiendo esta estructura, todas las recetas registradas
        if (recetas[index].autor === "Franco Waller" || usuarios[index].habilitado) {
            $("#recetasCont").append(`
                <div class="col-12 mt-5 bg-light" id="receta${i}">
                    <div class="row justify-content-center">
                        <div class="col-8">
                            <h1>${recetas[i].titulo}</h1>
                            <h4>${recetas[i].autor}</h4>
                        </div>
                        <div class="col-12 text-center">
                            <img src="img/${recetas[i].imagen}" alt="">
                        </div>
                        <div class="col-8 mt-3">
                            <div class="text-right">
                                <h4>${recetas[i].tiempo} minutos de elaboracion</h4>
                            </div>
                        </div>
                        <div class="col-8">
                            <p>${recetas[i].elaboracion}</p>
                        </div>
                        <div class="col-8 my-3">
                            <div class="row">
                                <div class="col-3 text-center">
                                    <a href="javascript:void(0)" class="btn btn-success meGusta" data-index="${i}">Me gusta</a>
                                </div>
                                <div class="col-3">
                                    <h4 class="mgTxt">${recetas[i].meGusta}</h4>
                                </div>
                                <div class="col-3 text-right">
                                    <h4 class="nmgTxt">${recetas[i].noMegusta}</h4>
                                </div>
                                <div class="col-3 text-center">
                                    <a href="javascript:void(0)" class="btn btn-danger noMegusta" data-index="${i}">No me gusta</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `)
        }
    }
}

function mostrarListaRecetas() {
    $("#listaRecetascont").html("")
    let index
    for (let i = 0; i < recetas.length; i++) {
        let autor = recetas[i].autor
        let nombre = autor.split(" ")
        //obtiene el index del autor
        for (let j = 0; j < usuarios.length; j++) {
            if (nombre[0] === usuarios[j].nombre) {
                index = j
                break
            }
        }
        //chequea si el autor esta habilitado
        //escribe, siguiendo esta estructura, todas las recetas registradas
        if (recetas[index].autor === "Franco Waller" || usuarios[index].habilitado) {
            let rendimiento
            if (recetas[i].meGusta + recetas[i].noMegusta === 0) {
                rendimiento = `No corresponde`
            } else {
                rendimiento = `${Math.round((recetas[i].meGusta * 100) / (recetas[i].meGusta + recetas[i].noMegusta))}% rendimiento`
            }
            $("#listaRecetascont").append(`
                <div class="col-12 my-3 bg-light">
                    <div class="row">
                        <div class="col-2 my-auto">
                            <h4>${recetas[i].titulo}</h4>
                        </div>
                        <div class="col-2 my-auto">
                            <img src="img/${recetas[i].imagen}" class="w-100" alt="">
                        </div>
                        <div class="col-2 my-auto">
                            <h4>${recetas[i].tiempo} minutos de preparacion</h4>
                        </div>
                        <div class="col-2 my-auto">
                            <h4>${recetas[i].meGusta} Me gusta</h4>
                        </div>
                        <div class="col-2 my-auto">
                            <h4>${recetas[i].noMegusta} No me gusta</h4>
                        </div>
                        <div class="col-2 my-auto">
                            <h4>${rendimiento}</h4>
                        </div>
                    </div>
                </div>
            `)
        }
    }
}

function buscarReceta(txt) {
    let tituloAbuscar
    let elabAbuscar
    let noEncontroResultado = true
    for (let i = 0; i < recetas.length; i++) {
        tituloAbuscar = recetas[i].titulo.toLowerCase()
        elabAbuscar = recetas[i].elaboracion.toLowerCase()
        //busca si el texto ingresado coincide con alguna parte del titulo o elaboracion de alguna
        //receta y da la posicion, en caso de que el resultado sea -1 significa que no se encontro resultado
        if (tituloAbuscar.indexOf(txt) === -1 && elabAbuscar.indexOf(txt) === -1) {
            $(`#receta${i}`).css("display", "none")
        } else {
            $(`#receta${i}`).css("display", "block")
            noEncontroResultado = false
        }
    }
    if (noEncontroResultado) {
        $("#noResultado").css("display", "block")
    }
}

function meGusta(index) {
    //verifica que no se alla dado me gusto o no me gusta anteriormente y suma uno al clikear
    if (!recetas[index].verificarMg && !recetas[index].verificarNmg) {
        recetas[index].meGusta = recetas[index].meGusta + 1
        recetas[index].verificarMg = true
    }
    //verifica que si se dio me gusta anteriormente y al volver a hacer click resta uno
    else if (recetas[index].verificarMg && !recetas[index].verificarNmg) {
        recetas[index].meGusta = recetas[index].meGusta - 1
        recetas[index].verificarMg = false
    }
    //verifica que si se dio no me gusta anteriormente y suma uno a me gusta y resta uno a no me gusta
    else if (!recetas[index].verificarMg && recetas[index].verificarNmg) {
        recetas[index].meGusta = recetas[index].meGusta + 1
        recetas[index].verificarMg = true
        recetas[index].noMegusta = recetas[index].noMegusta - 1
        recetas[index].verificarNmg = false
    }
    //actualiza los valores en pantalla
    $(`#receta${index}`).find(".mgTxt").html(recetas[index].meGusta)
    $(`#receta${index}`).find(".nmgTxt").html(recetas[index].noMegusta)
}

function noMegusta(index) {
    //verifica que no se alla dado me gusto o no me gusta anteriormente y suma uno al clikear
    if (!recetas[index].verificarMg && !recetas[index].verificarNmg) {
        recetas[index].noMegusta = recetas[index].noMegusta + 1
        recetas[index].verificarNmg = true
    }
    //verifica que si se dio no me gusta anteriormente y al volver a hacer click resta uno
    else if (!recetas[index].verificarMg && recetas[index].verificarNmg) {
        recetas[index].noMegusta = recetas[index].noMegusta - 1
        recetas[index].verificarNmg = false
    }
    //verifica que si se dio no me gusta anteriormente y suma uno a no me gusta y resta uno a me gusta
    else if (recetas[index].verificarMg && !recetas[index].verificarNmg) {
        recetas[index].meGusta = recetas[index].meGusta - 1
        recetas[index].verificarMg = false
        recetas[index].noMegusta = recetas[index].noMegusta + 1
        recetas[index].verificarNmg = true
    }
    //actualiza los valores en pantalla
    $(`#receta${index}`).find(".mgTxt").html(recetas[index].meGusta)
    $(`#receta${index}`).find(".nmgTxt").html(recetas[index].noMegusta)
}

