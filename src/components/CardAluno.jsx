function CardAluno({ curso, aluno, cor }) {
  return (
    <div className="card-aluno" style={{ backgroundColor: cor }}>
      <h2>{aluno}</h2>
      <p>{curso}</p>
    </div>
  )
}

export default CardAluno
