function Botao({ label, cor, onClick }) {
  return (
    <button
      className="botao"
      style={{ backgroundColor: cor }}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Botao
