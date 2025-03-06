import { User } from '../models/User';

export class UserService {
    async createUser(userData: Omit<User, 'id'>): Promise<User> {
        // Lógica de negócio para criar usuário
        return {} as User;
    }

    async getUsers(): Promise<User[]> {
        // Lógica de negócio para buscar usuários
        return [] as User[];
    }
}
