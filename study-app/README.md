# Sobre
### Este aplicativo é um aplicativo de lembretes feitos com o Professor Kelson na aula de dispositivos móveis.

# Funcionalidades

<ul>
    <li>Autenticação via Firebase</li>
    <li>Lembretes com fases de andamento</li>
    <li>Edição dos cartões lembretes</li>
    <li>Exclusão ou adição de novos cartões com as tarefas</li>
</ul>

<br>

# Estrutura de pastas :file_folder:

## Configuração firebase

A configuração do Firebase usada para autenticação está na firebaseConfig.js, ela puxa os dados armazenados em um arquivo .env que fazem troca de informações com o Firebase, e então uma variável é criada para armazazenar os dados que serão usados para realizar a comunicação entre o aplicativo e o banco de dados.

## Contextos

### Contexto de autenticação :bust_in_silhouette:

Na pasta AuthContext.js é feito como acontece a autenticação de usuário, que inicial começa como vazio, após feito a autenticação do mesmo, o estado de usuário muda para logado quando é feito o seu registro, e também contém como acontece o Logout, onde o estado muda novamente para vazio, ou seja, sem nenhum usuário logado.

### Contexto dos cartões de estudo :notebook_with_decorative_cover:

No CartoesEstudoContext.js é onde são feitos os cartões de estudo usando a autenticação do usuário, onde se cria os cartões, apaga e edita os mesmos, a partir deste contexto so cartões podem ser mandados para o banco de dados aparecendo para seus respectivos usuários.





