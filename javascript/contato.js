// Cardápio organizado em 3 níveis (Categoria Geral -> Subcategoria -> Produtos)
const cardapioMultinivel = {
    "Cafe": {
        "Tradicional": [
            { value: "pao-chapa", text: "Pão na Chapa" },
            { value: "cafe-puro", text: "Café Puro" },
            { value: "cafe-com-leite", text: "Café com Leite" },
            { value: "achocolatado-quente", text: "Achocolatado Quente" },
            { value: "achocolatado-frio", text: "Achocolatado Frio" }
        ]
    },
    "Lanches": {
        "Tradicionais": [
            { value: "pao-com-ovo", text: "Pão com Ovo" },
            { value: "misto-quente", text: "Misto Quente" },
            { value: "x-Egg", text: "X-Egg" },
            { value: "x-Galinhão", text: "X-Galinhão" },
            { value: "x-Burguer", text: "X-Burguer" },
            { value: "x-Salada", text: "X-Salada" },
            { value: "x-Bacon", text: "X-Bacon" },
            { value: "x-Calabresa", text: "X-Calabresa" },
            { value: "x-Frango", text: "X-Frango" },
            { value: "x-Churrasco", text: "X-Churrasco" },
            { value: "x-Salame", text: "X-Salame" },
            { value: "x-Mortadela", text: "X-Mortadela" }
        ]
    },
    "Porçoes": {
        "Quentes": [
            { value: "batata-frita", text: "Batata Frita" },
            { value: "calabresa-acebolada", text: "Calabresa Acebolada" },
            { value: "Salame-300g", text: "Salame 300g" }
        ]
    },
    "Pastéis": {
        "Salgados": [
            { value: "pastel-carne", text: "Pastel de Carne" },
            { value: "pastel-carne-queijo", text: "Pastel de Carne com Queijo" },
            { value: "pastel-queijo", text: "Pastel de Queijo" },
            { value: "pastel-queijo-catupiry", text: "Pastel de Queijo com Catupiry" },
            { value: "pastel-bauru", text: "Pastel de Bauru" },
            { value: "pastel-pizza", text: "Pastel de Pizza" },
            { value: "pastel-palmito", text: "Pastel de Palmito" },
            { value: "pastel-palmito-catupiry", text: "Pastel de Palmito com Catupiry" },
            { value: "pastel-frango", text: "Pastel de Frango" },
            { value: "pastel-frango-catupiry", text: "Pastel de Frango com Catupiry" },
            { value: "pastel-calabresa", text: "Pastel de Calabresa" },
            { value: "pastel-calabresa-catupiry", text: "Pastel de Calabresa com Catupiry" }
        ]
    },
    "Salgados": {
        "Fritos": [
            { value: "coxinha-catupiry", text: "Coxinha de Frango com Catupiry" },
            { value: "coxinha-costela", text: "Coxinha de Costela" },
            { value: "risole-carne", text: "Risole de Carne" },
            { value: "risole-presunto", text: "Risole de Presunto e Queijo" }
        ],
        "Assados": [
            { value: "bauru", text: "Bauru" },
            { value: "hamburgao-cheddar", text: "Hamburgão de Cheddar" },
            { value: "hamburgao-queijo", text: "Hamburgão de Queijo" },
            { value: "palmito-queijo", text: "Palmito com Queijo" },
            { value: "palmito-catupiry", text: "Palmito com Catupiry" },
            { value: "frango", text: "Frango" },
            { value: "frango-queijo", text: "Frango com Queijo" },
            { value: "frango-catupiry", text: "Frango com Catupiry" },
            { value: "kibe", text: "Kibe" },
            { value: "calabresa", text: "Calabresa" },
            { value: "calabresa-catupiry", text: "Calabresa com Catupiry" },
            { value: "esfiha-carne", text: "Esfiha de Carne" },
            { value: "esfiha-frango", text: "Esfiha de Frango" }
        ]
    },
    "Bebidas": {
        "Achocolatados": [
            { value: "nescau-zero-180", text: "Nescau Zero 180ml" },
            { value: "nescafe-latte-270", text: "Nescafé Latte 270ml" },
            { value: "nescau-270", text: "Nescau 270ml" },
            { value: "neston-270", text: "Neston 270ml" },
            { value: "alpino-270", text: "Alpino 270ml" }
        ],
        "Refri-Garrafa-200ml": [
            { value: "coca-200", text: "Coca-Cola 200ml" },
            { value: "coca-zero-200", text: "Coca-Cola Zero 200ml" },
            { value: "fanta-laranja-200", text: "Fanta Laranja 200ml" }
        ],
        "Suco-caixa-200ml": [
            { value: "suco-del-valle-pessego-200", text: "Suco Del Valle Pessêgo 200ml" }
        ],
        "Lata-220ml": [
            { value: "coca-lata-220", text: "Coca-Cola Lata 220ml" },
            { value: "coca-zero-lata-220", text: "Coca-Cola Zero Lata 220ml" },
            { value: "coca-cafe-lata-220", text: "Coca-Cola Café Lata 220ml" },
            { value: "fanta-laranja-lata-220", text: "Fanta Laranja Lata 220ml" },
            { value: "fanta-uva-lata-220", text: "Fanta Uva Lata 220ml" }
        ],
        "Refri-Vidro-290ml": [
            { value: "coca-vidro-290", text: "Coca-Cola Vidro 290ml" }
        ],
        "Lata-350ml": [
            { value: "fanta-uva-lata-350", text: "Fanta Uva Lata 350ml" },
            { value: "fanta-maracuja-lata-350", text: "Fanta Maracujá Lata 350ml" },
            { value: "fanta-laranja-lata-350", text: "Fanta Laranja Lata 350ml" },
            { value: "coca-lata", text: "Coca-Cola Lata 350ml" },
            { value: "coca-zero-lata", text: "Coca-Cola Zero Lata 350ml" },
            { value: "sprite-zero-lata-350", text: "Sprite Zero Lata 350ml" }
        ],
        "Suco-Garrafa-450ml": [
            { value: "suco-del-valle-citricas-450", text: "Suco Del Valle Frutas Citricas 450ml" },
            { value: "suco-del-valle-laranja-450", text: "Suco Del Valle Laranja 450ml" },
            { value: "suco-del-valle-uva-450", text: "Suco Del Valle Uva 450ml" },
            { value: "bona-mix-laranja-acerola-450", text: "Bona Mix Laranja e Acerola 450ml" }
        ],
        "Isotonicos": [
            { value: "tnt-sport-laranja-500", text: "TNT Sport Laranja 500ml" },
            { value: "tnt-sport-uva-500", text: "TNT Sport Uva 500ml" },  
            { value: "tnt-sport-limao-500", text: "TNT Sport Limão 500ml" }
        ], 
        "Refri-Garrafa-600ml": [
            { value: "coca-600", text: "Coca-Cola 600ml" },
            { value: "coca-zero-600", text: "Coca-Cola Zero 600ml" },
            { value: "fanta-laranja-600", text: "Fanta Laranja 600ml" },
            { value: "tatuina-600", text: "Tatuina 600ml" },
            { value: "tatuina-rossi-600", text: "Tatuina Rossi 600ml" },
            { value: "vedete-600", text: "Vedete 600ml" }
        ],
        "Retornavel": [
            { value: "coca-retornavel-290", text: "Coca-Cola Retornável 290ml" },
            { value: "coca-zero-retornavel-290", text: "Coca-Cola Zero Retornável 290ml" },
            { value: "fanta-laranja-retornavel-290", text: "Fanta Laranja Retornável 290ml" }
        ],
        "Agua": [
            { value: "bonanatural-sem-gas", text: "Água Mineral Sem Gás" },
            { value: "bonanatural-com-gas", text: "Água Mineral Com Gás" }
        ],
        "Sprite": [
            { value: "Sprite-Lemon-Fresh-510", text: "Sprite Lemon Fresh Lata 510ml" }
        ]
    },
    "Alcoolicas": {
        "Cervejas": [
            { value: "skol-lata", text: "Skol Lata 350ml" },
            { value: "brahma-lata", text: "Brahma Lata 350ml" },
            { value: "antartica-lata", text: "Antarctica Lata 350ml" }
        ],
        "Destilados": [
            { value: "cachaça-51", text: "Cachaça 51 600ml" },
            { value: "vodka-orfim", text: "Vodka Orfim 600ml" }
        ]
    }   
};

