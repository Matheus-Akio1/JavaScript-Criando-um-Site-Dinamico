const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-botao");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

botaoSalvarItem.addEventListener("click", adicionarItem);
function adicionarItem(evento) {
    evento.preventDefault();
    
    const itemDaLista = document.createElement("li"); // Criando um elemento "LI"
    const containerItemLista = document.createElement("div"); // Criando um elemento "DIV"
    containerItemLista.classList.add("item-lista-container"); // Criando uma classe com o nome de "item-lista-container" para a DIV

    const containerNomeDoItem = document.createElement("div"); // Crianndo um elemento "DIV"

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function(evento) {
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustumizado = evento.currentTarget.querySelector(".checkbox-customizado");

        if (checkboxInput.checked) {
            checkboxCustumizado.classList.add("checked");
        } else {
            checkboxCustumizado.classList.remove("checked");
        }
    })

    const checkboxCustumizado = document.createElement("div");
    checkboxCustumizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustumizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);

    const nomeItem = document.createElement("p"); // Criando um elemento "P"
    nomeItem.innerText = item.value; // nomeItem vai receber o valor do campo de digitacao.
    containerNomeDoItem.appendChild(nomeItem); // Definindo que o elemento "P" vai ser filho do elemento "DIV".

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-acao");
    
    const imagemRemover = document.createElement("img");
    imagemRemover.src = "assets/Excluir.svg"; // Definindo qual sera a imagem 
    imagemRemover.alt = "Remover";

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-acao");

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "assets/Edição.svg";
    imagemEditar.alt = "Editar"

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem); // Definindo que o elemento "containerNomeDoItem" sera filho do "containerItemLista"
    containerItemLista.appendChild(containerBotoes); // Defininfo que o elemento "containerBotoes" sera filho do "containerItemLista"
    itemDaLista.appendChild(containerItemLista); // Definindo que o elemento "DIV" vai ser filho do elemento "LI".
    listaDeCompras.appendChild(itemDaLista);
}