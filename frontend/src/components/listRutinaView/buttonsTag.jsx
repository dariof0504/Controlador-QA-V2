export const ButtonsTag = ({id}) => {

  const handleEdit = (e) => {
    e.preventDefault()
    console.log('Se va a editar esta rutina' + ` ${id}`)
  }

  const handleDelete = () => {
    console.log('Se va a eliminar')
  }

  return (
    <div>
      <button onClick={handleDelete} >Editar</button>
      <button onClick={e => handleEdit(e)} >Eliminar</button>
    </div>
  )
}
