class RutinaSchema {
    constructor(rutina) {
        this.id = rutina.id
        this.titulo = rutina.titulo
        this.servicio = rutina.servicio
        this.numeroAcciones = rutina.numeroAcciones
        this.targetURL = rutina.targetURL
        this.comandos = rutina.comandos
    }
}

module.exports = {RutinaSchema}