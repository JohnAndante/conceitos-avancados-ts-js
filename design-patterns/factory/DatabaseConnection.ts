// Interface para todas as conexões de banco
interface DatabaseConnection {
    conectar(): void;
    consultar(query: string): Promise<any>;
}

// Conexão MySQL
class MySQLConnection implements DatabaseConnection {
    conectar() {
        console.log("Conectado ao MySQL");
    }

    async consultar(query: string) {
        console.log(`Executando query no MySQL: ${query}`);
        return [{ id: 1, nome: "Produto MySQL" }];
    }
}

// Conexão MongoDB
class MongoDBConnection implements DatabaseConnection {
    conectar() {
        console.log("Conectado ao MongoDB");
    }

    async consultar(query: string) {
        console.log(`Executando consulta no MongoDB: ${query}`);
        return [{ _id: "abc123", nome: "Produto MongoDB" }];
    }
}

// Conexão PostgreSQL
class PostgreSQLConnection implements DatabaseConnection {
    conectar() {
        console.log("Conectado ao PostgreSQL");
    }

    async consultar(query: string) {
        console.log(`Executando query no PostgreSQL: ${query}`);
        return [{ id: 101, nome: "Produto PostgreSQL" }];
    }
}

// Factory
class DatabaseFactory {
    static criarBanco(tipo: string): DatabaseConnection {
        switch (tipo.toLowerCase()) {
            case "mysql":
                return new MySQLConnection();
            case "mongodb":
                return new MongoDBConnection();
            case "postgresql":
                return new PostgreSQLConnection();
            default:
                throw new Error("Tipo de banco de dados não suportado");
        }
    }
}

// Cliente
async function executarConsulta(tipoBanco: string, query: string) {
    try {
        const banco = DatabaseFactory.criarBanco(tipoBanco);
        banco.conectar();
        const resultado = await banco.consultar(query);
        console.log("Resultado:", resultado);
    } catch (erro: any) {
        console.error(erro.message);
    }
}

async function main() {
    console.log("=== MySQL ===");
    await executarConsulta("mysql", "SELECT * FROM produtos");

    console.log("\n=== MongoDB ===");
    await executarConsulta("mongodb", "{ nome: 'Produto' }");

    console.log("\n=== PostgreSQL ===");
    await executarConsulta("postgresql", "SELECT * FROM pedidos");
}

main();

