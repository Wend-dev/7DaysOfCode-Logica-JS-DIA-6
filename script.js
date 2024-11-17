let listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: []
  };
  
  let adicionarMais = true;
  
  alert("Bem-vindo à sua lista de compras! Vamos organizá-la por categorias.");
  
  while (adicionarMais) {
    let opcao = prompt("Deseja adicionar um item à sua lista de compras ou remover um? Responda com 'adicionar' ou 'remover'.");
  
    if (opcao.toLowerCase() === "adicionar") {
      let comida = prompt("Qual comida você deseja adicionar?");
      let categoria = prompt(`Em qual categoria essa comida se encaixa?
  Opções: Frutas, Laticínios, Congelados, Doces, Outros`);
  
      if (listaDeCompras[categoria]) {
        listaDeCompras[categoria].push(comida);
      } else {
        listaDeCompras.Outros.push(comida);
      }
    } else if (opcao.toLowerCase() === "remover") {

        let itensExistentes = [];
      for (let categoria in listaDeCompras) {
        if (listaDeCompras[categoria].length > 0) {
          itensExistentes = itensExistentes.concat(listaDeCompras[categoria]);
        }
      }
  
      if (itensExistentes.length === 0) {
        alert("Não há itens na lista para remover.");
      } else {

        let listaParaRemover = itensExistentes.join(", ");
        let itemParaRemover = prompt(`Esses são os itens presentes na lista: ${listaParaRemover}\nQual item você deseja remover?`);
  
        let itemRemovido = false;
        for (let categoria in listaDeCompras) {
          let index = listaDeCompras[categoria].indexOf(itemParaRemover);
          if (index !== -1) {
            listaDeCompras[categoria].splice(index, 1);
            itemRemovido = true;
            alert(`${itemParaRemover} foi removido da sua lista.`);
            break;
          }
        }
  
        if (!itemRemovido) {
          alert("Não foi possível encontrar o item dentro da lista!");
        }
      }
    } else {
      alert("Opção inválida. Por favor, escolha 'adicionar' ou 'remover'.");
    }
  
    let continuar = prompt("Deseja adicionar ou remover mais itens? Responda com 'sim' ou 'não'.");
    if (continuar.toLowerCase() !== "sim") {
      adicionarMais = false;
    }
  }

    let resultado = "Lista de Compras:\n";
  for (let categoria in listaDeCompras) {
    if (listaDeCompras[categoria].length > 0) {
      resultado += `${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
    } else {
      resultado += `${categoria}: \n`;
    }
  }
  
  alert(resultado);
  console.log(resultado);
  