// Banco de Dados (Simulação Singleton)
class Database {
    private static instance: Database | null = null;

    private constructor() {
        console.log("Conectando ao Banco de Dados...");
    }

    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    query(sql: string) {
        console.log(`Executando query: ${sql}`);
    }
}

// Cache (Redis Simulado)
class DataCache {
    private static instance: DataCache | null = null;
    private data: Map<string, string>;

    private constructor() {
        this.data = new Map();
        console.log("DataCache Redis inicializado...");
    }

    static getInstance(): DataCache {
        if (!DataCache.instance) {
            DataCache.instance = new DataCache();
        }
        return DataCache.instance;
    }

    set(key: string, value: string) {
        this.data.set(key, value);
        console.log(`Cache SET: ${key} -> ${value}`);
    }

    get(key: string): string | undefined {
        console.log(`Cache GET: ${key}`);
        return this.data.get(key);
    }
}

// Configurações (Singleton)
class Config {
    private static instance: Config | null = null;
    private envConfig: { [key: string]: string };

    private constructor() {
        console.log("Carregando configurações...");
        this.envConfig = {
            DB_URL: "mysql://localhost:3306",
            REDIS_URL: "redis://localhost:6379",
            API_KEY: "123456789",
        };
    }

    static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }

    get(key: string): string | undefined {
        return this.envConfig[key];
    }
}

// Simulação do Cliente
function executarBackend() {
    console.log("\n=== Inicializando Backend ===");

    const db = Database.getInstance();
    db.query("SELECT * FROM usuarios");

    const cache = DataCache.getInstance();
    cache.set("token", "abcd1234");
    console.log(`Token Cache: ${cache.get("token")}`);

    const config = Config.getInstance();
    console.log(`DB_URL: ${config.get("DB_URL")}`);

    // Tentando criar novas instâncias
    console.log("\n=== Testando Singleton ===");
    const db2 = Database.getInstance();
    const cache2 = DataCache.getInstance();
    const config2 = Config.getInstance();

    console.log(`Database é igual? ${db === db2}`);
    console.log(`Cache é igual? ${cache === cache2}`);
    console.log(`Config é igual? ${config === config2}`);
}

executarBackend();
