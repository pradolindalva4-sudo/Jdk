const PDV_JDP = {
    versao: "2.0.1",
    moeda: "R$",
    taxa_entrega: 0,
    calcularTotal: (itens) => {
        return itens.reduce((acc, item) => acc + item.preco, 0);
    },
    imprimirCupom: (pedido) => {
        console.log("--- JDP INDUSTRIAL - PDV ---");
        console.log("Pedido: " + pedido.id);
        console.log("Total: R$ " + pedido.total);
    }
};
