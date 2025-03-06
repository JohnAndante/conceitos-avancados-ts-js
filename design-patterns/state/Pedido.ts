// Interface para os estados
interface PedidoState {
    aprovarPedido(): void;
    cancelarPedido(): void;
    despacharPedido(): void;
}

// Contexto
class Pedido {
    private state: PedidoState;

    constructor() {
        this.state = new PedidoPendente(this);
        console.log("- Pedido criado! Estado atual: Pendente");
    }

    setState(state: PedidoState) {
        this.state = state;
    }

    aprovarPedido() {
        this.state.aprovarPedido();
    }

    cancelarPedido() {
        this.state.cancelarPedido();
    }

    despacharPedido() {
        this.state.despacharPedido();
    }
}

// Estado Pendente
class PedidoPendente implements PedidoState {
    constructor(private pedido: Pedido) { }

    aprovarPedido() {
        console.log("- Pedido aprovado!");
        this.pedido.setState(new PedidoPago(this.pedido));
    }

    cancelarPedido() {
        console.log("- Pedido cancelado!");
        this.pedido.setState(new PedidoCancelado(this.pedido));
    }

    despacharPedido() {
        console.log("!> Não é possível despachar um pedido pendente. <!");
    }
}

// Estado Pago
class PedidoPago implements PedidoState {
    constructor(private pedido: Pedido) { }

    aprovarPedido() {
        console.log("- Pedido já aprovado.");
    }

    cancelarPedido() {
        console.log("!> Pedido cancelado! <!");
        this.pedido.setState(new PedidoCancelado(this.pedido));
    }

    despacharPedido() {
        console.log("- Pedido despachado!");
        this.pedido.setState(new PedidoEnviado(this.pedido));
    }
}

// Estado Enviado
class PedidoEnviado implements PedidoState {
    constructor(private pedido: Pedido) { }

    aprovarPedido() {
        console.log("- Pedido já aprovado e enviado.");
    }

    cancelarPedido() {
        console.log("!> Não é possível cancelar um pedido enviado. <!");
    }

    despacharPedido() {
        console.log("- Pedido já foi enviado.");
    }
}

// Estado Cancelado
class PedidoCancelado implements PedidoState {
    constructor(private pedido: Pedido) { }

    aprovarPedido() {
        console.log("!> Pedido cancelado não pode ser aprovado. <!");
    }

    cancelarPedido() {
        console.log("!> Pedido já foi cancelado. <!");
    }

    despacharPedido() {
        console.log("!> Pedido cancelado não pode ser despachado. <!");
    }
}

// Teste
console.log("\n=== Processo de Pedido ===");

console.log("\n--- Pedido 1 ---");
const pedido = new Pedido();

pedido.aprovarPedido(); // Aprova pedido
pedido.despacharPedido(); // Despacha pedido
pedido.cancelarPedido(); // Tenta cancelar (não permitido)

console.log("\n--- Pedido 2 ---");
const pedido2 = new Pedido();

pedido2.aprovarPedido(); // Aprova pedido
pedido2.cancelarPedido(); // Cancela pedido
pedido2.despacharPedido(); // Tenta despachar (não permitido)
pedido2.aprovarPedido(); // Tenta aprovar (não permitido)
pedido2.cancelarPedido(); // Tenta cancelar (não permitido)