const nomesCategorias = {
    "Cafe": "Café da Manhã",
    "Lanches": "Lanches",
    "Porçoes": "Porções",
    "Pastéis": "Pastéis",
    "Salgados": "Salgados",
    "Bebidas": "Bebidas Frias",
    "Alcoolicas": "Bebidas Alcoólicas"
};

const nomesSubcategorias = {
    "Tradicional": "Tradicional",
    "Tradicionais": "Tradicionais",
    "Quentes": "Porções Quentes",
    "Salgados": "Pastéis Salgados",
    "Fritos": "Salgados Fritos",
    "Assados": "Salgados Assados",
    "Achocolatados": "Achocolatados",
    "Refri-Garrafa-200ml": "Refri Garrafa 200ml",
    "Suco-caixa-200ml": "Suco Caixa 200ml",
    "Lata-220ml": "Lata 220ml",
    "Refri-Vidro-290ml": "Refri Vidro 290ml",
    "Lata-350ml": "Lata 350ml",
    "Suco-Garrafa-450ml": "Suco Garrafa 450ml",
    "Isotonicos": "Isotônicos",
    "Refri-Garrafa-600ml": "Refri Garrafa 600ml",
    "Retornavel": "Retornável",
    "Agua": "Água",
    "Sprite": "Sprite",
    "Cervejas": "Cervejas",
    "Destilados": "Destilados"
};

