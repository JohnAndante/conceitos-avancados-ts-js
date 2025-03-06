// Interface Observer
interface Observer {
  update(status: string): void;
}

// Subject (quem vai emitir as notificações)
class Order {
  private observers: Observer[] = [];
  private status: string = "Criado";

  addObserver(observer: Observer) {
    this.observers.push(observer);
    console.log(`🔍 Observador ${observer.constructor.name} adicionado.`);
  }

  removeObserver(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
    console.log(`❌ Observador ${observer.constructor.name} removido.`);
  }

  setStatus(status: string) {
    console.log(`🚚 Pedido mudou para: ${status}`);
    this.status = status;
    this.notifyObservers();
  }

  notifyObservers() {
    console.log(`Notificando ${this.observers.length} observador(es)...`);
    for (const observer of this.observers) {
      observer.update(this.status);
    }
  }
}

// Observador para enviar e-mail
class EmailNotifier implements Observer {
  update(status: string) {
    console.log(`📧 Enviando e-mail... Pedido agora está ${status}`);
  }
}

// Observador para enviar SMS
class SMSNotifier implements Observer {
  update(status: string) {
    console.log(`📱 Enviando SMS... Pedido agora está ${status}`);
  }
}

// Teste
console.log("\n=== Sistema de Notificação ===");
const order = new Order();

const emailNotifier = new EmailNotifier();
const smsNotifier = new SMSNotifier();

order.addObserver(emailNotifier);
order.addObserver(smsNotifier);

order.setStatus("Pago");
order.removeObserver(emailNotifier);
order.setStatus("Enviado");
