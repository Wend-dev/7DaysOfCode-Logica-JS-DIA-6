# Lista de Compras Interativa

Este é um projeto simples de lista de compras em JavaScript, onde o usuário pode adicionar, remover e organizar itens de compras em categorias. O objetivo é criar uma interação dinâmica com o usuário utilizando arrays, prompts e alerts.

## Funcionalidades

- **Adicionar Itens**: O programa permite ao usuário adicionar itens à lista de compras e escolher a categoria (ex: Frutas, Laticínios, Congelados, Doces, etc.).
- **Remover Itens**: Caso o usuário deseje, ele pode remover itens da lista. O programa verifica se o item existe e confirma sua remoção.
- **Exibir Lista Organizada**: Ao final, o programa exibe a lista de compras organizada por categoria (Frutas, Laticínios, etc.).
- **Validação de Entrada**: O programa valida se a lista está vazia antes de permitir a remoção de itens.

## Como Funciona

1. O programa começa perguntando ao usuário se ele deseja adicionar ou remover itens da lista de compras.
2. Para **adicionar itens**, o usuário escolhe uma categoria e insere o nome do item. Ele pode continuar adicionando itens ou optar por ver a lista.
3. Para **remover itens**, o usuário pode ver a lista de compras, escolher um item a ser removido e confirmar a remoção.
4. O programa exibe a lista final com os itens organizados por categoria.

## Tecnologias Usadas

- **JavaScript**: Para lógica de programação e interatividade com o usuário.
- **Arrays**: Para armazenar os itens da lista de compras e suas respectivas categorias.

## Como Usar

1. Abra um editor de código de sua escolha ou o console do navegador.
2. Crie um arquivo HTML e adicione o código JavaScript.
3. Abra o arquivo HTML em um navegador para interagir com o programa.
4. O programa fará perguntas ao usuário utilizando `prompt` e exibirá respostas utilizando `alert`.

## Exemplo de Interação

- **Pergunta**: Você deseja adicionar ou remover um item da lista de compras? (sim ou não)
- **Adicionar**: 
  - **Categoria**: Frutas
  - **Item**: Banana
- **Remover**:
  - O programa exibe todos os itens da lista e permite ao usuário escolher um para remover.
  
Após isso, o programa exibe a lista final organizada.

## Melhorias Futuras

- **Interface Gráfica**: Criar uma interface utilizando HTML e CSS.
- **Persistência de Dados**: Armazenar a lista de compras no `localStorage` para persistir os dados entre as sessões do navegador.
- **Funcionalidades Extras**: Adicionar ordenação ou filtragem por categoria.
