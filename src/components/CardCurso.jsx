function CardCurso({ nome, instrutor, cargaHoraria, cor }) {
  return (
    <div className="card-curso" style={{ borderTopColor: cor }}>
      <h2>{nome}</h2>
      <p className="instrutor">Instrutor: {instrutor}</p>
      <span className="carga-horaria">{cargaHoraria}h</span>
    </div>
  )
}

export default CardCurso
