interface ObserverC {
    updateCallback(event: string, data: any): void;
}

class AuthSubject {
    private observers: ObserverC[] = [];

    addObserver(observer: ObserverC) {
        this.observers.push(observer);
        console.log(`🔍 Observador ${observer.constructor.name} adicionado.`);
    }

    removeObserver(observer: ObserverC) {
        this.observers = this.observers.filter((obs) => obs !== observer);
        console.log(`❌ Observador ${observer.constructor.name} removido.`);
    }

    authenticate(user: string) {
        console.log(`✅ Usuário ${user} autenticado.`);
        this.notifyObservers("LOGIN", { user });
    }

    private notifyObservers(event: string, data: any) {
        console.log(`Notificando ${this.observers.length} observador(es)...`);
        for (const observer of this.observers) {
            observer.updateCallback(event, data);
        }
    }
}

class LogService implements ObserverC {
    updateCallback(event: string, data: any) {
        console.log(`📝 Log: Evento ${event} para o usuário ${data.user}`);
    }
}

class EmailServiceOb implements ObserverC {
    updateCallback(event: string, data: any) {
        console.log(`📧 E-mail enviado para ${data.user}: Seu login foi realizado com sucesso.`);
    }
}

class JWTService implements ObserverC {
    updateCallback(event: string, data: any) {
        const token = `${data.user}-TOKEN-123`;
        console.log(`🔑 JWT Gerado: ${token}`);
    }
}

// Testando...
console.log("\n=== Sistema de Autenticação ===");
const auth = new AuthSubject();

const logService = new LogService();
const emailService = new EmailServiceOb();
const jwtService = new JWTService();

auth.addObserver(logService);
auth.addObserver(emailService);
auth.addObserver(jwtService);

auth.authenticate("jose.backend");

auth.removeObserver(emailService);
console.log("\nTentando novo login...");

auth.authenticate("maria.dev");
