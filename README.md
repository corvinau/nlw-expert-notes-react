# Expert Notes

## Sobre

Esse projeto é uma aplicação web que permite que os usuários possam criar notas sobre assuntos variados, podendo ser por meio de texto ou áudio.

Ele foi construído durante o evento Next Level Week Expert da Rocketseat, na trilha de ReactJS.

## Explicação do uso do projeto

As notas podem ser criadas por meio de texto ou áudio. Para criar uma nota por áudio, basta clicar no botão de iniciar gravação e falar o conteúdo da nota. Após terminar de falar, clique no botão de parar gravação. A nota será criada com o conteúdo falado e poderá ser editada antes de ser salva, garantindo que a nota esteja correta.

As notas podem ser excluídas clicando no botão de excluir na nota desejada.

As notas foram salvas no localStorage do navegador, garantindo que as notas criadas estejam sempre disponíveis, mesmo após fechar a aplicação.

## Iniciando a aplicação

As instruções abaixo vão lhe permitir obter uma cópia do projeto e rodar a aplicação localmente para desenvolvimento e testes.

### Pre-requisitos

Para rodar a aplicação, você precisa ter o Node.js instalado na sua máquina.

### Instalação

Para acessar o projeto, basta clonar o repositório ou realizar o download dos arquivos do projeto.

Após clonar o repositório, acesse a pasta do projeto e instale as dependências utilizando o seguinte comando no seu terminal:

```sh
npm install
```

Após instalar as dependências, utilize o seguinte comando no seu terminal para iniciar a aplicação:

```sh
npm run dev
```

Com isso, a aplicação estará rodando em <code>http://localhost:5173</code>. Para acessar a aplicação, basta acessar esse endereço no seu navegador.

## Tecnologias utilizadas

- <b>ReactJS:</b> Biblioteca de JavaScript para construção de interfaces.
- <b>TypeScript:</b> Superset de JavaScript que adiciona tipagem estática ao código.
- <b>Tailwind:</b> Framework de estilização.
- <b>Vite:</b> Build tool para aplicações web.
- <b>Radix UI:</b> Biblioteca de componentes web sem estilização própria.
- <b>Lucide React:</b> Biblioteca de ícones.
- <b>Sonner:</b> Biblioteca de notificações tipo toast.
- <b>SpeechRecognition API:</b> API de reconhecimento de voz do navegador.
