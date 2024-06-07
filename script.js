document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes('index.html')) {
        configurarPaginaInicial();
    } else if (window.location.pathname.includes('carrinho.html')) {
        configurarPaginaCarrinho();
    }
});

function adicionarAoCarrinho(produto) {
    localStorage.setItem('carrinho', produto);
    alert('Produto adicionado ao carrinho!');
}

function exibirCarrinho() {
    var carrinhoItens = localStorage.getItem('carrinho');
    if (carrinhoItens) {
        document.getElementById('carrinho-itens').innerHTML = '<p>' + carrinhoItens + '</p>';
    }
}



function configurarPaginaCarrinho() {
    exibirCarrinho();
}

function concluirCompra() {
    alert('Compra concluída! Obrigado por comprar na Cloth Geek.');
    localStorage.removeItem('carrinho');
    window.location.href = 'obrigado.html';
}