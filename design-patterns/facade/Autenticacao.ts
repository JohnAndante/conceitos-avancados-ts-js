// Subsistema 1 - Autenticação
class AuthService {
    autenticar(usuario: string, senha: string): boolean {
        console.log(`> Autenticando usuário ${usuario}`);
        return usuario === "admin" && senha === "123456";
    }
}

// Subsistema 2 - Pagamento
class PaymentService {
    processarPagamento(valor: number): boolean {
        console.log(`> Processando pagamento de R$ ${valor}`);
        return valor > 0;
    }
}

// Subsistema 3 - Email
class EmailService {
    enviarEmail(destinatario: string, assunto: string): void {
        console.log(`> Enviando e-mail para ${destinatario} com assunto: ${assunto}`);
    }
}

// Subsistema 4 - Notificação WhatsApp
class WhatsAppService {
    enviarMensagem(numero: string, mensagem: string): void {
        console.log(`> Enviando mensagem para ${numero}: ${mensagem}`);
    }
}

// Facade
class PedidoFacade {
    private auth: AuthService;
    private pagamento: PaymentService;
    private email: EmailService;
    private whatsapp: WhatsAppService;

    constructor() {
        this.auth = new AuthService();
        this.pagamento = new PaymentService();
        this.email = new EmailService();
        this.whatsapp = new WhatsAppService();
    }

    realizarPedido(usuario: string, senha: string, valor: number, email: string, telefone: string) {
        if (!this.auth.autenticar(usuario, senha)) {
            console.log("!> Falha na autenticação! <!");
            return;
        }

        if (!this.pagamento.processarPagamento(valor)) {
            console.log("!> Pagamento rejeitado! <!");
            return;
        }

        this.email.enviarEmail(email, "Pedido Confirmado");
        this.whatsapp.enviarMensagem(telefone, "Seu pedido foi confirmado!");
        console.log("> Pedido realizado com sucesso!");
    }
}

console.log("=== Sistema de Pedidos ===");
const pedidoFacade = new PedidoFacade();

console.log('\n\nRealizando pedido no1:\n');
pedidoFacade.realizarPedido("admin", "123456", 100, "cliente@email.com", "+554499999999");

console.log('\n\nRealizando pedido no2:\n');
pedidoFacade.realizarPedido("admin", "senha_errada", 100, "cliente@email.com", "+554499999999");
