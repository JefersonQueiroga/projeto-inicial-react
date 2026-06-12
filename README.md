# Projeto Inicial React

Projeto base da disciplina para praticar componentes em React.

## Pré-requisitos (Windows)

Antes de começar, instale:

1. **Node.js** (versão 18 ou superior) — https://nodejs.org
   - Baixe o instalador **LTS** e siga o passo a passo.
2. **Git** — https://git-scm.com/download/win

Para verificar se instalou corretamente, abra o **Prompt de Comando** (CMD) ou **PowerShell** e digite:

```bash
node -v
npm -v
git --version
```

## Como rodar o projeto

### 1. Baixar o projeto

Abra o **Prompt de Comando** na pasta onde quer salvar o projeto e execute:

```bash
git clone https://github.com/JefersonQueiroga/projeto-inicial-react.git
```

> Se preferir, você também pode baixar o ZIP direto pelo GitHub clicando em **Code > Download ZIP** e extrair.

### 2. Entrar na pasta do projeto

```bash
cd projeto-inicial-react
```

### 3. Instalar as dependências

```bash
npm install
```

> Esse comando pode demorar alguns minutos na primeira vez.

### 4. Rodar o projeto

```bash
npm run dev
```

O terminal vai mostrar um endereço parecido com:

```
Local: http://localhost:5173/
```

Abra esse endereço no navegador para ver o projeto rodando.

Para **parar** o servidor, pressione `Ctrl + C` no terminal.

## Estrutura do projeto

```
projeto-inicial-react/
├── src/
│   ├── components/   -> componentes React (CardAluno, CardCurso, Botao)
│   ├── App.jsx       -> componente principal
│   └── main.jsx      -> ponto de entrada
└── package.json      -> dependências do projeto
```
