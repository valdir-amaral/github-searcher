# Procurador de Github

Esse projeto tem como objetivo procurar perfis do Github pela API oficial da plataforma. É possível visualizar se o usuário existe, seu nome, bio e, caso exista, um link que redireciona para o seu perfil e site pessoal.

## Pontos adicionados

### Tela de carregamento (loader)

Ao iniciar o app OU ao consultar algum perfil, um loader é adicionado no HTML com uma animação em svg da logo do Github. Peguei essa animação [daqui](https://codepen.io/jasonlong/pen/BroQEY).

### Botões de navegação

Quando um perfil é carregado, um botão para acessar sua página é gerado automaticamente e, se o usuário tiver um site pessoal, também é gerado um botão para acessá-lo.

### Validação no input 

Caso o usuário insira no campo de texto um valor nulo, o front-end não permite a continuação e é exibida uma mensagem de erro em vermelho.


## Sobre o ambiente de desenvolvimento

Esse projeto foi criado com o [Create React App](https://github.com/facebook/create-react-app).

### Scripts

Para iniciar o projeto localmente, você pode rodar o comando:

`npm start`

Roda o projeto no modo de desenvolvimento.\
Abra o seu navegador em [http://localhost:3000](http://localhost:3000) to visualizar o projeto rodando em tempo real.

### Saiba mais

Você pode aprender mais na documentação do [Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

