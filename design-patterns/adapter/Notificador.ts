// Interface que o sistema conhece
interface Notificador {
    enviar(mensagem: string, destinatario: string): void;
}

// Serviço externo SendGrid (Email)
class SendGridAPI {
    enviarEmail(email: string, conteudo: string) {
        console.log(`Email enviado para ${email}: ${conteudo}`);
    }
}

// Adapter para SendGrid
class SendGridAdapter implements Notificador {
    private api: SendGridAPI;

    constructor() {
        this.api = new SendGridAPI();
    }

    enviar(mensagem: string, destinatario: string): void {
        console.log("Adaptando mensagem para SendGrid...");
        this.api.enviarEmail(destinatario, mensagem);
    }
}

// Serviço externo Twilio (SMS)
class TwilioAPI {
    enviarSMS(numero: string, texto: string) {
        console.log(`SMS enviado para ${numero}: ${texto}`);
    }
}

// Adapter para Twilio
class TwilioAdapter implements Notificador {
    private api: TwilioAPI;

    constructor() {
        this.api = new TwilioAPI();
    }

    enviar(mensagem: string, destinatario: string): void {
        console.log("Adaptando mensagem para Twilio...");
        this.api.enviarSMS(destinatario, mensagem);
    }
}

// Cliente que usa os adaptadores
class SistemaNotificacao {
    private notificadores: Notificador[] = [];

    adicionarNotificador(notificador: Notificador): void {
        this.notificadores.push(notificador);
    }

    notificarTodos(mensagem: string, destinatario: string): void {
        for (const notificador of this.notificadores) {
            notificador.enviar(mensagem, destinatario);
        }
    }
}

// Execução
console.log("=== Sistema de Notificações ===");
const sistema = new SistemaNotificacao();

const emailAdapter = new SendGridAdapter();
const smsAdapter = new TwilioAdapter();

sistema.adicionarNotificador(emailAdapter);
sistema.adicionarNotificador(smsAdapter);

sistema.notificarTodos("Sua conta foi criada!", "usuario@email.com");
sistema.notificarTodos("Seu código de verificação é 1234", "+5511999999999");
