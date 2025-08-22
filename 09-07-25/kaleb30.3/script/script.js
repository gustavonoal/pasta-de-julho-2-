const produtos = [
    { nome: "Camiseta Branca", preco: 29.99, categoria: "camiseta" },
    { nome: "Camiseta Preta", preco: 34.99, categoria: "camiseta" },
    { nome: "Boné Azul", preco: 19.9, categoria: "acessorio" },
    { nome: "Pulseira", preco: 15.5, categoria: "acessorio" },
    { nome: "Camiseta Vermelho", preco: 39.9, categoria: "camiseta" },
    { nome: "Óculos de Sol", preco: 59.9, categoria: "acessorio" }
];

let carrinho = [];
const produtosEl = document.getElementById("produtos");
const itensCarrinhosEl = document.getElementById("itens-carrinho");
const totalEl = document.getElementById("total");
const filtroEl = document.getElementById("categoria-filtro");

function exibirProdutos(filtrados = produtos) {
    produtosEl.innerHTML = "";
    filtrados.forEach(prod => {
        const div = document.createElement("div");
        div.className = "produto";
        div.innerHTML = `
          <h3>${prod.nome}</h3>
          <p>R$ ${prod.preco.toFixed(2)}</p>
          <button onclick ="adicionarAoCarrinho('${prod.nome}', ${prod.preco})">Adicionar ao Carrinho</button>
          `;
        produtosEl.appendChild(div);
    });
}

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    itensCarrinhosEl.innerHTML = "";
    let total = 0;
    carrinho.forEach(item => {
        total += item.preco;
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        itensCarrinhosEl.appendChild(li);
    });
    totalEl.textContent = total.toFixed(2);
}

filtroEl.addEventListener("change", () => {
    const categoria = filtroEl.value;
    if (categoria === "todas") {
        exibirProdutos(produtos);
    } else {
        const filtrados = produtos.filter(p => p.categoria === categoria);
        exibirProdutos(filtrados);
    }
});
exibirProdutos();