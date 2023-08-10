class RutinaSchema {
    constructor(rutina) {
        this.pk_id_rutina = rutina.pk_id_rutina
        this.titulo = rutina.titulo
        this.servicio = rutina.servicio
        this.numeroAcciones = rutina.numeroAcciones
        this.targetURL = rutina.targetURL
        this.comandos = rutina.comandos
    }
}

module.exports = {RutinaSchema}