var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes; // Esta función genera la lista de estudiantes
}

function Estudiante(nombre, porTec, porHse) { // Objeto estudiante
    this.nombre = nombre;
    this.porcentajeTecnico = porTec;
    this.porcentajeHse = porHse;
}; 

function agregarEstudiante() { // DONE
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre = prompt("Ingrese el nombre de la estudiante");
    var porTec = prompt("Ingrese el Prcentaje Técnio");
    var porHse = prompt("Ingrese el porcentaje de Habilidades Socio-Emocionales");

    var _estudiante = new Estudiante(nombre, porTec, porHse);
    estudiantes.push(_estudiante);

    return _estudiante;
}

function mostrar(estudiante) { // DONE
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.porcentajeTecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.porcentajeHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista de los estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    // forEach y devolverlo en un arreglo como el ejemplo anterior
    var resultado = "";
    estudiantes.forEach(function addStudent(value) {
        resultado += "<div class='row'>";
        resultado += "<div class='col m12'>";
        resultado += "<div class='card blue-grey darken-1'>";
        resultado += "<div class='card-content white-text'>";
        resultado += "<p><strong>Nombre:</strong> " + value.nombre + "</p>";
        resultado += "<p><strong>Puntos Técnicos:</strong> " + value.porcentajeTecnico + "</p>";
        resultado += "<p><strong>Puntos HSE:</strong> " + value.porcentajeHse + "</p>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";

    })
    return resultado;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    return estudiantes.filter(function (estudiante) {
        if (nombre.toLowerCase() == estudiante.nombre.toLowerCase()) {

            return true
        } else {
            return false
        };
    })
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    //
    return estudiantes.sort(function (var1, var2) {
        return var2.porcentajeTecnico - var1.porcentajeTecnico;
    })
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    return estudiantes.sort(function (var1, var2) {
        return var2.porcentajeHse - var1.porcentajeHse;
    })

}