class SessionSchema {
    constructor (session) {
        this.pk_id_session = session.pk_id_session
        this.titulo = session.titulo
        this.rutinasPorEjecutar = session.rutinasPorEjecutar
    }
}

class ListSessionSchema {
    constructor (session) {
        this.titulo = session.titulo
        this.pk_id_session = session.pk_id_session
    }
}

module.exports = {
    SessionSchema,
    ListSessionSchema
}