// Controla as mudanças de Categoria -> Subcategoria -> Produto
function gerenciarFluxoCampos(selectCat, selectSub, selectProd) {
    selectCat.addEventListener('change', function() {
        const catEscolhida = this.value;
        selectSub.innerHTML = '<option value="" disabled selected hidden>Escolha o Tamanho/Tipo</option>';
        selectProd.innerHTML = '<option value="" disabled selected hidden>Selecione o seu pedido</option>';
        selectSub.disabled = false;
        selectProd.disabled = true;
        
        if (cardapioMultinivel[catEscolhida]) {
            Object.keys(cardapioMultinivel[catEscolhida]).forEach(subKey => {
                const opt = document.createElement('option');
                opt.value = subKey;
                opt.textContent = nomesSubcategorias[subKey] || subKey;
                selectSub.appendChild(opt);
            });
        }
    });

    selectSub.addEventListener('change', function() {
        const catEscolhida = selectCat.value;
        const subEscolhida = this.value;
        selectProd.innerHTML = '<option value="" disabled selected hidden>Selecione o seu pedido</option>';
        selectProd.disabled = false;
        
        if (cardapioMultinivel[catEscolhida] && cardapioMultinivel[catEscolhida][subEscolhida]) {
            cardapioMultinivel[catEscolhida][subEscolhida].forEach(item => {
                const opt = document.createElement('option');
                opt.value = item.value;
                opt.textContent = item.text;
                selectProd.appendChild(opt);
            });
        }
    });
}

// Controla os cliques de + e - limitando de 1 a 5 unidades por linha
function configurarBotoesQuantidade(containerItem) {
    const btnMenos = containerItem.querySelector('.qtd-menos');
    const btnMais = containerItem.querySelector('.qtd-mais');
    const numQtd = containerItem.querySelector('.num-qtd');

    btnMenos.addEventListener('click', function() {
        let atual = parseInt(numQtd.textContent);
        if (atual > 1) {
            numQtd.textContent = atual - 1;
        }
    });

    btnMais.addEventListener('click', function() {
        let atual = parseInt(numQtd.textContent);
        if (atual < 5) { // LIMITADOR MÁXIMO DE 5 ITENS
            numQtd.textContent = atual + 1;
        } else {
            alert("O limite máximo para cada item nesta linha é de 5 unidades.");
        }
    });
}

