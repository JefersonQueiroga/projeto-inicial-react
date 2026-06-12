import CardAluno from './components/CardAluno'
import CardCurso from './components/CardCurso'
import './components/CardAluno.css'
import './components/CardCurso.css'
import './components/Botao.css'
import './App.css'

function App() {

  return (
    <main className="app">
      <h1>Alunos</h1>
      <div className="lista-alunos">
        <CardAluno aluno="Ana Souza" curso="React Básico" cor="#4f46e5" />
        <CardAluno aluno="Bruno Lima" curso="JavaScript" cor="#059669" />
        <CardAluno aluno="Carla Mendes" curso="HTML e CSS" cor="#dc2626" />
      </div>

      <h1>Cursos</h1>
      <div className="lista-cursos">
        <CardCurso nome="React Básico" instrutor="João Silva" cargaHoraria={40} cor="#4f46e5" />
        <CardCurso nome="JavaScript" instrutor="Maria Oliveira" cargaHoraria={60} cor="#059669" />
        <CardCurso nome="HTML e CSS" instrutor="Pedro Santos" cargaHoraria={30} cor="#dc2626" />
      </div>

    </main>
  )
}

export default App
