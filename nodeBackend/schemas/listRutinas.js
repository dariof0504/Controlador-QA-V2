class IndividualRutinaSchema {
  constructor(rutina) {
    this.pk_id_rutina = rutina.pk_id_rutina
    this.titulo = rutina.titulo
  }
}

class ListRutinaSchema {
  constructor(listaRutina) {
    this.lista = listaRutina.map(rutina => new IndividualRutinaSchema(rutina))
  }
  returnList() {
    return this.lista
  }
}

module.exports = { ListRutinaSchema };