// Botão "Adicionar outro item"
document.getElementById('add-item-btn').addEventListener('click', function() {
    const lista = document.getElementById('pedido-lista');
    const novoItem = document.createElement('div');
    novoItem.classList.add('pedido-item', 'fade-in');
    
    novoItem.innerHTML = `
        <div class="input-wrapper select-dinamico">
            <select class="select-categoria" required>
                <option value="" disabled selected hidden>Escolha a Categoria</option>
                <option value="Cafe">Café da Manhã</option>
                <option value="Lanches">Lanches</option>
                <option value="Porçoes">Porções</option>
                <option value="Pastéis">Pastéis</option>
                <option value="Salgados">Salgados</option>
                <option value="Bebidas">Bebidas Frias</option>
                <option value="Alcoolicas">Bebidas Alcoólicas</option>
            </select>
            <i class="fa-solid fa-arrow-down"></i>
        </div>

        <div class="input-wrapper select-dinamico">
            <select class="select-subcategoria" required disabled>
                <option value="" disabled selected hidden>Escolha o Tamanho/Tipo</option>
            </select>
            <i class="fa-solid fa-arrow-down"></i>
        </div>

        <div class="input-wrapper select-dinamico">
            <select class="select-produto" name="produtos[]" required disabled>
                <option value="" disabled selected hidden>Selecione o seu pedido</option>
            </select>
            <i class="fa-solid fa-arrow-down"></i>
        </div>

        <div class="controle-qtd">
            <button type="button" class="btn-qtd qtd-menos">-</button>
            <span class="num-qtd">1</span>
            <button type="button" class="btn-qtd qtd-mais">+</button>
        </div>

        <button type="button" class="btn-remove-item"><i class="fa-solid fa-xmark"></i></button>
    `;
    
    lista.appendChild(novoItem);
    
    gerenciarFluxoCampos(
        novoItem.querySelector('.select-categoria'),
        novoItem.querySelector('.select-subcategoria'),
        novoItem.querySelector('.select-produto')
    );
    
    configurarBotoesQuantidade(novoItem);
    
    novoItem.querySelector('.btn-remove-item').addEventListener('click', function() {
        novoItem.remove();
    });
});

// Inicializa a primeira linha padrão da página ao carregar
gerenciarFluxoCampos(
    document.getElementById('primeira-categoria'),
    document.getElementById('primeira-subcategoria'),
    document.getElementById('primeiro-produto')
);
configurarBotoesQuantidade(document.querySelector('.pedido-item'));


/* ==========================================================================
ENVIO PARA O WHATSAPP
   ========================================================================== */
document.querySelector('.form-container form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeCliente = this.querySelector('input[type="text"]').value;
    const horarioReserva = this.querySelector('.input-group:nth-of-type(2) select').value;
    const observacoes = this.querySelector('textarea').value;
    const numeroTelefone = "5511975041507"; 

    let message = `*Novo Pedido de Reserva*\n\n`;
    message += `*Cliente:* ${nomeCliente}\n`;
    message += `*Horário de Retirada:* ${horarioReserva}\n\n`;
    message += `*Itens do Pedido:*\n`;

    const itensPedido = document.querySelectorAll('.pedido-item');
    let contadorItensValidos = 0;
    
    itensPedido.forEach((item) => {
        const selectCat = item.querySelector('.select-categoria') || document.getElementById('primeira-categoria');
        const selectSub = item.querySelector('.select-subcategoria') || document.getElementById('primeira-subcategoria');
        const selectProd = item.querySelector('.select-produto') || document.getElementById('primeiro-produto');
        const elementoQtd = item.querySelector('.num-qtd');
        
        const quantidade = elementoQtd ? elementoQtd.textContent : 1;

        if (selectProd && selectProd.value !== "") {
            contadorItensValidos++;
            const categoriaTexto = nomesCategorias[selectCat.value] || "Item";
            const subcategoriaTexto = nomesSubcategorias[selectSub.value] || selectSub.value;
            const produtoTexto = selectProd.options[selectProd.selectedIndex].text;

            message += `${contadorItensValidos}. *[${quantidade}x]* ${categoriaTexto} (${subcategoriaTexto}) -> _${produtoTexto}_\n`;
        }
    });

    if (contadorItensValidos === 0) {
        alert("Por favor, selecione pelo menos um produto antes de enviar.");
        return;
    }

    if (observacoes.trim() !== "") {
        message += `\n*Observações:* ${observacoes}\n`;
    }

    const mensagemFormatada = encodeURIComponent(message);
    const urlWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagemFormatada}`;
    window.open(urlWhatsapp, '_blank');
});