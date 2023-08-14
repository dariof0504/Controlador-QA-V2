class ExecuteSchema {
    constructor (session) {
        this.targetURL = session.targetURL
        this.servicio = session.servicio
        this.comandos = session.comandos
    }
}

module.exports = {ExecuteSchema}