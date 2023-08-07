class ComandoSchema {
    constructor (comando) {
        this.index = comando.index
        this.titulo = comando.titulo
        this.tipoDeDato = comando.tipoDeDato
        this.command = comando.command
        this.location = comando.location
        this.typeLocation = comando.typeLocation
        this.value = comando.value

        this.propClick = comando.propClick
        this.propType = comando.propType
    }
}

module.exports = {ComandoSchema}